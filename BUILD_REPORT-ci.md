# BUILD_REPORT-ci.md

## What Changed
- Fixed GitHub Actions CI setup to provision `pnpm` via `pnpm/action-setup@v4` (version `11`) before Node cache usage.
- Added `pnpm test` to CI so checks now cover install, typecheck, tests, and build.
- Updated deploy runbook follow-up notes to reflect that CI test coverage is now part of the workflow.

## Files Touched
- `.github/workflows/ci.yml`
- `DEPLOY-RUNBOOK.md`
- `BUILD_REPORT-ci.md`

## Tests Run + Results
- `pnpm install --ignore-scripts` ✅ passed (local environment required `--ignore-scripts` due build-script approval policy)
- `pnpm typecheck` ✅ passed
- `pnpm test` ✅ passed (15/15)

## Build Result
- `pnpm build` ⚠️ failed in this sandbox only due DNS/network restriction fetching Google Fonts (`fonts.googleapis.com`), not application compile errors in local source changes.

## Remaining Issues + Next Action
- Verify CI on GitHub after this workflow change to confirm remote `pnpm build` passes in runner network conditions.
- Complete Stripe dashboard manual steps from `DEPLOY-RUNBOOK.md`: set `STRIPE_SECRET_KEY`, set `STRIPE_WEBHOOK_SECRET`, register webhook endpoint events.
