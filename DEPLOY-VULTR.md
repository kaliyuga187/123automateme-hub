# Vultr Inventory — what to capture from the dashboard

When you log into https://my.vultr.com → **Products** → **Compute** (or **Instances**),
screenshot or copy the following for EACH server you have:

## Per-server

- **Label** (whatever you named it, e.g. "nexus-prod", "k187-staging")
- **Status** — Running / Stopped / Pending
- **Region** — e.g. Sydney (syd), New York (nyc), Amsterdam (ams)
- **IP address** — both IPv4 and IPv6
- **Plan** — e.g. "1 vCPU · 1 GB · 25 GB SSD · $5/mo" or "2 vCPU · 4 GB · 80 GB · $24/mo"
- **OS** — Ubuntu 22.04, 24.04, Debian, etc. (Ubuntu 22.04 matches the existing deploy.sh)
- **Tags** — any custom tags
- **Date created**

## Whole account

- **Account email** — first 3 chars + *** for privacy (e.g. `nik***@***.com`)
- **Any other servers** running that you forgot about
- **Any reserved IPs / floating IPs**
- **Any block storage volumes** attached
- **Any pre-provisioned firewalls** (default firewall rules)
- **API key** — you can find it at https://my.vultr.com/settings/#settingsapi (turn on if off; you only need it if you want me to script deploys from the CLI)

## Optional but useful

- **Domain registrar** for 123automateme.com — where you bought it (so we know where to update DNS)
- **Any snapshots** of the server (Vultr → Snapshots tab)

## Why I need all of this

Once I have:
- The IP and OS → I can set up SSH from this machine
- The plan size → I can tell you if it can host nexus-frontend + 123automateme-hub side-by-side
- The region → I can recommend the closest CDN config for your clients
- The registrar → I can give you the exact DNS records to point 123automateme.com at the server

You don't need to share passwords, root passwords, or API keys with me. The IP address and
plan are public info (visible in the dashboard).
