/**
 * Stripe Checkout for productized services — POST /api/stripe/service-checkout
 *
 * Body: { serviceSlug: string, packageId: "bronze"|"silver"|"gold", email?: string, projectNotes?: string }
 * Returns: { url: string } — Stripe-hosted Checkout URL.
 *
 * Behavior:
 *   - Validates serviceSlug + packageId against the typed catalog in @/lib/services.
 *   - One-time payment mode (NOT subscription) — services are sold per-deliverable.
 *   - Price IDs from env when set (STRIPE_SERVICE_<SLUG>_<TIER>_PRICE).
 *   - Falls back to inline price_data using catalog cents if no env price ID.
 *   - Records projectNotes as metadata for ops follow-up.
 *   - Rate-limited 10/min/IP.
 *
 * The /hire route uses /api/stripe/hire-checkout instead (it's a recurring subscription).
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getStripe, isStripeConfigured } from "@/lib/stripe";
import { getPackageById, SERVICES } from "@/lib/services";

export const runtime = "nodejs";

const BodySchema = z.object({
  serviceSlug: z.enum(SERVICES.map((s) => s.slug) as [string, ...string[]]),
  packageId: z.enum(["bronze", "silver", "gold"]),
  email: z.string().email().optional(),
  projectNotes: z.string().max(2000).optional(),
});

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
  const fromEnv = process.env.NEXT_PUBLIC_BASE_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, "");
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

  const { serviceSlug, packageId, email, projectNotes } = parsed.data;
  const match = getPackageById(serviceSlug, packageId);
  if (!match) {
    return NextResponse.json(
      { error: "not_found", message: "Service or package not found." },
      { status: 404 },
    );
  }
  const { service, pkg } = match;
  const baseUrl = getBaseUrl(req);

  // Env-driven price ID: STRIPE_SERVICE_<SLUG_UPPER>_<TIER>_PRICE
  // e.g. STRIPE_SERVICE_SAAS_GOLD_PRICE
  const envKey = `STRIPE_SERVICE_${serviceSlug.toUpperCase().replace(/-/g, "_")}_${packageId.toUpperCase()}_PRICE`;
  const priceId = process.env[envKey];

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: priceId
        ? [{ price: priceId, quantity: 1 }]
        : [
            {
              quantity: 1,
              price_data: {
                currency: "usd",
                unit_amount: pkg.priceCents,
                product_data: {
                  name: `${service.title} — ${pkg.name}`,
                  description: pkg.tagline,
                },
              },
            },
          ],
      customer_email: email,
      customer_creation: email ? undefined : "always",
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      success_url: `${baseUrl}/thanks/service?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/services/${serviceSlug}?canceled=1`,
      metadata: {
        kind: "service",
        serviceSlug,
        packageId,
        packageName: pkg.name,
        priceCents: String(pkg.priceCents),
        source: "123automateme-hub",
        projectNotes: (projectNotes ?? "").slice(0, 500),
      },
      payment_intent_data: {
        metadata: {
          kind: "service",
          serviceSlug,
          packageId,
          source: "123automateme-hub",
        },
      },
    });

    return NextResponse.json({ url: session.url, id: session.id });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[stripe/service-checkout] failed:", message);
    return NextResponse.json(
      { error: "stripe_error", message },
      { status: 502 },
    );
  }
}
