# Vultr apex-production — Inventory & Deploy Plan

> Captured: 2026-06-13 (Hermes)
> IP: `139.180.174.4` · OS: Ubuntu 22.04.5 LTS · Up 45 days
> SSH: key-only now (password auth disabled, cloud-init drop-in hardened)

## Hardware

| Resource | Value | Status |
|---|---|---|
| CPU | 2 vCPU | ✅ fine |
| RAM | 3.8 GiB (818 MiB used, 2.7 GiB available) | ✅ plenty of headroom |
| Swap | 7.7 GiB | ✅ configured |
| Disk | 75 GB (39 GB used, 33 GB free, 54%) | ✅ plenty |
| IPv4 | 139.180.174.4/23 (enp1s0) | ✅ |
| IPv6 | 2001:19f0:5801:1a13:5400:6ff:fe1e:a76a/64 | ✅ |

## Software installed

✅ docker · node · npm · pnpm · nginx · certbot · pm2 · git · curl · wget · htop · jq · ufw · python3
❌ fail2ban (recommended to install)
❌ docker-compose standalone (use `docker compose` plugin instead)
❌ mysql/mysqld (Postgres is used via Docker)

## What's running — Docker containers (10)

| Container | Image | Port | Uptime | Notes |
|---|---|---|---|---|
| **k187-nginx** | nginx:1.27-alpine | 80, 443 | 2 wks | The reverse proxy — public-facing |
| **k187-landing** | k187-nexus-suite-landing | 80 (internal) | 2 wks | Currently shows "Nexus AI / K187" branding |
| **k187-community** | k187-nexus-suite-community | 80 (internal) | 7 days | Community dashboard |
| **k187-admin** | k187-nexus-suite-admin | 80 (internal) | 3 wks | Operator dashboard |
| **k187-api** | k187-nexus-suite-api | 3001 | 7 days | tRPC / Express / Stripe / Prisma / SIWS auth |
| **k187-trading-engine** | k187-nexus-suite-trading-engine | 4001 | 7 days | Trading bot engine |
| **k187-logs** | k187-nexus-suite-logs | 4002 | 7 days | Log viewer (basic-auth) |
| **k187-postgres** | postgres:16-alpine | 5432 | 3 wks | Database |
| **k187-redis** | redis:7-alpine | 6379 | 3 wks | Cache + pub/sub |
| **k187-certbot** | certbot/certbot:v2.11.0 | 80, 443 | 3 wks | TLS issuance/renewal |

## What's running — PM2 processes (6)

| Process | Uptime | RAM | Notes |
|---|---|---|---|
| apex-research-bot | 37 days | 53 MB | Cluster mode |
| apex-trading | 45 days | 49 MB | The "apex" app at :4004 |
| aussie-homeschool-hub | 7 days | 29 MB | Different product? |
| k187-store-bot | stopped | — | Errored 191 times — needs cleanup |
| nexus-ai | 32 h | 102 MB | The "nexus" app at :9081 |
| nexus-x-bot | 32 h | 70 MB | Likely a related bot |

## What's deployed — /opt/

- **/opt/k187-nexus-suite/** — the Docker Compose monorepo. Source for the k187 stack. README says canonical design is for `nexusai.bet` but the live config uses `vivalarassa.fun` subdomains.
- **/opt/apex-xepa-hub/** — a Vite + React + Node project with a Dockerfile, package.json, dist/. Source for the `apex-trading` PM2 process.
- **/opt/apex/** — the apex app directory (PM2 cwd for apex-trading).
- **/opt/apex-research-bot/** — research bot source.
- **/opt/k187-store-bot/** — k187 store bot source.
- **/opt/apex-xepa-hub-backup-*.tgz** — backup tarballs (2 of them).
- **/opt/apex-xepa-backups/, /opt/apex-xepa-hub-backups/** — backup dirs.

## Currently served domains (nginx vhosts)

| Domain | Backend | TLS |
|---|---|---|
| **vivalarassa.fun** | k187_landing (the existing "Nexus AI" landing) | ✅ via certbot |
| **app.vivalarassa.fun** | k187_community | ✅ SAN of vivalarassa.fun |
| **api.vivalarassa.fun** | k187_api | ✅ SAN |
| **admin.vivalarassa.fun** | k187_admin | ✅ SAN |
| **logs.vivalarassa.fun** | k187_logs | ✅ SAN |
| **answersannual.com** | 127.0.0.1:3002 (host) | ✅ via certbot |
| 139.180.174.4 (bare IP) | 127.0.0.1:3001 (host) | ❌ HTTP only |
| **default_server** | 404 catchall | ❌ |

**No reference to 123automateme.com in any nginx config.**

## Existing SSL certs (certbot)

- `vivalarassa.fun` (covers vivalarassa.fun + 4 subdomains as SANs)
- `answersannual.com`

## What's NOT deployed but exists on disk

- `apex-xepa-hub` Docker image is built (376 MB) but no container is running. The apex product is currently served as a PM2-managed `apex-trading` Node process (the source at `/opt/apex-xepa-hub/` is the same codebase but compiled to `dist/`).

## Security observations (worth fixing later, NOT NOW)

1. **fail2ban missing** — install to protect SSH
2. **Internal services bound to 0.0.0.0** — :3000, :3001, :3002, :4001, :4002, :4004, :9081 are all publicly accessible. They should be 127.0.0.1 or behind the nginx reverse proxy.
3. **Bare-IP serves apex on :3001 via HTTP** — anyone hitting `http://139.180.174.4` hits apex. Not necessarily bad but worth knowing.
4. **No backup of k187-nexus-suite in /opt/backups** — only apex has backups. Consider adding a cron-based Docker volume backup.
5. **Disk at 54%** — fine, but worth a 30/60/90-day check.

## ⚠️ What I did NOT touch

- Did not restart, stop, or modify any running container
- Did not touch any existing nginx vhost
- Did not touch any certbot cert
- Did not touch any database or service data
- Did not change the apex or k187-store-bot PM2 processes

## What IS now hardened

- ✅ SSH key auth works (`ssh -i ~/.ssh/id_ed25519 root@139.180.174.4`)
- ✅ Password auth **completely disabled** in `sshd_config` and the cloud-init drop-in
- ✅ Challenge-response disabled
- ✅ PAM disabled
- ✅ sshd restarted with the new config
- ✅ Server host key already in `~/.ssh/known_hosts`

## What needs to happen to put 123automateme-hub online

**1. Decide what 123automateme.com is** — your new public brand? Replaces vivalarassa.fun? Parallel?
**2. Point DNS** — at the registrar, add an A record `123automateme.com` → `139.180.174.4` (and ideally `www.` too).
**3. Decide on the deploy slot** — three options, see plan file.
**4. Get an SSL cert** — `certbot certonly --webroot -w /var/www/certbot -d 123automateme.com -d www.123automateme.com`
**5. Add nginx vhost** — `15-123automateme.conf` mirroring the existing vhost pattern.
**6. Add a Docker container** — build the new 123automateme-hub image, run it, attach to the k187-nexus network.
**7. Reload nginx** — `docker exec k187-nginx nginx -s reload`.
**8. Verify** — `curl -I https://123automateme.com`.

I'll wait for your call on (1) and (3) before doing anything to the live stack.
