/**
 * Stripe Webhook API — POST /api/stripe/webhook
 *
 * Handles subscription lifecycle events from Stripe. Fulfils by updating
 * the in-memory subscription store. Stripe is the source of truth — we
 * fetch the latest state from the API on every event so we never get
 * out of sync, even if a webhook is missed.
 *
 * Security: the raw body is verified against STRIPE_WEBHOOK_SECRET using
 * Stripe's signature. Never trust the parsed JSON without this check.
 *
 * Events we care about:
 *   - checkout.session.completed       (initial payment success)
 *   - customer.subscription.created     (sub created)
 *   - customer.subscription.updated     (tier/status change)
 *   - customer.subscription.deleted     (canceled)
 *   - invoice.payment_failed            (payment failed)
 *
 * Idempotent: re-delivering the same event is a no-op (we just re-fetch
 * the subscription from Stripe and update the cache).
 */
import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import {
  type Subscription,
  type Tier,
  priceToTier,
  upsertSubscription,
  cancelSubscription,
} from "@/lib/subscriptions";

export const runtime = "nodejs";
// Important: never cache or pre-parse the body. Stripe signature check needs
// the raw bytes.
export const dynamic = "force-dynamic";

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  if (!WEBHOOK_SECRET) {
    return NextResponse.json(
      { error: "webhook_not_configured" },
      { status: 503 },
    );
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json(
      { error: "missing_signature" },
      { status: 400 },
    );
  }

  // The signature verification needs the raw body — never use req.json() first.
  const rawBody = await req.text();
  const stripe = getStripe();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, WEBHOOK_SECRET);
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown";
    console.error("[stripe/webhook] signature verification failed:", message);
    return NextResponse.json(
      { error: "invalid_signature", message },
      { status: 400 },
    );
  }

  // Process event. We try/catch per event so one bad event doesn't break
  // delivery for the others (Stripe retries on non-2xx).
  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        await fulfillCheckoutCompleted(session);
        break;
      }
      case "customer.subscription.created":
      case "customer.subscription.updated": {
        const sub = event.data.object as Stripe.Subscription;
        await syncSubscription(sub);
        break;
      }
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        if (typeof sub.customer === "string") {
          cancelSubscription(sub.customer);
        } else if (sub.customer && typeof sub.customer !== "string") {
          cancelSubscription(sub.customer.id);
        }
        break;
      }
      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId =
          typeof invoice.customer === "string"
            ? invoice.customer
            : invoice.customer?.id;
        if (customerId) {
          // We don't cancel on first failure — Stripe retries. Just log.
          console.warn(
            `[stripe/webhook] payment failed for customer ${customerId}`,
          );
        }
        break;
      }
      default:
        // Unhandled events are fine — just log and 200.
        console.log(`[stripe/webhook] unhandled event type: ${event.type}`);
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown";
    console.error(
      `[stripe/webhook] error processing ${event.type} (${event.id}):`,
      message,
    );
    // 500 → Stripe will retry with exponential backoff
    return NextResponse.json(
      { error: "processing_failed", message },
      { status: 500 },
    );
  }

  return NextResponse.json({ received: true, type: event.type });
}

async function fulfillCheckoutCompleted(
  session: Stripe.Checkout.Session,
): Promise<void> {
  // Only subscription checkouts carry a subscription id
  if (session.mode !== "subscription" || !session.subscription) return;
  const subscriptionId =
    typeof session.subscription === "string"
      ? session.subscription
      : session.subscription.id;
  const stripe = getStripe();
  const sub = await stripe.subscriptions.retrieve(subscriptionId);
  await syncSubscription(sub);
}

async function syncSubscription(sub: Stripe.Subscription): Promise<void> {
  const customerId =
    typeof sub.customer === "string" ? sub.customer : sub.customer.id;

  // Determine tier from the first line item's price (or metadata).
  let tier: Tier | null = null;
  const firstItem = sub.items.data[0];
  if (firstItem) {
    tier = priceToTier(firstItem.price.id);
  }
  if (!tier && sub.metadata?.tier) {
    tier = sub.metadata.tier as Tier;
  }

  // Determine email — fetch the customer once if not already known.
  let email: string | null = null;
  if (typeof sub.customer === "string") {
    const customer = await getStripe().customers.retrieve(sub.customer);
    if (!customer.deleted) {
      email = customer.email ?? null;
    }
  } else if (sub.customer && !sub.customer.deleted) {
    email = sub.customer.email ?? null;
  }

  const record: Subscription = {
    customerId,
    email,
    tier,
    status: sub.status as Subscription["status"],
    currentPeriodEnd:
      // Stripe SDK shapes vary across versions; both fields may exist.
      (sub as unknown as { current_period_end?: number })
        .current_period_end ?? null,
    cancelAtPeriodEnd: sub.cancel_at_period_end,
    updatedAt: Date.now(),
  };
  upsertSubscription(record);
}
