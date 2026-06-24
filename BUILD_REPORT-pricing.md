# 123automateme-hub — Pricing & Stripe Checkout Build Report

> Generated: 2026-06-24 (Hermes, A — add /pricing + Stripe checkout)
> Source: `C:\Users\nk187\123automateme-hub`
> Status: **CODE-COMPLETE** · validation gate green · ready to deploy

---

## What this session added

Turned the meta-portfolio's single static HTML into a **real checkout surface** with 3-tier Stripe subscriptions. The hub was already a Next.js 15 app — this adds the missing commerce layer.

### Files added

| Path | Purpose | LOC |
|---|---|---|
| `src/lib/stripe.ts` | Server-only Stripe SDK singleton + helpers (`getStripe`, `isStripeConfigured`, `isStripeLive`) | ~55 |
| `src/lib/subscriptions.ts` | In-memory subscription store, typed tier mapping, summary helper | ~110 |
| `src/lib/subscriptions.test.ts` | 8 unit tests for the store | ~100 |
| `src/app/api/stripe/checkout/route.ts` | `POST /api/stripe/checkout` — validates body, creates Stripe Checkout Session, returns URL | ~150 |
| `src/app/api/stripe/checkout/route.test.ts` | 7 unit tests for request validation (zod schema, rate limit) | ~60 |
| `src/app/api/stripe/webhook/route.ts` | `POST /api/stripe/webhook` — verifies Stripe signature, handles 5 event types, updates the in-memory store | ~170 |
| `src/components/PricingCard.tsx` | Reusable card component (server-component-friendly, used by pricing page) | ~100 |
| `src/app/pricing/page.tsx` | 3-tier pricing page with "Subscribe" CTAs, Stripe Checkout redirect, loading + error states | ~210 |
| `src/app/thanks/subscription/page.tsx` | Subscription success page (server component), reads `?session_id=…`, looks up sub via webhook cache OR fetches live | ~150 |
| `vitest.config.ts` | Test runner config with `@/*` alias | ~20 |
| `package.json` | Added `stripe`, `zod`, `vitest` deps; replaced placeholder `test` script | edited |
| `.env.example` | Added 8 Stripe env vars with comments | edited |
| **Total new** | | **~1,125 LOC** |

### Files NOT modified

The single-page app shell (`src/app/page.tsx`, 1005 lines) was not touched. The new `/pricing` route is a separate page — you can add a "Pricing" link to the nav later if you want.

---

## Validation gate results

```
$ pnpm typecheck       →  ✓  PASS (0 errors)
$ pnpm test            →  ✓  15/15 tests pass (2 test files)
$ pnpm build           →  ✓  12/12 routes generated
   Routes: /, /_not-found, /api/contact, /api/stripe/checkout (NEW),
           /api/stripe/webhook (NEW), /designwithhermes, /mission-control,
           /pricing (NEW, 2.59 kB), /privacy, /terms, /thanks,
           /thanks/subscription (NEW)
```

---

## How to deploy

### 1. Get Stripe test keys (5 min)

1. Sign in to https://dashboard.stripe.com (create account if needed)
2. https://dashboard.stripe.com/test/apikeys — copy `sk_test_…` and `whsec_…`
3. (Optional) Create 3 products + prices in the dashboard, copy the `price_…` IDs. If you skip this, the checkout route creates prices on-the-fly using the `STRIPE_PRICE_*_AMOUNT` env vars (defaults: $19/$49/$199/mo).

### 2. Add to `.env` on the VPS (or your dev `.env`)

```bash
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_BASE_URL=https://123automateme.com
# (optional)
STRIPE_PRICE_STARTER=price_...
STRIPE_PRICE_PRO=price_...
STRIPE_PRICE_STUDIO=price_...
```

### 3. Register the webhook with Stripe

In https://dashboard.stripe.com/test/webhooks, add endpoint:
- **URL:** `https://123automateme.com/api/stripe/webhook`
- **Events to send:** `checkout.session.completed`, `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`
- Copy the signing secret into `STRIPE_WEBHOOK_SECRET`

### 4. Rebuild + restart the hub

```bash
cd /opt/123automateme-hub  # or wherever it's deployed
pnpm install --frozen-lockfile
pnpm build
pm2 restart 123automateme-hub
```

### 5. Smoke test

1. Visit `https://123automateme.com/pricing` — 3 tiers, clean dark UI
2. Click "Go Pro for $49"
3. Use card `4242 4242 4242 4242`, any future date, any CVC, any ZIP
4. Lands on `https://123automateme.com/thanks/subscription?session_id=…` with plan details
5. Stripe dashboard shows the test charge

---

## Going live (test → production)

When you're ready to take real money:

1. Repeat step 1-2 but with **live** keys (`sk_live_…`, `whsec_…`)
2. Re-register the webhook in **live mode** in Stripe dashboard
3. Rebuild + restart
4. The `isStripeLive()` helper in the success page will automatically change the footer text from "Test mode" to "Live mode"

---

## Architecture notes

- **In-memory subscription store** is fine for a single Next.js instance. If you ever scale horizontally, swap `src/lib/subscriptions.ts` for a Prisma table on the recovery-OS `k187.db` — the file is small enough that the diff is one import + a few `await` calls.
- **Webhook idempotency:** every event re-fetches from Stripe before updating the cache, so duplicate deliveries are safe.
- **Failed signature = 400, no retry.** Stripe will retry on 500 only — a bad signature means the request is from someone else, so we return 400 and don't process.
- **No database = no migration.** This was a deliberate choice: the hub doesn't need a DB to monetize. Stripe is the source of truth.

---

## What was NOT done (intentional)

- ❌ Did NOT modify the single-page app (`page.tsx`) — adding a "Pricing" link to the nav is a follow-up
- ❌ Did NOT set up a `Customer Portal` link (the page links to a placeholder `https://billing.stripe.com/p/login/test_YnQ1Ib` — you need to create your real portal link in the Stripe dashboard)
- ❌ Did NOT touch `.env` or any secret files (per AGENTS.md blocklist)
- ❌ Did NOT deploy (no `git push`, no `scp`, no `ssh` — per AGENTS.md blocklist)
- ❌ Did NOT swap to live mode (no live keys to swap to)

---

## Open question for you

- **C** (the vps-audit.sh) is still pending. When you run it, paste the output and I'll either:
  - Point the hub at the existing live bot's Stripe keys (if C reveals one), OR
  - Confirm the standalone test-mode flow is the path forward

---

**Next action:** you run `vps-audit.sh` (1 min), set Stripe test keys (5 min), and you're ready to take the first test payment.
