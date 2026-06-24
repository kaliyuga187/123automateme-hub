/**
 * Stripe SDK singleton + helpers.
 *
 * Initialised once per server process. Reads STRIPE_SECRET_KEY from env.
 *
 * IMPORTANT: this module is server-only. Do NOT import it from a "use client"
 * component — it pulls in the full Stripe Node SDK which won't bundle for the
 * browser. Use the public helpers in src/lib/stripe-public.ts for the client side.
 */
import Stripe from "stripe";

declare global {
  // eslint-disable-next-line no-var
  var __stripeClient: Stripe | undefined;
}

function buildClient(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error(
      "STRIPE_SECRET_KEY is not set. Add it to .env (sk_test_… for dev, sk_live_… for prod).",
    );
  }
  return new Stripe(key, {
    // Pin the API version. If you upgrade the SDK, read the migration guide:
    // https://stripe.com/docs/upgrades
    apiVersion: "2024-09-30.acacia" as Stripe.LatestApiVersion,
    typescript: true,
    appInfo: {
      name: "123automateme-hub",
      version: "0.2.0",
    },
  });
}

/**
 * Get the shared Stripe client. In dev (Next.js HMR) the module is re-evaluated;
 * we cache on globalThis to avoid spawning a new client per reload.
 */
export function getStripe(): Stripe {
  if (!globalThis.__stripeClient) {
    globalThis.__stripeClient = buildClient();
  }
  return globalThis.__stripeClient;
}

export const isStripeConfigured = (): boolean =>
  Boolean(process.env.STRIPE_SECRET_KEY) &&
  process.env.STRIPE_SECRET_KEY!.startsWith("sk_");

/** True if the secret key looks like a live (production) key. */
export const isStripeLive = (): boolean =>
  process.env.STRIPE_SECRET_KEY?.startsWith("sk_live_") ?? false;
