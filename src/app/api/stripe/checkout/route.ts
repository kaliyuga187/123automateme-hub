/**
 * Stripe Checkout API — POST /api/stripe/checkout
 *
 * Body: { tier: "starter" | "pro" | "studio", email?: string }
 * Returns: { url: string } — the Stripe-hosted Checkout URL to redirect to.
 *
 * Design:
 *   - Reuses price IDs from env (STRIPE_PRICE_STARTER / PRO / STUDIO) when set.
 *   - Falls back to inline price_data (dev/test convenience) so the page
 *     works even before you create Stripe products in the dashboard.
 *   - Always sets customer_creation: "always" so we get a customer record
 *     even if the email is already known.
 *   - The success/cancel URLs include ?session_id={CHECKOUT_SESSION_ID} so the
 *     /thanks page can show a real receipt.
 *
 * Rate-limited: 10 requests per IP per minute (in-memory, see route).
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getStripe, isStripeConfigured } from "@/lib/stripe";
import type { Tier } from "@/lib/subscriptions";

export const runtime = "nodejs";

const BodySchema = z.object({
  tier: z.enum(["starter", "pro", "studio"]),
  email: z.string().email().optional(),
});

const TIER_CONFIG: Record<
  Tier,
  {
    name: string;
    amount: number; // cents
    interval: "month" | "year";
    fallbackDescription: string;
  }
> = {
  starter: {
    name: "Starter",
    amount: parseInt(process.env.STRIPE_PRICE_STARTER_AMOUNT ?? "1900", 10),
    interval: "month",
    fallbackDescription: "Newsletter + 1 paid template/month",
  },
  pro: {
    name: "Pro",
    amount: parseInt(process.env.STRIPE_PRICE_PRO_AMOUNT ?? "4900", 10),
    interval: "month",
    fallbackDescription: "All templates + private repos",
  },
  studio: {
    name: "Studio",
    amount: parseInt(process.env.STRIPE_PRICE_STUDIO_AMOUNT ?? "19900", 10),
    interval: "month",
    fallbackDescription: "Monthly 1-on-1 + everything in Pro",
  },
};

// In-memory IP rate limit (per route module instance)
const RATE = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60_000;

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function checkRate(ip: string): boolean {
  const now = Date.now();
  const bucket = RATE.get(ip);
  if (!bucket || bucket.resetAt < now) {
    RATE.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (bucket.count >= RATE_LIMIT) return false;
  bucket.count += 1;
  return true;
}

function getBaseUrl(req: NextRequest): string {
  // 1. Explicit env var (preferred — works in all envs)
  const fromEnv = process.env.NEXT_PUBLIC_BASE_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  // 2. The request's own origin (works in dev + behind reverse proxy that sets host)
  const origin = req.headers.get("origin") ?? req.nextUrl.origin;
  return origin.replace(/\/$/, "");
}

export async function POST(req: NextRequest) {
  if (!isStripeConfigured()) {
    return NextResponse.json(
      {
        error: "stripe_not_configured",
        message:
          "Server is missing STRIPE_SECRET_KEY. Add it to .env and restart the dev server.",
      },
      { status: 503 },
    );
  }

  const ip = getClientIp(req);
  if (!checkRate(ip)) {
    return NextResponse.json(
      { error: "rate_limited", message: "Too many requests, slow down." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "bad_json", message: "Request body must be valid JSON." },
      { status: 400 },
    );
  }
  const parsed = BodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "validation",
        issues: parsed.error.flatten().fieldErrors,
        message: "Invalid request body.",
      },
      { status: 400 },
    );
  }

  const { tier, email } = parsed.data;
  const config = TIER_CONFIG[tier];
  const baseUrl = getBaseUrl(req);
  const priceIdEnvVar = `STRIPE_PRICE_${tier.toUpperCase()}` as const;
  const priceId = process.env[priceIdEnvVar];

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      // Either reference a pre-existing price, or build one inline.
      line_items: priceId
        ? [{ price: priceId, quantity: 1 }]
        : [
            {
              quantity: 1,
              price_data: {
                currency: "usd",
                unit_amount: config.amount,
                recurring: { interval: config.interval },
                product_data: {
                  name: `K187 ${config.name}`,
                  description: config.fallbackDescription,
                },
              },
            },
          ],
      customer_email: email,
      customer_creation: email ? undefined : "always",
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      success_url: `${baseUrl}/thanks?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/pricing?canceled=1`,
      metadata: {
        tier,
        source: "123automateme-hub",
      },
      subscription_data: {
        metadata: { tier, source: "123automateme-hub" },
      },
    });

    return NextResponse.json({ url: session.url, id: session.id });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[stripe/checkout] failed:", message);
    return NextResponse.json(
      { error: "stripe_error", message },
      { status: 502 },
    );
  }
}
