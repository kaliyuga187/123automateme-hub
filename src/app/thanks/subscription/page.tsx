/**
 * Subscription success page — ?session_id=cs_… or cs_test_…
 *
 * Reads the session ID from the URL, looks up the subscription in our
 * in-memory store (populated by the webhook), and shows a personalised
 * confirmation. The webhook normally fires before the user lands here,
 * but we also fall back to fetching the session directly from Stripe
 * in case the webhook is slow.
 *
 * Renders a loading state during the fetch — the user gets feedback
 * either way within ~2s.
 */
import { Suspense } from "react";
import { Check, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getStripe, isStripeLive } from "@/lib/stripe";
import {
  getSubscriptionByCustomer,
  priceToTier,
  summarise,
} from "@/lib/subscriptions";

export const metadata = { title: "You're in — K187" };
export const dynamic = "force-dynamic";

interface SearchParams {
  session_id?: string;
}

export default async function SubscriptionThanksPage({
  searchParams,
}: {
  // Next.js 15: searchParams is async (Promise<>). Await it before use.
  searchParams: Promise<SearchParams>;
}) {
  const { session_id: sessionId = null } = await searchParams;

  return (
    <section className="section">
      <div className="container-page max-w-2xl text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-success/30 bg-success/10">
          <Check className="h-7 w-7 text-success" />
        </div>
        <h1 className="h-section mt-6">You&apos;re in. 🎉</h1>
        <p className="lede mt-4">
          Thanks for subscribing. Your access unlocks as soon as the
          payment confirms (usually under 30 seconds).
        </p>

        <Suspense fallback={<p className="mt-6 text-text-secondary">Loading your subscription…</p>}>
          <SubscriptionDetails sessionId={sessionId} />
        </Suspense>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://billing.stripe.com/p/login/test_YnQ1Ib"
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4" /> Manage subscription
          </a>
          <Link href="/" className="btn-ghost">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>

        <p className="mt-8 text-xs text-text-muted">
          {isStripeLive()
            ? "Live mode — your real card was charged."
            : "Test mode — no real charge. Use the Stripe dashboard to inspect."}
        </p>
      </div>
    </section>
  );
}

async function SubscriptionDetails({
  sessionId,
}: {
  sessionId: string | null;
}) {
  if (!sessionId) {
    return (
      <p className="mt-6 text-text-secondary">
        No session id in URL — if your charge succeeded, the subscription
        will appear on the dashboard within 30 seconds.
      </p>
    );
  }

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const sub = await getSubscriptionByCustomer(
      typeof session.customer === "string"
        ? session.customer
        : session.customer?.id ?? "",
    );
    const summary = summarise(sub);

    // If the webhook hasn't fired yet, the in-memory cache is empty.
    // Try the live subscription instead.
    let displayTier = summary.tier;
    let displayStatus = summary.status;
    let displayRenewsAt = summary.renewsAt;

    if (!sub && session.subscription) {
      const liveSub = await stripe.subscriptions.retrieve(
        typeof session.subscription === "string"
          ? session.subscription
          : session.subscription.id,
      );
      const tier =
        priceToTier(liveSub.items.data[0]?.price.id) ??
        (liveSub.metadata?.tier as "starter" | "pro" | "studio" | null) ??
        null;
      displayTier = tier;
      displayStatus = liveSub.status;
      const cpe = (liveSub as unknown as { current_period_end?: number })
        .current_period_end;
      displayRenewsAt = cpe ? new Date(cpe * 1000).toISOString() : null;
    }

    return (
      <dl
        className="mx-auto mt-8 grid max-w-md gap-3 rounded-2xl border border-border bg-bg-card p-6 text-left"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        <Row label="Plan" value={displayTier ?? "—"} />
        <Row label="Status" value={displayStatus ?? "—"} />
        <Row
          label="Renews"
          value={
            displayRenewsAt
              ? new Date(displayRenewsAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : "—"
          }
        />
        <Row label="Email" value={session.customer_details?.email ?? "—"} />
      </dl>
    );
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return (
      <p className="mt-6 text-text-secondary">
        Couldn&apos;t load subscription details ({msg}). Check the Stripe
        dashboard to confirm.
      </p>
    );
  }
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-xs uppercase tracking-wider text-text-muted">
        {label}
      </dt>
      <dd className="font-mono text-sm text-text-primary">{value}</dd>
    </div>
  );
}
