# DEPLOY REPORT — 123automateme.com → live

> Date: 2026-06-14
> Server: Vultr apex-prod · 139.180.174.4 · Ubuntu 22.04.5 LTS
> Operator: Hermes (k187 user)
> Status: **LIVE & SERVING HTTPS**

## What was deployed

| Component | State |
|---|---|
| `https://123automateme.com/` | ✅ HTTP 200 (36,213 bytes, prerendered) |
| `https://www.123automateme.com/` | ✅ HTTP 200 (same content) |
| `http://123automateme.com/` | ✅ 301 redirect to HTTPS |
| `https://123automateme.com/privacy` | ✅ HTTP 200 |
| `https://123automateme.com/terms` | ✅ HTTP 200 |
| `https://123automateme.com/thanks` | ✅ HTTP 200 (post-submit) |
| `POST /api/contact` (JSON) | ✅ Returns `{"ok":true}`, logs to server (no delivery channel set) |
| `POST /api/contact` (form) | ✅ Returns `{"ok":true}` or redirects to /thanks |
| TLS certificate | ✅ Let's Encrypt, valid 2026-06-14 → 2026-09-12, auto-renews via certbot |

## What was added to the server (additive, no existing service touched)

| File | What it is |
|---|---|
| `/opt/123automateme-hub/` | Source of the new Next.js 15 app (~70 KB tarball from local) |
| `k187-hub:latest` Docker image | 261 MB (56 MB compressed), built on the server |
| `k187-hub` container | Running on port 3738 (internal), joined to `nexus` Docker network |
| `/opt/k187-nexus-suite/nginx/conf.d/15-123automateme.conf` | Nginx vhost for the domain |
| `/opt/k187-nexus-suite/nginx/certbot/conf/live/123automateme.com/` | TLS cert + key from Let's Encrypt |
| `/opt/k187-nexus-suite/docker-compose.yml` | Added `hub:` service to existing compose |

## Security headers returned (verified)

```
X-Frame-Options:          SAMEORIGIN
X-Content-Type-Options:   nosniff
Referrer-Policy:          strict-origin-when-cross-origin
Strict-Transport-Security: max-age=15552000; includeSubDomains (from redirect)
Permissions-Policy:       camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()
```

## Existing services confirmed unaffected

| Domain | Status |
|---|---|
| `vivalarassa.fun` | ✅ 200 |
| `app.vivalarassa.fun` | ✅ 200 |
| `api.vivalarassa.fun` | ✅ reachable |
| `139.180.174.4` | ✅ 200 |
| 10 Docker containers | ✅ all running |
| 6 PM2 processes | ✅ all online (k187-store-bot still stopped, same as before) |

## Resource usage (k187-hub container)

| Resource | Usage |
|---|---|
| CPU | 0.00% (idle) |
| Memory | 54.45 MB / 3.8 GB |
| Disk | 261 MB image, ~50 MB runtime |
| Network | 132 kB in, 711 kB out (since first start) |

## DNS configuration required (done by user)

| Record | Value |
|---|---|
| A `@` | `139.180.174.4` |
| A `www` | `139.180.174.4` |

**Important:** if your local DNS resolver caches a "not found" answer, wait 1–30 minutes for the TTL to expire and the new A record to propagate. Public resolvers (1.1.1.1, 8.8.8.8, 9.9.9.9) all return the correct IP immediately.

## To do later (not blocking)

1. **Configure contact form delivery.** Currently it logs to server console. To make it email you:
   ```bash
   # Sign up at resend.com, get an API key, verify your sending domain
   # Then on the server, create /opt/123automateme-hub/.env:
   #   RESEND_API_KEY=re_...
   #   CONTACT_TO_EMAIL=hello@123automateme.com
   #   CONTACT_FROM_EMAIL=noreply@123automateme.com
   # Mount it into the container by editing the compose service:
   #   volumes:
   #     - /opt/123automateme-hub/.env:/app/.env:ro
   # Then: docker compose restart hub
   ```
   Or use the webhook path (Slack/Discord/Make.com/n8n) for non-email delivery.

2. **Replace 123automateme-hub with a real product.** The current "Products" section on the homepage links to `#contact` placeholders. When MetaLaunch AI or K187 Bot Store is ready, edit `src/app/page.tsx` and change the `href="#contact"` to the real product URL.

3. **Install fail2ban.** Listed in the inventory; not deployed in this session because it required a service install. One-line: `apt install fail2ban && systemctl enable --now fail2ban`.

4. **Bind internal services to 127.0.0.1.** Right now ports 3000, 3001, 3002, 4001, 4002, 4004, 9081 are bound to `0.0.0.0` and are publicly accessible. They're behind nginx in normal use, but the direct ports are still open. Fix: change the bind addresses in their respective config files.

5. **Enable Auto Backups on apex-prod** ($4–8/mo extra, gives weekly snapshots).

## File layout (for future maintenance)

```
Vultr apex-prod
└── /opt/
    ├── 123automateme-hub/        ← source code (this app)
    │   ├── Dockerfile
    │   ├── .dockerignore
    │   ├── package.json
    │   ├── pnpm-lock.yaml
    │   ├── next.config.mjs
    │   ├── src/                  ← pages, components, api routes
    │   ├── public/               ← static assets, robots.txt, sitemap.xml
    │   ├── nginx-15-123automateme.conf  ← (also in nginx/conf.d/)
    │   └── docker-compose-snippet.yml   ← (also in k187-nexus-suite/)
    │
    └── k187-nexus-suite/         ← the existing k187 stack
        ├── docker-compose.yml    ← now includes `hub:` service
        ├── nginx/
        │   ├── nginx.conf
        │   ├── conf.d/
        │   │   ├── 10-http.conf
        │   │   ├── 15-123automateme.conf  ← NEW
        │   │   ├── 20-ssl.conf
        │   │   ├── 30-answersannual.conf
        │   │   ├── 00-proxy-headers.conf
        │   │   └── ssl-params.conf
        │   └── certbot/
        │       ├── conf/live/
        │       │   ├── 123automateme.com/  ← NEW cert
        │       │   ├── answersannual.com/
        │       │   └── vivalarassa.fun/
        │       └── www/  (ACME challenges)
        └── services/             ← (other k187 service code)
```

## How to redeploy after a code change

```bash
# Locally: edit code, commit, push (or just tar)
cd C:\Users\nk187\123automateme-hub
git commit -am "..."
# (when GitHub is set up) git push

# On the server:
ssh 'root@139.180.174.4'
cd /opt/123automateme-hub
# pull or scp the new source
docker build -t k187-hub:latest .
cd /opt/k187-nexus-suite
docker compose up -d --force-recreate hub
```

That's it. No nginx reload needed (the proxy passes through to whatever container is up). Cert auto-renews every 12 hours.
