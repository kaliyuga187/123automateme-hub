# 123automateme-hub — Deploy Runbook

> Issue body for `kaliyuga187/123automateme-hub` GitHub issue.
> Documents how to go from `code-complete` (this PR + earlier `9d15921`)
> to a live, taking-real-money Stripe checkout on https://123automateme.com.

---

## What's shipping-ready today

| Surface | Status |
|---|---|
| `/` (single-page SaaS CV) | ✅ LIVE (deployed 2026-06-14) |
| `/pricing` (3-tier Stripe UI) | ✅ code-complete, all gates green |
| `/api/stripe/checkout` (POST → Stripe Checkout Session) | ✅ code-complete |
| `/api/stripe/webhook` (signature-verified, 5 event types) | ✅ code-complete |
| `/thanks/subscription` (success page, live Stripe lookup fallback) | ✅ code-complete |
| `/mission-control` (internal dashboard) | ✅ live |
| `/designwithhermes`, `/privacy`, `/terms`, `/thanks` | ✅ live |

Test coverage: **15/15 vitest tests pass** across 2 test files.

## What's blocking first real payment

Two missing pieces, both require **Kai** (not automatable from a CI bot):

### 1. Stripe API keys (test mode is enough to start)

Get from https://dashboard.stripe.com/test/apikeys :

- `STRIPE_SECRET_KEY=sk_test_…`
- `STRIPE_WEBHOOK_SECRET=whsec_…`

Add to the hub's `.env` on the VPS.

### 2. Webhook endpoint registered with Stripe

In https://dashboard.stripe.com/test/webhooks :

- URL: `https://123automateme.com/api/stripe/webhook`
- Events to send:
  - `checkout.session.completed`
  - `customer.subscription.created`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`
  - `invoice.payment_failed`

Copy the signing secret into `STRIPE_WEBHOOK_SECRET`.

## Deploy steps (after Stripe is wired)

```bash
ssh apex-prod
cd /opt/123automateme-hub  # or wherever the hub lives on the VPS
git pull                  # gets commits 9d15921 + this one
pnpm install --frozen-lockfile
pnpm build
pm2 restart 123automateme-hub
```

## Smoke test

1. Visit https://123automateme.com/pricing
2. Click "Go Pro for $49"
3. Use card `4242 4242 4242 4242`, any future date, any CVC, any ZIP
4. Land on `/thanks/subscription?session_id=…`
5. Stripe dashboard shows the test charge
6. Webhook fires, populates the in-memory sub store

## Going live (test → production)

Same steps, but:

1. `STRIPE_SECRET_KEY=sk_live_…` (live mode)
2. Re-register the webhook in **live mode** in Stripe dashboard
3. `STRIPE_WEBHOOK_SECRET` becomes the live signing secret
4. The footer of `/thanks/subscription` automatically switches from
   "Test mode" to "Live mode" via `isStripeLive()` in `src/lib/stripe.ts`

## Architecture notes

- **No database required.** Stripe is the source of truth.
- **In-memory subscription cache** (see `src/lib/subscriptions.ts`) is
  fine for a single Next.js instance. Swap for Prisma if/when the hub
  scales horizontally.
- **Webhook idempotency:** every event re-fetches from Stripe before
  updating the cache. Duplicate deliveries are safe.
- **Failed signature = 400.** Stripe retries on 500 only; bad signatures
  mean someone else is calling — don't process, don't retry.

## Open follow-ups

- Link "Pricing" in the single-page nav (cosmetic)
- Create a real Customer Portal link in the Stripe dashboard
  (the success page currently links to a placeholder)
- Consider adding `pnpm test` to a CI workflow

## Related

- Commit `9d15921` — original Stripe checkout surface
- Commit (this PR) — additional polish + tests
- `BUILD_REPORT-pricing.md` in the working tree of `C:\Users\nk187\123automateme-hub`
  for the full session log
