/**
 * In-memory subscription store.
 *
 * Production note: this is a process-local Map. It will NOT survive server
 * restarts and will NOT be shared across multiple server instances. That's
 * acceptable for the meta-portfolio's pricing surface because:
 *   1. The hub is a single Next.js instance behind nginx
 *   2. Stripe is the source of truth — the dashboard, invoices, and
 *      Customer Portal all work even if this Map is empty
 *   3. The webhook handler re-populates this Map on every event
 *
 * If you ever scale to multiple instances, swap this for a Prisma table on
 * the recovery-OS `k187.db` (C:\Users\nk187\k187-recovery-os\data\k187.db).
 *
 * The store is keyed by Stripe customer ID (cs_test_… / cs_live_… stripped to
 * "cus_…"). For local dev without a customer yet, lookups by email work too.
 */
export type Tier = "starter" | "pro" | "studio";

export interface Subscription {
  customerId: string;
  email: string | null;
  tier: Tier | null;
  status:
    | "active"
    | "trialing"
    | "past_due"
    | "canceled"
    | "incomplete"
    | "incomplete_expired"
    | "unpaid"
    | "paused";
  currentPeriodEnd: number | null; // Unix seconds
  cancelAtPeriodEnd: boolean;
  updatedAt: number;
}

const SUBSCRIPTIONS = new Map<string, Subscription>();

/** Map a Stripe price ID or amount to a tier. Robust to env changes. */
export function priceToTier(priceId: string | null | undefined): Tier | null {
  if (!priceId) return null;
  const p = process.env;
  if (priceId === p.STRIPE_PRICE_STARTER) return "starter";
  if (priceId === p.STRIPE_PRICE_PRO) return "pro";
  if (priceId === p.STRIPE_PRICE_STUDIO) return "studio";
  // Fallback: match by amount (useful in dev where price IDs are blank and
  // we create prices on-the-fly with the env-var amounts).
  // We can't read the price amount here without an API call, so if the ID
  // is something we don't recognise, return null and let the caller decide.
  return null;
}

export function getSubscriptionByCustomer(
  customerId: string,
): Subscription | undefined {
  return SUBSCRIPTIONS.get(customerId);
}

export function getSubscriptionByEmail(
  email: string,
): Subscription | undefined {
  const lower = email.toLowerCase();
  for (const sub of SUBSCRIPTIONS.values()) {
    if (sub.email && sub.email.toLowerCase() === lower) return sub;
  }
  return undefined;
}

export function upsertSubscription(sub: Subscription): void {
  SUBSCRIPTIONS.set(sub.customerId, { ...sub, updatedAt: Date.now() });
}

export function cancelSubscription(customerId: string): void {
  const existing = SUBSCRIPTIONS.get(customerId);
  if (!existing) return;
  SUBSCRIPTIONS.set(customerId, {
    ...existing,
    status: "canceled",
    updatedAt: Date.now(),
  });
}

/** For the /thanks page and any future "show me my plan" UI. */
export function summarise(sub: Subscription | undefined): {
  isPaid: boolean;
  tier: Tier | null;
  status: string;
  renewsAt: string | null;
} {
  if (!sub) return { isPaid: false, tier: null, status: "none", renewsAt: null };
  return {
    isPaid: sub.status === "active" || sub.status === "trialing",
    tier: sub.tier,
    status: sub.status,
    renewsAt: sub.currentPeriodEnd
      ? new Date(sub.currentPeriodEnd * 1000).toISOString()
      : null,
  };
}
