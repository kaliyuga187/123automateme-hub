# 123automateme Hub

The public landing page and client hub for **123automateme.com**.

Built with Next.js 15, TypeScript, Tailwind CSS, and the App Router.

## What it is

A single-page marketing site with:

- **Hero** — value proposition and primary CTAs
- **Services** — three engagement models (subscribe, commission, consulting)
- **How it works** — 4-step process
- **Products** — MetaLaunch AI and K187 Bot Store cards
- **Contact** — server-side form with rate limiting, honeypot, and email or webhook delivery
- **Legal** — privacy and terms pages
- **SEO** — `sitemap.xml`, `robots.txt`, OpenGraph + Twitter cards

## Quick start

```bash
pnpm install
cp .env.example .env   # fill in one delivery channel (Resend OR webhook)
pnpm dev               # http://localhost:3738
```

Open [http://localhost:3738](http://localhost:3738) in your browser.

## Validation gate (run before committing)

```bash
pnpm install --frozen-lockfile
pnpm typecheck
pnpm build
```

All three must pass.

## Contact form delivery

The `/api/contact` route accepts both JSON and HTML form posts. Configure **one** of:

| Channel | Env vars | Notes |
|---|---|---|
| **Resend (email)** | `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | 100 emails/day free tier. Sign up at [resend.com](https://resend.com). |
| **Webhook** | `CONTACT_WEBHOOK_URL` | POSTs JSON to any URL — Slack, Discord, Make.com, n8n, Pipedream, etc. |
| **Log only** (none set) | — | Logs the submission to server stdout. Useful for local dev. |

If no channel is configured, the API will return 200 to the user but won't actually deliver.
The form has a honeypot field, length validation, and per-IP rate limiting (5 messages / hour).

## Deploy

This is a standard Next.js 15 app — it deploys to any Node host. Three free options:

### Option A — Vercel (recommended, free tier)

```bash
npm i -g vercel
vercel
# Add the env vars from .env.example in the Vercel dashboard
# Add 123automateme.com in Domains, then set the nameservers at your registrar
```

### Option B — Render (free tier with caveats)

```bash
# Push to GitHub, then:
# 1. Go to render.com → New → Web Service → connect your repo
# 2. Build: pnpm install && pnpm build
# 3. Start: pnpm start
# 4. Add the env vars in the Render dashboard
# 5. Add a custom domain in Settings → Custom Domains
```

### Option C — Vultr / Hetzner / DigitalOcean ($5/mo VPS)

```bash
# SSH into the VPS
git clone <your-repo> /opt/hub
cd /opt/hub && pnpm install && pnpm build
# Use pm2 or systemd to run: PORT=3000 pnpm start
# Add Nginx in front with Let's Encrypt
```

## Adding a real product to the homepage

The two `ProductCard` entries on the homepage currently point at `#contact`. When a product is
ready, edit `src/app/page.tsx` and replace the `href="#contact"` with the real URL.

## Domain

`123automateme.com` is registered but currently has no hosting. After deploying, point the
domain's nameservers or A record to your hosting provider. Vercel and Render both provide the
exact DNS records to add.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5.6 (strict)
- **Styling:** Tailwind CSS 3.4
- **Email (optional):** Resend SDK
- **No database** — this is a static site with a serverless contact endpoint

## License

All rights reserved. © 123automateme.
