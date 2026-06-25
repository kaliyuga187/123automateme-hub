/**
 * Service catalog — productized offers for clients.
 *
 * Each service has 3 packages (Bronze/Silver/Gold) with concrete deliverables,
 * price points, and a Stripe Checkout mapping. One-time payments (not
 * subscriptions) by default; the Hire retainer at /hire is the only recurring.
 *
 * Pricing rationale (per package):
 *   Bronze = audit/audit-only, low risk, fast turnaround (1-3 days)
 *   Silver = single focused deliverable (1-3 weeks)
 *   Gold   = end-to-end with ongoing support or full project (1-3 months)
 *
 * All amounts in USD cents.
 */
export type ServiceSlug =
  | "saas"
  | "ai-agents"
  | "trading"
  | "devops"
  | "design"
  | "mobile";

export type PackageTier = "bronze" | "silver" | "gold";

export interface ServicePackage {
  id: PackageTier;
  name: string;
  tagline: string;
  priceCents: number;
  priceLabel: string; // human-readable "$499"
  duration: string; // "3-5 days" / "2-3 weeks" / "1-3 months"
  deliverables: string[]; // 4-6 bullet points
  popular?: boolean;
}

export interface Service {
  slug: ServiceSlug;
  icon: string; // lucide icon name — rendered on the page
  title: string;
  category: string; // small uppercase chip
  color: string; // hex accent
  tagline: string; // 1-line value prop
  description: string; // 2-3 sentences for the index card
  longDescription: string; // paragraph for detail page
  proof: string; // what existing work proves this
  packages: ServicePackage[];
}

export const SERVICES: Service[] = [
  {
    slug: "saas",
    icon: "Code2",
    category: "FULL-STACK SAAS",
    title: "Full-Stack SaaS",
    color: "#ec4899",
    tagline: "From idea to production. Stripe-ready, Docker-deployed.",
    description:
      "Next.js + Prisma + PostgreSQL web apps shipped to production. Stripe-integrated, auto-scaling, with real auth and real databases.",
    longDescription:
      "I build the whole SaaS stack: Next.js 15 frontend, Prisma + PostgreSQL backend, Stripe billing, auth (NextAuth or SIWS), Docker deployment to Vultr or your cloud. Every project I ship includes proper tests, a deploy runbook, and CI. You own the code and the infrastructure. I do not lock you into a managed platform.",
    proof:
      "Built and shipped 6 SaaS products in the last 12 months — 123automateme.com (meta-portfolio with 38 project entries + Stripe checkout), NEXUS AI (3-tier Stripe-billed crypto trading hub), Apex Research Bot (Stripe-gated Telegram bot with 6 paying users).",
    packages: [
      {
        id: "bronze",
        name: "Setup Audit",
        tagline: "Diagnose what's blocking your launch.",
        priceCents: 49900,
        priceLabel: "$499",
        duration: "3-5 days",
        deliverables: [
          "60-min recorded video call reviewing your stack",
          "Written audit (15-25 pages) with prioritized fixes",
          "Concrete next-step plan with code samples",
          "1 week of follow-up email support",
        ],
      },
      {
        id: "silver",
        name: "MVP Build",
        tagline: "Ship a working SaaS in 2-3 weeks.",
        priceCents: 250000,
        priceLabel: "$2,500",
        duration: "2-3 weeks",
        popular: true,
        deliverables: [
          "Next.js 15 frontend + Prisma/PostgreSQL backend",
          "Stripe checkout (subscriptions or one-time)",
          "Auth (NextAuth or your preferred provider)",
          "Dockerized, deployed to your VPS or Vercel",
          "30 days of bug-fix support",
        ],
      },
      {
        id: "gold",
        name: "Retainer Build",
        tagline: "Dedicated build, ongoing.",
        priceCents: 1000000,
        priceLabel: "$10,000",
        duration: "1-3 months",
        deliverables: [
          "Full custom SaaS — anything from MVP to mature product",
          "Weekly demos + roadmap steering",
          "Dedicated Slack/Discord channel",
          "Code ownership + full IP transfer on final payment",
          "60 days post-launch support",
        ],
      },
    ],
  },
  {
    slug: "ai-agents",
    icon: "Bot",
    category: "AI AGENTS & BOTS",
    title: "AI Agents & Bots",
    color: "#d946ef",
    tagline: "Custom AI agents that actually do work, not just chat.",
    description:
      "Telegram, Discord, and web-based AI agents powered by Anthropic Claude, OpenAI, or local models. Real LLM integration, real workflows.",
    longDescription:
      "I build AI agents that interact with real services (Stripe, databases, CRMs, on-chain protocols) and complete multi-step workflows autonomously. Not a chatbot — an operator. Streaming responses, tool use, function calling, the whole thing. Past work includes Telegram bots with Stripe billing, Discord moderation bots with Claude integration, and on-chain agents that respond to market events.",
    proof:
      "Apex Research Bot is a 12-command Stripe-billed Telegram bot running 24/7 with 6 paying users. The agent pipeline (Nexus AI) streams Claude via Anthropic SSE for real-time trading signals. Both running in production today.",
    packages: [
      {
        id: "bronze",
        name: "Bot Config",
        tagline: "Wire up an existing bot idea.",
        priceCents: 19900,
        priceLabel: "$199",
        duration: "3-5 days",
        deliverables: [
          "Single-platform bot (Telegram OR Discord OR web)",
          "Up to 5 commands or intents",
          "Anthropic Claude or OpenAI integration",
          "Basic rate limiting + logging",
          "Source code + deploy instructions",
        ],
      },
      {
        id: "silver",
        name: "Custom Agent",
        tagline: "Multi-step AI workflow.",
        priceCents: 99900,
        priceLabel: "$999",
        duration: "2-3 weeks",
        popular: true,
        deliverables: [
          "Multi-step agent with tool use",
          "Persistent memory (Redis or DB)",
          "Streaming responses with progress UI",
          "Webhook integrations to your services",
          "30 days of support",
        ],
      },
      {
        id: "gold",
        name: "Operator Suite",
        tagline: "Multiple agents, one platform.",
        priceCents: 500000,
        priceLabel: "$5,000",
        duration: "1-3 months",
        deliverables: [
          "Multiple cooperating agents",
          "Operator dashboard with live monitoring",
          "Billing integration (Stripe metered or per-seat)",
          "Custom UI matching your brand",
          "60 days of support",
        ],
      },
    ],
  },
  {
    slug: "trading",
    icon: "LineChart",
    category: "TRADING INFRASTRUCTURE",
    title: "Trading Infrastructure",
    color: "#a855f7",
    tagline: "Real-time data, real bots, real on-chain execution.",
    description:
      "Solana + Ethereum + BSC trading bots and dashboards. DEX data, bonding curves, real-time analytics. Subscription-gated access.",
    longDescription:
      "I build trading infrastructure that runs 24/7: real-time price feeds from Jupiter/Raydium/Uniswap, signal detection, position management, and execution. Bots run on PM2 with crash recovery. Dashboards stream via WebSocket or SSE. I do not provide financial advice — I build the infrastructure. You bring the strategy. Past work includes a 47-day-uptime apex-trading bot and the APEX-XEPA signal engine.",
    proof:
      "Apex Trading Bot has been running continuously for 47+ days on Vultr VPS at 139.180.174.4 — that's uptime proof. APEX-XEPA engine is a real signal pipeline streaming market data. Both audited, both revenue-ready.",
    packages: [
      {
        id: "bronze",
        name: "Strategy Audit",
        tagline: "Diagnose why your bot isn't working.",
        priceCents: 29900,
        priceLabel: "$299",
        duration: "5-7 days",
        deliverables: [
          "60-min call reviewing your bot + logs",
          "Written audit with prioritized fixes",
          "Sample code for the top 3 improvements",
          "1 week of follow-up email support",
        ],
      },
      {
        id: "silver",
        name: "Bot Deploy",
        tagline: "Ship a working trading bot.",
        priceCents: 150000,
        priceLabel: "$1,500",
        duration: "2-4 weeks",
        popular: true,
        deliverables: [
          "Single-strategy bot (your strategy, my infra)",
          "Real-time data feed integration",
          "Position management + risk limits",
          "Webhook alerts (Telegram or Discord)",
          "PM2 deployment to your VPS",
          "30 days of support",
        ],
      },
      {
        id: "gold",
        name: "Trading Desk",
        tagline: "Multi-strategy platform.",
        priceCents: 500000,
        priceLabel: "$5,000",
        duration: "1-3 months",
        deliverables: [
          "Multi-strategy orchestration",
          "Real-time dashboard with charts",
          "Risk management across strategies",
          "Telegram/Discord bot interface",
          "Backtesting harness",
          "60 days of support",
        ],
      },
    ],
  },
  {
    slug: "devops",
    icon: "Wrench",
    category: "DEVOPS & INFRA",
    title: "DevOps & Infrastructure",
    color: "#7c3aed",
    tagline: "Docker, nginx, CI/CD, monitoring — production-grade.",
    description:
      "Docker orchestration, CI/CD pipelines, monitoring, log aggregation. nginx + certbot + Cloudflare. PM2 or systemd.",
    longDescription:
      "I set up production infrastructure that survives real traffic and real ops. Docker Compose stacks with health checks, nginx reverse proxy with HTTPS via certbot, Cloudflare in front, GitHub Actions for CI, Datadog or Grafana for monitoring. Everything scripted, everything reproducible. My current production stack runs 10 Docker containers + 6 PM2 bots on a single Vultr VPS without a single outage in 45+ days.",
    proof:
      "Production stack at apex-prod (139.180.174.4): 10 Docker containers, 6 PM2 bots, nginx + certbot + Cloudflare, GitHub Actions CI on every push. 45+ days uptime. All reproducible via `docker compose up -d`.",
    packages: [
      {
        id: "bronze",
        name: "VPS Setup",
        tagline: "Get your server production-ready.",
        priceCents: 19900,
        priceLabel: "$199",
        duration: "2-4 days",
        deliverables: [
          "Hardened VPS (SSH keys, firewall, fail2ban)",
          "Docker + Docker Compose installed",
          "nginx + certbot HTTPS setup",
          "Cloudflare DNS + proxy",
          "Written runbook for handoff",
        ],
      },
      {
        id: "silver",
        name: "Docker Pipeline",
        tagline: "Containerize + automate your deploys.",
        priceCents: 99900,
        priceLabel: "$999",
        duration: "1-2 weeks",
        popular: true,
        deliverables: [
          "Dockerfiles for all services",
          "docker-compose.yml for full stack",
          "GitHub Actions CI on every push",
          "Auto-deploy to staging on merge",
          "30 days of support",
        ],
      },
      {
        id: "gold",
        name: "Production Hardening",
        tagline: "Full production readiness.",
        priceCents: 300000,
        priceLabel: "$3,000",
        duration: "3-6 weeks",
        deliverables: [
          "Multi-environment setup (dev/staging/prod)",
          "Secrets management (Doppler or Vault)",
          "Monitoring + alerting (Datadog or Grafana)",
          "Log aggregation + search",
          "Backup + disaster recovery plan",
          "60 days of support",
        ],
      },
    ],
  },
  {
    slug: "design",
    icon: "Globe",
    category: "WEB DESIGN",
    title: "Web Design",
    color: "#ec4899",
    tagline: "Landing pages, marketing sites, brand identity.",
    description:
      "Hand-crafted landing pages and marketing sites. Conversion-focused, dark-themed by default (cyberpunk aesthetic available).",
    longDescription:
      "I design and ship web pages that convert. Not templates — hand-coded in Next.js + Tailwind, optimized for Core Web Vitals, dark mode by default, mobile-first. The 123automateme.com you're looking at right now is my work. So is designwithhermes.com. Cyberpunk aesthetic is my signature but I can match any brand.",
    proof:
      "Designed and shipped 123automateme.com (the page you're reading), designwithhermes.com (a sister brand), the Apex Research Bot landing page, the NEXUS AI dashboard, and 6+ other product pages. All in production.",
    packages: [
      {
        id: "bronze",
        name: "Landing Page",
        tagline: "One high-converting page.",
        priceCents: 49900,
        priceLabel: "$499",
        duration: "5-7 days",
        deliverables: [
          "Single landing page (Next.js + Tailwind)",
          "Hero, features, pricing, FAQ, contact",
          "Mobile-responsive, dark mode by default",
          "Core Web Vitals >90",
          "Deployed to Vercel or your domain",
        ],
      },
      {
        id: "silver",
        name: "Marketing Site",
        tagline: "Multi-page product website.",
        priceCents: 150000,
        priceLabel: "$1,500",
        duration: "2-3 weeks",
        popular: true,
        deliverables: [
          "5-10 page marketing site",
          "Custom design system (colors, type, components)",
          "CMS integration (Sanity, Contentful, or MDX)",
          "SEO optimized + sitemap + OG tags",
          "30 days of support",
        ],
      },
      {
        id: "gold",
        name: "Full Brand",
        tagline: "Identity + site + assets.",
        priceCents: 500000,
        priceLabel: "$5,000",
        duration: "1-2 months",
        deliverables: [
          "Brand identity (logo, colors, typography)",
          "Custom design system in Figma",
          "Full marketing site (10-20 pages)",
          "Social media templates",
          "60 days of support",
        ],
      },
    ],
  },
  {
    slug: "mobile",
    icon: "Hammer",
    category: "MOBILE APPS",
    title: "Mobile Apps",
    color: "#d946ef",
    tagline: "Expo + React Native, iOS + Android from one codebase.",
    description:
      "Cross-platform mobile apps via Expo. iOS + Android from one codebase. Native feel, push notifications, in-app purchases.",
    longDescription:
      "I build mobile apps with Expo + React Native. One codebase, two platforms, near-native performance. Stripe subscriptions, push notifications via Expo, in-app purchases, deep linking, the whole Expo SDK. I also handle App Store + Play Store submission including the metadata, screenshots, and review gauntlet.",
    proof:
      "Shipped the Nexus AI mobile prototype (Expo Router + Stripe + Drizzle) and the AR15 mobile scaffold. Both run on real iOS + Android via Expo Go or as standalone builds.",
    packages: [
      {
        id: "bronze",
        name: "App Audit",
        tagline: "Diagnose what's wrong with your app.",
        priceCents: 99900,
        priceLabel: "$999",
        duration: "5-7 days",
        deliverables: [
          "60-min call reviewing your app",
          "Written audit with prioritized fixes",
          "Performance profile (bundle size, cold start)",
          "Sample code for the top 3 improvements",
        ],
      },
      {
        id: "silver",
        name: "Cross-Platform Build",
        tagline: "Ship a working app in 3-4 weeks.",
        priceCents: 300000,
        priceLabel: "$3,000",
        duration: "3-4 weeks",
        popular: true,
        deliverables: [
          "Expo + React Native app (iOS + Android)",
          "Up to 10 screens with full navigation",
          "Stripe subscriptions OR in-app purchases",
          "Push notifications setup",
          "App Store + Play Store submission",
          "30 days of support",
        ],
      },
      {
        id: "gold",
        name: "Native iOS + Android",
        tagline: "Premium build, both stores.",
        priceCents: 1000000,
        priceLabel: "$10,000",
        duration: "2-4 months",
        deliverables: [
          "Custom design system in Figma",
          "Expo + React Native + native modules as needed",
          "Backend integration (your API or built)",
          "Full App Store + Play Store launch",
          "Analytics + crash reporting",
          "60 days of support",
        ],
      },
    ],
  },
];

/**
 * Hire retainer — exclusive access, monthly recurring.
 * This is the only subscription in the catalog. Everything else is one-time.
 */
export const HIRE_RETAINER = {
  slug: "hire",
  title: "Hire Me — Monthly Retainer",
  tagline: "Exclusive client. 40 hours/month. Everything else included.",
  description:
    "One client at a time. You get a dedicated engineer for 40 hours per month, priority response (under 4 hours during business hours), and access to everything I build. Pause or cancel anytime with 30 days notice.",
  priceCents: 500000,
  priceLabel: "$5,000",
  interval: "month" as const,
  includes: [
    "40 hours/month of dedicated engineering time",
    "Priority response: under 4 hours during business hours",
    "Access to all current and future private repos",
    "Weekly 1-on-1 call + async Slack/Discord",
    "First right of refusal on any project I take",
    "Quarterly strategy + roadmap review",
  ],
  notFor: [
    "If you only need a few hours of work per month, the Silver/Gold packages are cheaper",
    "If you want a 6-month commitment upfront, I do that too at a discount (ask)",
    "If you need 24/7 on-call, that's an additional $1K/month",
  ],
};

/**
 * Helpers
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getPackageById(
  serviceSlug: string,
  packageId: string,
): { service: Service; pkg: ServicePackage } | undefined {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return undefined;
  const pkg = service.packages.find((p) => p.id === packageId);
  if (!pkg) return undefined;
  return { service, pkg };
}

export function formatPrice(cents: number): string {
  return `$${(cents / 100).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}
