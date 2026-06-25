# AGENTS.md — 123automateme-hub

> Conventions for AI agents (Claude Code, Codex, Copilot, etc.) working in **this** repo.
> Inherits all global rules from `C:\Users\nk187\k187-recovery-os\AGENTS.md` — this file only adds what's local.

## What this is

A Next.js 15 SaaS CV / meta-portfolio at https://123automateme.com.
- Single-page at `/` shows 38 projects with AI-written layman's-terms summaries
- `/pricing` 3-tier Stripe checkout (Starter $19 / Pro $49 / Studio $199)
- `/api/stripe/checkout` + `/api/stripe/webhook` + `/thanks/subscription` for monetization
- `/mission-control`, `/designwithhermes` are internal/admin surfaces
- `/privacy`, `/terms` are legal

## Local-only secrets — do NOT touch

This repo's blocklist, **on top of** the recovery-OS one:

- **Never edit `.env` or `.env.local`.** The Stripe keys, OpenRouter key, etc. live there. Use `.env.example` for new variables.
- **Never commit** anything under `data/`, `.next/`, `dist/`, `node_modules/`.
- **Never run `pnpm db:push` here.** There's no Prisma schema in this repo.
- **Never run `git push`.** You (Kai) own the push.

## Coding style — local rules

- **App Router only.** Pages in `src/app/<route>/page.tsx`. No `pages/` directory.
- **Server components by default.** Add `"use client"` only when you need state, effects, or browser APIs.
- **API routes** in `src/app/api/<route>/route.ts`. Return typed JSON. Validate bodies with `zod`.
- **Stripe code lives in `src/lib/stripe.ts` + `src/lib/subscriptions.ts`.** Never instantiate the Stripe SDK elsewhere — go through `getStripe()`.
- **No database.** Stripe is the source of truth. The in-memory sub cache (`src/lib/subscriptions.ts`) is fine for one instance; if you need horizontal scaling, replace it with Prisma against `data/k187.db` (the recovery-OS DB).
- **Tests next to source.** `*.test.ts` for any non-trivial logic. Run with `pnpm test`.
- **Comments explain WHY**, not WHAT. Keep the codebase scannable.

## First commands an agent should know

```bash
pnpm install                  # uses pnpm 11 (not npm or yarn)
pnpm dev                      # http://localhost:3000
pnpm typecheck                # tsc --noEmit
pnpm test                     # vitest run (15/15 currently)
pnpm build                    # next build → .next/
```

**All four must pass before declaring done.** `pnpm build` clobbers `.next/`, so restart dev after a build.

## When adding a Stripe feature

1. Body validation with `zod` (see `src/app/api/stripe/checkout/route.ts` for the pattern).
2. Rate-limit with `express-rate-limit` if exposed publicly (10/min/IP is the default).
3. Webhook handlers MUST verify the signature via `stripe.webhooks.constructEvent`.
4. Every webhook event re-fetches from Stripe before updating the in-memory store — duplicate deliveries are safe.
5. Add a unit test. The `src/app/api/stripe/checkout/route.test.ts` and `src/lib/subscriptions.test.ts` files show the pattern.

## When removing a project from the portfolio

Per the 2026-06-19 instruction: **full scrub (B)** = local + GitHub + VPS + DNS + code.

1. Remove the entry from the data source that feeds `/` (see `src/app/page.tsx`'s data layer).
2. `git commit -am "remove: <slug>"` (locally).
3. You (Kai) handle `git push` + VPS container rebuild.

## Deploy flow (Vultr `apex-prod`, container `k187-hub`)

```bash
ssh apex-prod
cd /opt/123automateme-hub
git pull                          # you trigger this
pnpm install --frozen-lockfile
pnpm build
pm2 restart 123automateme-hub    # or docker compose up -d --build
```

Nginx (`vivalarassa.fun` and 4 subdomains) proxies to this container. The active brand decision is pending (DASHBOARD.md §5 in the recovery-OS).

## When you finish

Update `BUILD_REPORT-pricing.md` (or create a new `<topic>-report.md`) with:
- What changed
- Files touched
- Tests run + results
- Build result
- Remaining issues + next action
