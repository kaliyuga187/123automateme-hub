import Link from 'next/link';
import {
  ArrowRight, CheckCircle2, Cpu, Bot, LineChart, Globe, Shield,
  Sparkles, Gamepad2, Activity, Star, Briefcase, Code2, Wrench,
  Rocket, Zap, Award, Clock, DollarSign, Users, Phone, Mail,
  Calendar, MapPin, Hexagon, Layers, GitBranch, Terminal, Server,
  Database, Lock, ChevronRight, ExternalLink,
} from 'lucide-react';

/* ════════════════════════════════════════════════════════════════
   123automateme.com — CV/Portfolio Landing (2026)
   Single-page resume + portfolio showcasing all builds
   ════════════════════════════════════════════════════════════════ */

const cyberpunkCSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
:root {
  --cv-bg: #0a0514;
  --cv-card: rgba(15, 8, 30, 0.7);
  --cv-border: rgba(168, 85, 247, 0.15);
  --cv-pink: #ec4899;
  --cv-mag: #d946ef;
  --cv-purple: #a855f7;
  --cv-electric: #7c3aed;
}
.font-cyber { font-family: 'Orbitron', sans-serif; }
.font-raj { font-family: 'Rajdhani', sans-serif; }
.font-jb { font-family: 'JetBrains Mono', monospace; }
@keyframes cv-drift { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
@keyframes cv-pulse { 0%,100%{box-shadow:0 0 20px rgba(236,72,153,0.3)} 50%{box-shadow:0 0 40px rgba(236,72,153,0.5)} }
@keyframes cv-glow { 0%{background-position:0% 50%} 100%{background-position:200% 50%}}
.cv-float { animation: cv-drift 5s ease-in-out infinite; }
.cv-neon { animation: cv-pulse 3s ease-in-out infinite; }
.cv-underline {
  background: linear-gradient(90deg, #ec4899, #d946ef, #a855f7);
  background-size: 200% 100%;
  animation: cv-glow 3s linear infinite;
}
`;

/* ═══════════════════════════════════════════════════════════════
   DATA: All live products + services
═══════════════════════════════════════════════════════════════ */
const PRODUCTS = [
  {
    name: 'KAIO\'S CARDS',
    cat: 'COLLECTIBLES · FREE TOOL',
    desc: 'Pokémon TCG price lookup, barcode scanner, and trade analyzer. 15,000+ cards indexed with real-time TCGplayer + Cardmarket pricing.',
    url: 'https://cards.123automateme.com',
    landing: '/kaios-cards',
    icon: Gamepad2,
    color: '#ec4899',
    tags: ['Free', 'No Account', 'Barcode Scanner', 'Trade Analyzer'],
    stack: ['Node.js', 'Express', 'pokemontcg.io', 'Docker'],
    status: 'LIVE',
    revenue: 'Free / Affiliate',
  },
  {
    name: 'APEX RESEARCH BOT',
    cat: 'FINTECH · STRIPE-GATED',
    desc: 'AI-powered crypto research assistant. Stripe subscription: $9 single query or $29/month recurring. 6 active users.',
    url: 'https://research.vivalarassa.fun',
    landing: null,
    icon: Bot,
    color: '#d946ef',
    tags: ['$9 One-time', '$29/mo Subscription', 'Stripe Live', '6 users'],
    stack: ['Node.js', 'Telegram API', 'Stripe', 'SQLite'],
    status: 'EARNING',
    revenue: '$9 / $29 / mo',
  },
  {
    name: 'APEX TRADING BOT',
    cat: 'FINTECH · ANALYTICS',
    desc: 'Solana trading analytics & execution platform. WebSocket data feeds, real-time market analysis, automated strategies.',
    url: 'https://trading.vivalarassa.fun',
    landing: null,
    icon: LineChart,
    color: '#a855f7',
    tags: ['Solana', 'WebSocket', 'Real-time', 'DEX data'],
    stack: ['Node.js', 'WebSocket', 'Jupiter API', 'PM2'],
    status: 'LIVE',
    revenue: 'Future tier',
  },
  {
    name: 'NEXUS AI',
    cat: 'AI AGENT · STRIPE-GATED',
    desc: 'Multi-tier AI trading hub. Starter/Pro/Elite subscriptions via Stripe + SOL payments. Full community dashboard.',
    url: 'https://app.vivalarassa.fun',
    landing: null,
    icon: Cpu,
    color: '#7c3aed',
    tags: ['3 Tiers', 'Stripe Live', 'SOL payments', 'Community'],
    stack: ['Node.js', 'Solana', 'Stripe', 'Vultr VPS'],
    status: 'EARNING',
    revenue: '$29 / $99 / $299 / mo',
  },
  {
    name: 'SOLANA ANALYTICS RESEARCH',
    cat: 'RESEARCH · READ-ONLY',
    desc: 'Read-only Solana blockchain research tool. Bonding curve analysis, wallet tracking, pool scanning, market insights. 1,379 LOC, 8 CLI commands, 8 API endpoints.',
    url: 'https://research.123automateme.com',
    landing: null,
    icon: Activity,
    color: '#ec4899',
    tags: ['Read-only', 'CLI', '8 endpoints', 'No manipulation'],
    stack: ['Node.js', 'Solana RPC', 'Express', 'Socket.io'],
    status: 'LIVE',
    revenue: 'SaaS-ready',
  },
  {
    name: 'K187 STORE BOT',
    cat: 'TELEGRAM BOT · E-COMMERCE',
    desc: 'Telegram storefront for digital products. Product catalog, Stripe checkout, order fulfillment, customer database.',
    url: 'https://t.me/k187_store_bot',
    landing: null,
    icon: Sparkles,
    color: '#d946ef',
    tags: ['Telegram', 'Stripe Checkout', '3 products', 'Order DB'],
    stack: ['Telegraf', 'Stripe', 'SQLite', 'Express'],
    status: 'READY',
    revenue: '$29 / $49 / $99',
  },
  {
    name: 'AUSSIE HOMESCHOOL HUB',
    cat: 'EDUCATION · SAAS',
    desc: 'Homeschooling platform with curriculum, schedules, children tracking, subscription billing. PDF generation, Stripe checkout live.',
    url: 'https://nexus.vivalarassa.fun',
    landing: null,
    icon: Layers,
    color: '#a855f7',
    tags: ['Stripe Live', 'Webhooks', 'PDFs', 'Education'],
    stack: ['Express', 'tRPC', 'Stripe', 'Supabase-ready'],
    status: 'LIVE',
    revenue: 'Subscription-ready',
  },
  {
    name: 'NEXUS X BOT',
    cat: 'AUTOMATION · CONTENT',
    desc: 'Automated X/Twitter content scheduler for the K187 community. Posts market updates, engagement threads, brand content.',
    url: 'https://x.com/k187nexus',
    landing: null,
    icon: GitBranch,
    color: '#7c3aed',
    tags: ['Twitter API', 'Cron', 'Content', '3d uptime'],
    stack: ['Node.js', 'Twitter API', 'PM2'],
    status: 'LIVE',
    revenue: 'Brand growth',
  },
  {
    name: 'K187 ADMIN DASHBOARD',
    cat: 'INFRASTRUCTURE · INTERNAL',
    desc: 'Solana wallet-authenticated admin panel. Container orchestrator, log viewer, deployment control, customer management.',
    url: 'https://admin.vivalarassa.fun',
    landing: null,
    icon: Shield,
    color: '#ec4899',
    tags: ['Solana wallet auth', 'Multi-container', 'Logs', 'Deploys'],
    stack: ['Docker', 'PostgreSQL', 'Redis', 'nginx'],
    status: 'LIVE',
    revenue: 'Internal',
  },
  {
    name: 'K187 LOGS VIEWER',
    cat: 'INFRASTRUCTURE · MONITORING',
    desc: 'Real-time log aggregation & search across all PM2 bots and Docker containers. Filter by service, time, level.',
    url: 'https://logs.vivalarassa.fun',
    landing: null,
    icon: Terminal,
    color: '#d946ef',
    tags: ['Real-time', 'Log search', 'Multi-source', '10d uptime'],
    stack: ['Node.js', 'WebSocket', 'PostgreSQL'],
    status: 'LIVE',
    revenue: 'Internal',
  },
  {
    name: 'K187 API BACKEND',
    cat: 'INFRASTRUCTURE · API',
    desc: 'Main API backend serving the vivalarassa ecosystem. Auth, user management, payments, data pipelines. 10d uptime, healthy.',
    url: 'https://api.vivalarassa.fun',
    landing: null,
    icon: Server,
    color: '#a855f7',
    tags: ['Express', 'PostgreSQL', 'Redis', '10d uptime'],
    stack: ['Node.js', 'Postgres', 'Redis', 'Docker'],
    status: 'LIVE',
    revenue: 'Internal',
  },
  {
    name: 'K187 TRADING ENGINE',
    cat: 'INFRASTRUCTURE · TRADING',
    desc: 'On-chain trading engine. Order management, market data, execution layer for trading bots. 10d uptime, healthy.',
    url: null,
    landing: null,
    icon: Database,
    color: '#7c3aed',
    tags: ['On-chain', 'Order mgmt', 'Execution', '10d uptime'],
    stack: ['Node.js', 'Solana', 'Docker'],
    status: 'LIVE',
    revenue: 'Internal',
  },
];

const SERVICES = [
  {
    icon: Code2,
    title: 'FULL-STACK SAAS',
    desc: 'Next.js 15 + Prisma + PostgreSQL/SQLite. From idea to production. Stripe-integrated, Docker-deployed, auto-scaling.',
    color: '#ec4899',
  },
  {
    icon: Bot,
    title: 'AI AGENTS & BOTS',
    desc: 'Custom AI bots for research, trading, customer support, content. Telegram, Discord, web interfaces.',
    color: '#d946ef',
  },
  {
    icon: LineChart,
    title: 'TRADING INFRASTRUCTURE',
    desc: 'Solana, Ethereum, BSC. DEX data, bonding curves, real-time analytics. Subscription-gated access.',
    color: '#a855f7',
  },
  {
    icon: Wrench,
    title: 'AUTOMATION & DEVOPS',
    desc: 'Docker orchestration, CI/CD, monitoring, log aggregation. nginx + certbot + Cloudflare. Production-grade.',
    color: '#7c3aed',
  },
  {
    icon: Globe,
    title: 'WEB DESIGN (AGENCY)',
    desc: 'Landing pages, marketing sites, product pages. Hand-crafted, conversion-focused. Brand system: Design With Hermes.',
    color: '#ec4899',
  },
  {
    icon: Shield,
    title: 'INFRASTRUCTURE AS A SERVICE',
    desc: 'Vultr VPS setup, nginx reverse proxy, SSL certs, DNS, monitoring. Take any product from localhost to public.',
    color: '#d946ef',
  },
];

const STATS = [
  { value: '12+', label: 'Live Products', sub: 'All running right now' },
  { value: '6', label: 'Stripe-Integrated', sub: 'Accepting payments' },
  { value: '47d', label: 'Longest Uptime', sub: 'apex-trading bot' },
  { value: '$29', label: 'Starting From', sub: '/month subscriptions' },
];

const PROCESS = [
  { n: '01', t: 'DISCOVERY', d: 'We map your workflow, identify automation opportunities, scope the build. Concrete deliverables, no vague promises.' },
  { n: '02', t: 'BUILD', d: 'Sprint-based development. Next.js frontend, Prisma database, Docker infrastructure. Every line tested, every deploy validated.' },
  { n: '03', t: 'DEPLOY', d: 'Push to production on your VPS. SSL certificates, DNS, nginx reverse proxy, health checks. All automated, all verified.' },
  { n: '04', t: 'MONETIZE', d: 'Stripe checkout, subscription tiers, webhooks. Your product starts earning from day one. Customer portal included.' },
];

const FAQS = [
  { q: 'Are you a solo developer or an agency?', a: 'Solo developer. I build, deploy, and maintain everything myself. Lower overhead, no middleman markup, direct communication from idea to launch.' },
  { q: 'What is your typical project timeline?', a: 'Discovery + build + deploy for a SaaS product is typically 2-4 weeks. Landing pages can be live within 3-5 days. Trading bots and AI agents depend on complexity but I ship working POCs within the first week.' },
  { q: 'How do payments work?', a: 'All subscription products use Stripe - you sign up, choose a tier, you are in. One-time projects are scoped with a signed proposal and milestone payments. Single Stripe account covers all products.' },
  { q: 'Do you offer ongoing support?', a: 'Yes. Every product includes 30 days of post-launch support. Extended maintenance available as a monthly service.' },
  { q: 'What tech stack do you use?', a: 'Next.js 15, TypeScript, Prisma + PostgreSQL/SQLite, Docker, nginx, hosted on Vultr VPS with Cloudflare DNS. Stripe for payments, Solana for crypto integrations, Python for AI/scripts.' },
];

export default function HomePage() {
  return (
    <>
      <style>{cyberpunkCSS}</style>
      <div className="min-h-screen text-white font-raj" style={{ background: 'var(--cv-bg)' }}>
        <Header />
        <Hero />
        <StatsRow />
        <AboutSection />
        <PortfolioGrid />
        <ServicesSection />
        <ProcessSection />
        <TechStackSection />
        <LiveStatusSection />
        <PullQuote />
        <FAQSection />
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   1. HEADER
═══════════════════════════════════════════════════════════════ */
function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b" style={{
      background: 'rgba(10,5,20,0.85)', backdropFilter: 'blur(20px)', borderColor: 'var(--cv-border)',
    }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
            background: 'linear-gradient(135deg,#ec4899,#d946ef,#a855f7)', boxShadow: '0 0 20px rgba(236,72,153,0.3)',
          }}>
            <Hexagon className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-cyber font-bold text-lg tracking-wider text-white">123AUTO</span>
            <span className="font-jb text-[10px] text-purple-400 -mt-1 tracking-widest">ME.COM</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {[
            ['Portfolio', '#portfolio'],
            ['Services', '#services'],
            ['Process', '#process'],
            ['Stack', '#stack'],
            ['Status', '#status'],
            ['FAQ', '#faq'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="font-raj text-sm text-purple-300/70 hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="px-5 py-2.5 rounded-lg font-raj font-bold text-sm text-white transition-all hover:scale-105"
          style={{ background: 'linear-gradient(135deg,#ec4899,#d946ef)', boxShadow: '0 0 20px rgba(236,72,153,0.3)' }}>
          HIRE ME →
        </a>
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. HERO
═══════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 800 600">
        <defs><pattern id="hex" width="60" height="52" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
          <polygon points="30,1 55,15 55,37 30,51 5,37 5,15" fill="none" stroke="#a855f7" strokeWidth="0.5"/>
        </pattern></defs>
        <rect width="100%" height="100%" fill="url(#hex)"/>
      </svg>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
        style={{ background: 'radial-gradient(ellipse,rgba(236,72,153,0.12) 0%,rgba(168,85,247,0.06) 40%,transparent 70%)' }}/>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center w-full">
        <div className="space-y-7">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border" style={{
            background: 'rgba(236,72,153,0.08)', borderColor: 'rgba(236,72,153,0.2)',
          }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"/>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"/>
            </span>
            <span className="font-jb text-xs text-pink-300 tracking-wide">AVAILABLE FOR NEW PROJECTS · Q3 2026</span>
          </div>

          {/* Title block */}
          <div>
            <div className="font-jb text-xs text-purple-500 tracking-widest mb-3">SOLO DEVELOPER · FULL-STACK ENGINEER</div>
            <h1 className="font-cyber text-5xl lg:text-7xl font-black tracking-tight leading-[0.9]">
              <span className="block text-white">KAI</span>
              <span className="block text-purple-400 mt-2">BUILDS,</span>
              <span className="block relative mt-2">
                <span className="text-transparent bg-clip-text" style={{
                  backgroundImage: 'linear-gradient(135deg,#ec4899,#d946ef,#a855f7)',
                }}>SHIPS, EARNS.</span>
                <div className="mt-2 h-1 w-56 rounded-full cv-underline opacity-60"/>
              </span>
            </h1>
          </div>

          {/* Lede */}
          <p className="font-raj text-xl text-purple-200/70 leading-relaxed max-w-xl">
            I build full-stack SaaS products, AI agents, and trading infrastructure.
            Currently running <span className="text-pink-400 font-semibold">12+ live products</span> on a
            single Vultr VPS, with <span className="text-pink-400 font-semibold">6 Stripe-integrated</span> and earning revenue.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="group px-8 py-4 rounded-xl font-raj font-bold text-lg tracking-wide text-white transition-all hover:scale-105 flex items-center gap-3"
              style={{ background: 'linear-gradient(135deg,#ec4899,#d946ef)', boxShadow: '0 0 30px rgba(236,72,153,0.4)' }}>
              VIEW PORTFOLIO <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
            </a>
            <a href="#contact" className="px-8 py-4 rounded-xl border font-raj font-bold text-lg text-purple-300 hover:text-white hover:border-pink-500/50 transition-all"
              style={{ borderColor: 'var(--cv-border)' }}>
              HIRE ME
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap gap-6 font-jb text-xs text-purple-400/60">
            <span>● Solo developer</span>
            <span>● 47d+ uptime</span>
            <span>● Production-graded</span>
            <span>● Stripe live</span>
          </div>
        </div>

        {/* Right: floating ID card */}
        <div className="relative hidden lg:block">
          <div className="relative z-30 cv-float">
            <div className="rounded-2xl border p-6 cv-neon" style={{
              background: 'linear-gradient(160deg,rgba(236,72,153,0.12),rgba(168,85,247,0.08))',
              borderColor: 'rgba(236,72,153,0.3)',
            }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg,#ec4899,#a855f7)', boxShadow: '0 0 20px rgba(236,72,153,0.4)',
                }}>
                  <Hexagon className="w-7 h-7 text-white"/>
                </div>
                <div>
                  <div className="font-cyber text-sm font-bold tracking-wide text-white">KAI · k187</div>
                  <div className="font-jb text-[10px] text-purple-400">FULL-STACK ENGINEER</div>
                </div>
              </div>

              <div className="space-y-2 font-raj text-sm">
                <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: 'var(--cv-border)' }}>
                  <span className="text-purple-400/70">Location</span>
                  <span className="text-white">Australia (remote)</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: 'var(--cv-border)' }}>
                  <span className="text-purple-400/70">Experience</span>
                  <span className="text-white">7+ years · since 2019</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: 'var(--cv-border)' }}>
                  <span className="text-purple-400/70">Stack</span>
                  <span className="text-white">Next.js · Node · Solidity</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: 'var(--cv-border)' }}>
                  <span className="text-purple-400/70">Specialty</span>
                  <span className="text-white">Ship fast · Earn</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-purple-400/70">Status</span>
                  <span className="text-green-400 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"/>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"/>
                    </span>
                    Available
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t" style={{ borderColor: 'var(--cv-border)' }}>
                <div className="font-jb text-[10px] text-purple-500 mb-2">CURRENT FOCUS</div>
                <div className="font-raj text-sm text-white">Building production SaaS + AI agents for solo founders</div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full font-cyber text-[10px] tracking-wider"
            style={{ background: 'linear-gradient(135deg,#ec4899,#d946ef)', boxShadow: '0 0 20px rgba(236,72,153,0.5)' }}>
            12 LIVE
          </div>
          <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-full font-cyber text-[10px] tracking-wider bg-green-500 text-black"
            style={{ boxShadow: '0 0 20px rgba(16,185,129,0.5)' }}>
            6 EARNING
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. STATS ROW
═══════════════════════════════════════════════════════════════ */
function StatsRow() {
  return (
    <section className="py-20 border-y" style={{ borderColor: 'var(--cv-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-transparent bg-clip-text mb-2"
                style={{ backgroundImage: 'linear-gradient(135deg,#ec4899,#a855f7)' }}>
                {s.value}
              </div>
              <div className="font-raj text-sm text-white mb-1">{s.label}</div>
              <div className="font-jb text-[10px] text-purple-500">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4. ABOUT / SKILLS
═══════════════════════════════════════════════════════════════ */
function AboutSection() {
  const skills = [
    { cat: 'Frontend', items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { cat: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'Prisma', 'SQLite', 'Redis'] },
    { cat: 'DevOps', items: ['Docker', 'Docker Compose', 'nginx', 'PM2', 'GitHub Actions', 'Vultr VPS', 'Cloudflare'] },
    { cat: 'Blockchain', items: ['Solana Web3', 'Jupiter API', 'Raydium', 'WebSocket feeds', 'Wallet auth'] },
    { cat: 'AI / ML', items: ['Minimax M3', 'OpenAI API', 'Telegraf bots', 'Telegram API', 'Computer use'] },
    { cat: 'Payments', items: ['Stripe Checkout', 'Stripe Subscriptions', 'Stripe Webhooks', 'Customer Portal', 'SOL payments'] },
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{
            background: 'rgba(168,85,247,0.08)', borderColor: 'rgba(168,85,247,0.2)',
          }}>
            <Briefcase className="w-4 h-4 text-purple-400"/>
            <span className="font-jb text-xs text-purple-300 tracking-wide">ABOUT</span>
          </div>
          <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            ENGINEER · BUILDER · SHIPPER
          </h2>
          <p className="font-raj text-xl text-purple-300/60 max-w-2xl mx-auto">
            7+ years shipping production software. 12+ live products running right now.
            From idea to earning revenue in 2-4 weeks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <div key={i} className="rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40"
              style={{ background: 'var(--cv-card)', borderColor: 'var(--cv-border)' }}>
              <div className="font-cyber text-xs tracking-widest text-pink-400 mb-4">{s.cat.toUpperCase()}</div>
              <div className="flex flex-wrap gap-2">
                {s.items.map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-md font-jb text-[11px]"
                    style={{ background: 'rgba(168,85,247,0.08)', color: 'rgba(192,132,252,0.85)', border: '1px solid rgba(168,85,247,0.15)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5. PORTFOLIO GRID — all 12 products
═══════════════════════════════════════════════════════════════ */
function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-32 border-t" style={{ borderColor: 'var(--cv-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{
            background: 'rgba(236,72,153,0.08)', borderColor: 'rgba(236,72,153,0.2)',
          }}>
            <Layers className="w-4 h-4 text-pink-400"/>
            <span className="font-jb text-xs text-pink-300 tracking-wide">PORTFOLIO</span>
          </div>
          <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            12 LIVE PRODUCTS
          </h2>
          <p className="font-raj text-xl text-purple-300/60 max-w-2xl mx-auto">
            Every product below is running, deployed, and serving real users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <div key={i} className="group relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/40"
              style={{ background: 'var(--cv-card)', borderColor: 'var(--cv-border)' }}>
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <span className="font-jb text-[10px] text-purple-500 tracking-widest uppercase">{p.cat}</span>
                <span className={`px-2 py-1 rounded-full font-jb text-[10px] border ${
                  p.status === 'EARNING' ? 'bg-green-500/10 text-green-400 border-green-500/30' :
                  p.status === 'LIVE' ? 'bg-purple-500/10 text-purple-400 border-purple-500/30' :
                  p.status === 'READY' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30' :
                  'bg-slate-500/10 text-slate-400 border-slate-500/30'
                }`}>
                  {p.status}
                </span>
              </div>

              {/* Icon + name */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
                  background: `${p.color}15`, border: `1px solid ${p.color}30`,
                }}>
                  <p.icon className="w-5 h-5" style={{ color: p.color }}/>
                </div>
                <h3 className="font-cyber text-sm font-bold tracking-wide text-white">{p.name}</h3>
              </div>

              <p className="font-raj text-sm text-purple-300/60 leading-relaxed mb-4">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 rounded-md font-jb text-[10px]"
                    style={{ background: 'rgba(168,85,247,0.06)', color: 'rgba(192,132,252,0.7)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.stack.map(s => (
                  <span key={s} className="px-2 py-0.5 rounded font-jb text-[9px]"
                    style={{ background: 'rgba(236,72,153,0.05)', color: 'rgba(236,72,153,0.6)', border: '1px solid rgba(236,72,153,0.1)' }}>
                    {s}
                  </span>
                ))}
              </div>

              {/* Revenue + link */}
              <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--cv-border)' }}>
                <span className="font-jb text-[10px] text-purple-400">Revenue: {p.revenue}</span>
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-raj text-xs text-pink-400 hover:text-pink-300 transition-colors">
                    Live <ExternalLink className="w-3 h-3"/>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6. SERVICES
═══════════════════════════════════════════════════════════════ */
function ServicesSection() {
  return (
    <section id="services" className="py-32 border-t" style={{ borderColor: 'var(--cv-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{
            background: 'rgba(168,85,247,0.08)', borderColor: 'rgba(168,85,247,0.2)',
          }}>
            <Wrench className="w-4 h-4 text-purple-400"/>
            <span className="font-jb text-xs text-purple-300 tracking-wide">SERVICES</span>
          </div>
          <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            WHAT I BUILD
          </h2>
          <p className="font-raj text-xl text-purple-300/60 max-w-2xl mx-auto">
            Six core services. End-to-end delivery, from idea to revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div key={i} className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/40"
              style={{ background: 'var(--cv-card)', borderColor: 'var(--cv-border)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{
                background: `${s.color}12`, border: `1px solid ${s.color}25`,
              }}>
                <s.icon className="w-6 h-6" style={{ color: s.color }}/>
              </div>
              <h3 className="font-cyber text-sm font-bold tracking-wide text-white mb-3">{s.title}</h3>
              <p className="font-raj text-sm text-purple-300/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   7. PROCESS
═══════════════════════════════════════════════════════════════ */
function ProcessSection() {
  return (
    <section id="process" className="py-32 border-t" style={{ borderColor: 'var(--cv-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{
            background: 'rgba(168,85,247,0.08)', borderColor: 'rgba(168,85,247,0.2)',
          }}>
            <Rocket className="w-4 h-4 text-purple-400"/>
            <span className="font-jb text-xs text-purple-300 tracking-wide">PROCESS</span>
          </div>
          <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            FROM IDEA TO INCOME
          </h2>
          <p className="font-raj text-xl text-purple-300/60 max-w-xl mx-auto">
            Four steps. No bloated timelines. Ship fast, ship clean.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS.map((s, i) => (
            <div key={i} className="relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40"
              style={{ background: 'var(--cv-card)', borderColor: 'var(--cv-border)' }}>
              <div className="font-cyber text-3xl font-black text-transparent bg-clip-text mb-3"
                style={{ backgroundImage: 'linear-gradient(135deg,#ec4899,#a855f7)' }}>
                {s.n}
              </div>
              <h3 className="font-cyber text-sm font-bold tracking-wide text-white mb-3">{s.t}</h3>
              <p className="font-raj text-sm text-purple-300/60 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   8. TECH STACK DETAIL
═══════════════════════════════════════════════════════════════ */
function TechStackSection() {
  const stack = [
    { name: 'Next.js 15', use: 'Frontend + SSR', color: '#ec4899' },
    { name: 'TypeScript', use: 'Type safety', color: '#d946ef' },
    { name: 'Node.js', use: 'Backend runtime', color: '#a855f7' },
    { name: 'Prisma', use: 'ORM + migrations', color: '#7c3aed' },
    { name: 'PostgreSQL', use: 'Primary database', color: '#ec4899' },
    { name: 'SQLite', use: 'Lightweight data', color: '#d946ef' },
    { name: 'Docker', use: 'Containerization', color: '#a855f7' },
    { name: 'nginx', use: 'Reverse proxy', color: '#7c3aed' },
    { name: 'PM2', use: 'Process manager', color: '#ec4899' },
    { name: 'Stripe', use: 'Payments', color: '#d946ef' },
    { name: 'Solana', use: 'Web3 + wallets', color: '#a855f7' },
    { name: 'Cloudflare', use: 'DNS + proxy', color: '#7c3aed' },
    { name: 'Vultr', use: 'VPS hosting', color: '#ec4899' },
    { name: 'GitHub', use: 'Source control', color: '#d946ef' },
  ];

  return (
    <section id="stack" className="py-32 border-t" style={{ borderColor: 'var(--cv-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{
            background: 'rgba(168,85,247,0.08)', borderColor: 'rgba(168,85,247,0.2)',
          }}>
            <Code2 className="w-4 h-4 text-purple-400"/>
            <span className="font-jb text-xs text-purple-300 tracking-wide">TECH STACK</span>
          </div>
          <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            THE TOOLKIT
          </h2>
          <p className="font-raj text-xl text-purple-300/60 max-w-2xl mx-auto">
            Battle-tested technologies. Production-grade every time.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {stack.map((s, i) => (
            <div key={i} className="rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40"
              style={{ background: 'var(--cv-card)', borderColor: 'var(--cv-border)' }}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ background: s.color }}/>
                <div>
                  <div className="font-cyber text-xs font-bold tracking-wide text-white">{s.name}</div>
                  <div className="font-jb text-[10px] text-purple-500">{s.use}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   9. LIVE STATUS (UPTIME SHOWCASE)
═══════════════════════════════════════════════════════════════ */
function LiveStatusSection() {
  return (
    <section id="status" className="py-32 border-t" style={{ borderColor: 'var(--cv-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{
            background: 'rgba(16,185,129,0.08)', borderColor: 'rgba(16,185,129,0.2)',
          }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"/>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"/>
            </span>
            <span className="font-jb text-xs text-green-300 tracking-wide">LIVE STATUS</span>
          </div>
          <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            ALL SYSTEMS OPERATIONAL
          </h2>
          <p className="font-raj text-xl text-purple-300/60 max-w-2xl mx-auto">
            Every product below is currently running, served via HTTPS, and healthy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { url: 'https://123automateme.com', name: '123automateme.com', uptime: '2d', status: 'operational' },
            { url: 'https://cards.123automateme.com', name: 'KAIO\'S CARDS', uptime: '2d', status: 'operational' },
            { url: 'https://app.vivalarassa.fun', name: 'Nexus AI', uptime: '3d', status: 'operational' },
            { url: 'https://admin.vivalarassa.fun', name: 'Admin Dashboard', uptime: '21d', status: 'operational' },
            { url: 'https://api.vivalarassa.fun', name: 'API Backend', uptime: '10d', status: 'operational' },
            { url: 'https://logs.vivalarassa.fun', name: 'Log Viewer', uptime: '10d', status: 'operational' },
            { url: 'https://nexus.vivalarassa.fun', name: 'Aussie Homeschool', uptime: '7h', status: 'operational' },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border p-4 flex items-center justify-between"
              style={{ background: 'var(--cv-card)', borderColor: 'var(--cv-border)' }}>
              <div className="flex items-center gap-3 min-w-0">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"/>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"/>
                </span>
                <div className="min-w-0">
                  <div className="font-cyber text-xs font-bold tracking-wide text-white truncate">{s.name}</div>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-jb text-[10px] text-purple-500 hover:text-pink-400 transition-colors truncate block">
                    {s.url.replace('https://', '')}
                  </a>
                </div>
              </div>
              <div className="text-right flex-shrink-0 ml-3">
                <div className="font-jb text-[10px] text-green-400">{s.uptime}</div>
                <div className="font-jb text-[9px] text-purple-500">uptime</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   10. PULL QUOTE
═══════════════════════════════════════════════════════════════ */
function PullQuote() {
  return (
    <section className="py-32 border-t" style={{ borderColor: 'var(--cv-border)' }}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <Star className="w-16 h-16 mx-auto mb-8 text-pink-500/20"/>
        <blockquote className="font-cyber text-3xl lg:text-5xl font-black tracking-tight leading-tight mb-8 text-transparent bg-clip-text"
          style={{ backgroundImage: 'linear-gradient(135deg,#ec4899,#d946ef,#a855f7)' }}>
          &quot;Stop planning. Start shipping.<br/>Income follows execution.&quot;
        </blockquote>
        <div className="font-raj text-lg text-purple-300/50">
          <div className="font-semibold text-purple-200/80 mb-1">My operating principle</div>
          <div>12 live products · 6 earning · 47d uptime</div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   11. FAQ
═══════════════════════════════════════════════════════════════ */
function FAQSection() {
  return (
    <section id="faq" className="py-32 border-t" style={{ borderColor: 'var(--cv-border)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">FAQ</h2>
          <p className="font-raj text-xl text-purple-300/60">Common questions, direct answers.</p>
        </div>
        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <details key={i} className="group rounded-xl border overflow-hidden"
              style={{ background: 'var(--cv-card)', borderColor: 'var(--cv-border)' }}>
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                <span className="font-raj text-lg font-semibold text-white">{f.q}</span>
                <span className="ml-6 text-2xl text-pink-500/60 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-5 font-raj text-purple-300/60 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   12. FINAL CTA + CONTACT
═══════════════════════════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section id="contact" className="py-32 border-t" style={{ borderColor: 'var(--cv-border)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white">
              READY TO<br/>
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#ec4899,#d946ef)' }}>
                AUTOMATE?
              </span>
            </h2>
            <p className="font-raj text-xl text-purple-300/60 leading-relaxed">
              Let&apos;s talk about your project. Email, call, or fill out the form - I respond within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
                  background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.2)',
                }}>
                  <Mail className="w-5 h-5 text-pink-400"/>
                </div>
                <div>
                  <div className="font-jb text-[10px] text-purple-500">EMAIL</div>
                  <a href="mailto:hello@123automateme.com" className="font-raj text-lg text-white hover:text-pink-400 transition-colors">
                    hello@123automateme.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
                  background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)',
                }}>
                  <Phone className="w-5 h-5 text-purple-400"/>
                </div>
                <div>
                  <div className="font-jb text-[10px] text-purple-500">PHONE</div>
                  <span className="font-raj text-lg text-white">Available on request</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
                  background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)',
                }}>
                  <Clock className="w-5 h-5 text-purple-400"/>
                </div>
                <div>
                  <div className="font-jb text-[10px] text-purple-500">RESPONSE TIME</div>
                  <span className="font-raj text-lg text-white">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border p-6" style={{ background: 'var(--cv-card)', borderColor: 'var(--cv-border)' }}>
            <form action="/api/contact" method="POST" className="space-y-4">
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off"/>
              <div>
                <label className="font-jb text-xs text-purple-500 block mb-2">NAME</label>
                <input type="text" name="name" required
                  className="w-full px-4 py-3 rounded-xl font-raj text-white outline-none focus:ring-2 focus:ring-pink-500/30"
                  style={{ background: 'rgba(10,5,20,0.5)', border: '1px solid var(--cv-border)' }} placeholder="Your name"/>
              </div>
              <div>
                <label className="font-jb text-xs text-purple-500 block mb-2">EMAIL</label>
                <input type="email" name="email" required
                  className="w-full px-4 py-3 rounded-xl font-raj text-white outline-none focus:ring-2 focus:ring-pink-500/30"
                  style={{ background: 'rgba(10,5,20,0.5)', border: '1px solid var(--cv-border)' }} placeholder="you@email.com"/>
              </div>
              <div>
                <label className="font-jb text-xs text-purple-500 block mb-2">PROJECT</label>
                <textarea name="message" required rows={4}
                  className="w-full px-4 py-3 rounded-xl font-raj text-white outline-none focus:ring-2 focus:ring-pink-500/30 resize-none"
                  style={{ background: 'rgba(10,5,20,0.5)', border: '1px solid var(--cv-border)' }} placeholder="Tell me about your project..."/>
              </div>
              <button type="submit"
                className="w-full px-6 py-4 rounded-xl font-raj font-bold text-lg tracking-wide text-white transition-all hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg,#ec4899,#d946ef)', boxShadow: '0 0 30px rgba(236,72,153,0.3)' }}>
                SEND MESSAGE →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   13. FOOTER
═══════════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="border-t py-12" style={{ borderColor: 'var(--cv-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#ec4899,#a855f7)' }}>
                <Hexagon className="w-4 h-4 text-white"/>
              </div>
              <span className="font-cyber font-bold text-sm text-white tracking-wider">123AUTO</span>
            </div>
            <p className="font-raj text-sm text-purple-300/50 leading-relaxed">
              Solo developer building, deploying, and monetizing web products. Available for hire.
            </p>
          </div>
          <div>
            <div className="font-jb text-xs text-purple-500 tracking-widest mb-4">PRODUCTS</div>
            <ul className="space-y-2 font-raj text-sm text-purple-300/50">
              <li><a href="https://cards.123automateme.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">KAIO&apos;S CARDS</a></li>
              <li><a href="https://app.vivalarassa.fun" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">Nexus AI</a></li>
              <li><Link href="/designwithhermes" className="hover:text-pink-400 transition-colors">Design With Hermes</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-jb text-xs text-purple-500 tracking-widest mb-4">PAGES</div>
            <ul className="space-y-2 font-raj text-sm text-purple-300/50">
              <li><a href="#portfolio" className="hover:text-pink-400 transition-colors">Portfolio</a></li>
              <li><a href="#services" className="hover:text-pink-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-jb text-xs text-purple-500 tracking-widest mb-4">LEGAL</div>
            <ul className="space-y-2 font-raj text-sm text-purple-300/50">
              <li><Link href="/terms" className="hover:text-pink-400 transition-colors">Terms</Link></li>
              <li><Link href="/privacy" className="hover:text-pink-400 transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t text-sm" style={{ borderColor: 'var(--cv-border)' }}>
          <span className="font-jb text-xs text-purple-500">
            © 2026 123automateme.com · All rights reserved
          </span>
          <span className="font-jb text-xs text-purple-500/40 mt-2 md:mt-0">
            Built with Next.js · Deployed on Vultr · DNS via Cloudflare
          </span>
        </div>
      </div>
    </footer>
  );
}
