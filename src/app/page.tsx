import Link from 'next/link';
import {
  ArrowRight, Cpu, Bot, LineChart, Globe, Shield,
  Sparkles, Activity, Star, Briefcase, Code2, Wrench,
  Rocket, Zap, Award, Clock, Phone, Mail,
  Hexagon, Layers, GitBranch, Terminal, Server,
  Database, ChevronRight, ExternalLink, Wallet,
  Hammer, Truck, Mic, BarChart3, Compass, GraduationCap,
  Coins, TrendingUp, Eye, FileText, Radio,
  ShoppingCart, Package, Crosshair, MessageSquare,
  Brain, Store, Target, Copy, Gauge,
} from 'lucide-react';
import { CopyAddressButton, PayButton } from './components/SolPayment';

/* ════════════════════════════════════════════════════════════════
   123automateme.com — SaaS CV (2026)
   Full professional portfolio with 18+ real products
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
   DATA: All 18+ real products from the actual builds
═══════════════════════════════════════════════════════════════ */
const PRODUCTS = [
  {
    name: 'APEX RESEARCH BOT',
    cat: 'FINTECH · STRIPE-GATED · TELEGRAM',
    desc: 'Monetized Telegram bot with 12 hedge-fund research commands. Models Citadel, Bridgewater, Point72, RenTech, Pershing Square, Millennium, AQR, Tiger Global, Viking Global, Coatue, DE Shaw, and Baupost. AI-powered analysis, free trial, Stripe billing.',
    icon: Bot,
    color: '#ec4899',
    tags: ['Stripe Live', '$9 / query', '$29/mo sub', '12 commands', '6 users'],
    stack: ['Node.js', 'Telegram API', 'OpenAI', 'Stripe', 'SQLite'],
    status: 'EARNING',
    revenue: '$9 / $29 / mo',
    url: null,
  },
  {
    name: 'NEXUS AI',
    cat: 'AI AGENT · STRIPE-GATED',
    desc: 'Multi-tier AI trading hub. Starter/Pro/Elite subscriptions via Stripe + SOL payments. Cyberpunk-themed React UI streaming Claude via Anthropic SSE. Live signal monitoring + APEX-XEPA engine dashboard.',
    icon: Cpu,
    color: '#d946ef',
    tags: ['3 Tiers', 'Stripe Live', 'SOL payments', 'Claude SSE'],
    stack: ['React', 'Express', 'Stripe', 'Solana', 'Anthropic SSE'],
    status: 'EARNING',
    revenue: '$29 / $99 / $299 / mo',
    url: 'https://app.vivalarassa.fun',
  },
  {
    name: 'AUSSIE HOMESCHOOL HUB',
    cat: 'EDUCATION · SAAS · STRIPE',
    desc: 'ACARA-aligned Australian homeschool platform. Curriculum guides, financial cost planner, family discount pricing, subscription billing, referral system (referrer gets 1 month free, referred gets 20% off). Real Stripe checkout + webhook + PDF generation.',
    icon: GraduationCap,
    color: '#a855f7',
    tags: ['Stripe Live', 'Webhooks', 'PDF gen', 'Referrals', 'ACARA'],
    stack: ['Express', 'tRPC', 'Stripe', 'Supabase'],
    status: 'EARNING-READY',
    revenue: 'Subscription',
    url: 'https://nexus.vivalarassa.fun',
  },
  {
    name: 'APEX XEPA HUB',
    cat: 'FINTECH · TRADING DASHBOARD',
    desc: 'Multi-chain trading hub with 14 sections: Dashboard, Forex/US30, Crypto (SOL/ETH/BSC), Pump.fun Scanner, DexScreener, Arbitrage, Strategies, Backtesting, Marketplace, AI Tools, Signals, Wallets, Polymarket, Config. Dark terminal aesthetic. Multi-wallet (Phantom, MetaMask, Solflare, WalletConnect, Backpack).',
    icon: BarChart3,
    color: '#7c3aed',
    tags: ['14 sections', '5 wallets', '5 chains', 'Cyberpunk UI'],
    stack: ['React 18', 'Vite', 'Tailwind', 'Framer Motion', 'Lightweight Charts'],
    status: 'LIVE',
    revenue: 'SaaS-ready',
    url: null,
  },
  {
    name: 'AERIAL ESTIMATES',
    cat: 'CONSTRUCTION · AI · SAAS',
    desc: 'AI-powered aerial measurement and quoting for Australian construction. Supabase PostgreSQL, Stripe-integrated referral system ($10 credit per paid referral, first quote free). Database migrations, leaderboard, webhook handlers.',
    icon: Truck,
    color: '#ec4899',
    tags: ['Supabase', 'Stripe', 'Referrals', 'Leaderboard', 'Aerial AI'],
    stack: ['Node.js', 'Express', 'Supabase', 'Stripe', 'React'],
    status: 'LIVE',
    revenue: 'Quote-based',
    url: null,
  },
  {
    name: 'METALAUNCH AI',
    cat: 'SOLANA · TOKEN LAUNCHER',
    desc: 'AI-powered Solana meme coin launch platform with Pump.fun integration. Detects trending memes from TikTok/X, generates meta-relevant token tickers and branding, auto-launches tokens on Pump.fun via PumpPortal API. Real-time dashboard, profit-taking strategies.',
    icon: Rocket,
    color: '#d946ef',
    tags: ['Pump.fun', 'AI branding', 'Auto-launch', 'Profit-take'],
    stack: ['Node.js', 'TypeScript', 'PumpPortal API', 'Vite', 'Drizzle'],
    status: 'LIVE',
    revenue: 'Token-fee',
    url: null,
  },
  {
    name: 'APEX TRADING DASHBOARD',
    cat: 'FINTECH · TRADING · LIVE',
    desc: 'Apex Developments consolidated trading bot dashboard. Solana analytics, WebSocket data feeds, real-time market analysis, 47 days continuous uptime on production VPS.',
    icon: LineChart,
    color: '#a855f7',
    tags: ['WebSocket', 'Solana', '47d uptime', 'Real-time'],
    stack: ['Node.js', 'WebSocket', 'Jupiter API', 'PM2'],
    status: 'LIVE',
    revenue: 'Future tier',
    url: null,
  },
  {
    name: 'PRIMOS LEADERBOARD',
    cat: 'SOLANA · NFT ANALYTICS',
    desc: 'Live leaderboard of top wallets holding Primos NFTs (Solana/Tensor Trade collection). Shows wallet rank, position size, floor value, percentage of supply, links to active Tensor profile. Auto-refreshes every 60 seconds via Magic Eden public API.',
    icon: TrendingUp,
    color: '#7c3aed',
    tags: ['Tensor API', 'Magic Eden', '60s refresh', 'Live data'],
    stack: ['Node.js', 'Magic Eden API', 'Express'],
    status: 'LIVE',
    revenue: 'Free / Affiliate',
    url: null,
  },
  {
    name: 'SOLANA TOKEN SNIPER',
    cat: 'SOLANA · TRADING DAPP',
    desc: 'Professional Solana token sniping dApp with MEV protection, token analysis, transaction history, and Phantom wallet integration. Real-time market data, slippage protection, anti-rug detection.',
    icon: Zap,
    color: '#ec4899',
    tags: ['MEV protect', 'Phantom', 'Anti-rug', 'Real-time'],
    stack: ['Node.js', 'Solana Web3', 'Phantom'],
    status: 'LIVE',
    revenue: 'Trade-fee',
    url: null,
  },
  {
    name: 'POLYBACK',
    cat: 'PREDICTION MARKETS · ANALYTICS',
    desc: 'Polymarket strategy reverse tool. Analyzes successful trading patterns, surfaces profitable strategies, identifies market inefficiencies. Companion to Polycrack for strategy validation.',
    icon: Eye,
    color: '#d946ef',
    tags: ['Polymarket', 'Strategy', 'Pattern match', 'Analytics'],
    stack: ['Node.js', 'Polymarket API', 'Analytics'],
    status: 'LIVE',
    revenue: 'SaaS-ready',
    url: null,
  },
  {
    name: 'K187 STORE BOT',
    cat: 'TELEGRAM BOT · E-COMMERCE',
    desc: 'Telegram storefront for digital products. Product catalog (Apex Research $29, Solana Token Launcher Pro $99, K187 Volume Booster $49), Stripe checkout, order fulfillment, customer database, webhook integration.',
    icon: Truck,
    color: '#a855f7',
    tags: ['Telegram', 'Stripe Checkout', '3 products', 'Order DB'],
    stack: ['Telegraf', 'Stripe', 'SQLite', 'Express'],
    status: 'READY',
    revenue: '$29 / $49 / $99',
    url: null,
  },
  {
    name: 'BUBBLE MAPS',
    cat: 'SOLANA · ANALYTICS',
    desc: 'Solana bubble maps analytics. Visualize token holder distribution, identify whale wallets, track concentration risk. Read-only data tool, no manipulation, market transparency focused.',
    icon: Compass,
    color: '#7c3aed',
    tags: ['Bubble viz', 'Whale track', 'Read-only', 'Risk analytics'],
    stack: ['Node.js', 'Solana RPC', 'D3.js'],
    status: 'LIVE',
    revenue: 'SaaS-ready',
    url: null,
  },
  {
    name: 'AI AD-LIB LIVE',
    cat: 'AI · MUSIC · REAL-TIME',
    desc: 'Real-time AI ad-lib and hook generator that listens to your mic, follows your tempo and melody. Generates contextually relevant lyrics on the fly for freestyle sessions, live performance, content creation.',
    icon: Mic,
    color: '#ec4899',
    tags: ['Real-time mic', 'Tempo follow', 'Melody aware', 'AI lyrics'],
    stack: ['Node.js', 'Web Audio API', 'LLM'],
    status: 'LIVE',
    revenue: 'Subscription',
    url: null,
  },
  {
    name: 'YOUTUBE SHORTS PIPELINE',
    cat: 'CONTENT · AUTOMATION',
    desc: 'Automated YouTube Shorts pipeline: news → script → AI visuals → voiceover → captions → upload. Hands-free content production for niche channels. Configurable topics, automated scheduling.',
    icon: Radio,
    color: '#d946ef',
    tags: ['News → video', 'AI voice', 'Auto upload', 'Niche content'],
    stack: ['Node.js', 'FFmpeg', 'OpenAI TTS', 'YouTube API'],
    status: 'LIVE',
    revenue: 'Ad revenue',
    url: null,
  },
  {
    name: 'K187 PORTFOLIO AUDIT',
    cat: 'MOBILE · EXPO',
    desc: 'Dark-mode iOS-style mobile app (Expo + React Native) for portfolio auditing. Cross-platform, native feel, audit-grade UI for tracking product status, revenue, and uptime on the go.',
    icon: FileText,
    color: '#a855f7',
    tags: ['iOS-style', 'Expo', 'React Native', 'Cross-platform'],
    stack: ['Expo', 'React Native', 'TypeScript'],
    status: 'LIVE',
    revenue: 'Internal',
    url: null,
  },
  {
    name: 'K187 NEXUS PLATFORM',
    cat: 'INFRASTRUCTURE · OPS',
    desc: 'K187 Nexus AI Platform — Subscription Command Center + Docker Nexus Suite. Container orchestrator, deployment automation, subscription management, customer portal. Powers the entire vivalarassa ecosystem.',
    icon: Server,
    color: '#7c3aed',
    tags: ['Docker suite', 'Subscription cmd', 'Auto-deploy', 'Customer portal'],
    stack: ['Docker Compose', 'PostgreSQL', 'Redis', 'nginx'],
    status: 'LIVE',
    revenue: 'Internal',
    url: null,
  },
];

const INFRA = [
  { name: 'K187 Admin Dashboard', desc: 'Solana wallet auth, container control, deploys', url: 'https://admin.vivalarassa.fun', icon: Shield, uptime: '21d' },
  { name: 'K187 Logs Viewer', desc: 'Real-time log aggregation, multi-source search', url: 'https://logs.vivalarassa.fun', icon: Terminal, uptime: '10d' },
  { name: 'K187 API Backend', desc: 'Express + PostgreSQL + Redis, 10d uptime', url: 'https://api.vivalarassa.fun', icon: Server, uptime: '10d' },
  { name: 'K187 Trading Engine', desc: 'On-chain order management + execution', url: null, icon: Database, uptime: '10d' },
  { name: 'Apex Trading Bot', desc: 'Solana WebSocket analytics, 47d uptime', url: null, icon: LineChart, uptime: '47d' },
  { name: 'Nexus X Bot', desc: 'X/Twitter content scheduler', url: null, icon: GitBranch, uptime: '3d' },
];

const SERVICES = [
  { slug: "saas", icon: Code2, title: 'FULL-STACK SAAS', desc: 'Next.js 15 + Prisma + PostgreSQL. From idea to production. Stripe-integrated, Docker-deployed, auto-scaling.', color: '#ec4899' },
  { slug: "ai-agents", icon: Bot, title: 'AI AGENTS & BOTS', desc: 'Custom AI bots for research, trading, content. Telegram, Discord, web interfaces. Real LLM integration.', color: '#d946ef' },
  { slug: "trading", icon: LineChart, title: 'TRADING INFRASTRUCTURE', desc: 'Solana, Ethereum, BSC. DEX data, bonding curves, real-time analytics. Subscription-gated access.', color: '#a855f7' },
  { slug: "devops", icon: Wrench, title: 'DEVOPS & INFRA', desc: 'Docker orchestration, CI/CD, monitoring, log aggregation. nginx + certbot + Cloudflare.', color: '#7c3aed' },
  { slug: "design", icon: Globe, title: 'WEB DESIGN', desc: 'Landing pages, marketing sites, product pages. Hand-crafted, conversion-focused. Brand: Design With Hermes.', color: '#ec4899' },
  { slug: "mobile", icon: Hammer, title: 'MOBILE APPS', desc: 'Expo + React Native, iOS + Android from one codebase. Native feel, cross-platform.', color: '#d946ef' },
];

const STATS = [
  { value: '18+', label: 'Live Products', sub: 'All running now' },
  { value: '6', label: 'Stripe-Integrated', sub: 'Accepting payments' },
  { value: '47d', label: 'Longest Uptime', sub: 'Apex Trading Bot' },
  { value: '24/7', label: 'Production', sub: 'Vultr VPS' },
];

const SKILLS = [
  { cat: 'Frontend', items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vite'] },
  { cat: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'Prisma', 'SQLite', 'Redis', 'tRPC'] },
  { cat: 'DevOps', items: ['Docker', 'Docker Compose', 'nginx', 'PM2', 'GitHub Actions', 'Vultr', 'Cloudflare'] },
  { cat: 'Blockchain', items: ['Solana Web3', 'Jupiter API', 'Raydium', 'Pump.fun', 'WebSocket feeds', 'Wallet auth'] },
  { cat: 'AI / ML', items: ['Anthropic Claude', 'OpenAI', 'Telegraf bots', 'Telegram API', 'Real-time streaming', 'AI agents'] },
  { cat: 'Payments', items: ['Stripe Checkout', 'Subscriptions', 'Webhooks', 'Customer Portal', 'SOL payments', 'Referrals'] },
];

const STACK = [
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

const PROCESS = [
  { n: '01', t: 'DISCOVERY', d: 'We map your workflow, identify automation opportunities, scope the build. Concrete deliverables, no vague promises.' },
  { n: '02', t: 'BUILD', d: 'Sprint-based development. Frontend, backend, database, infrastructure. Every line tested, every deploy validated.' },
  { n: '03', t: 'DEPLOY', d: 'Push to production on your VPS. SSL certificates, DNS, nginx reverse proxy, health checks. All automated, all verified.' },
  { n: '04', t: 'MONETIZE', d: 'Stripe checkout, subscription tiers, webhooks. Your product starts earning from day one. Customer portal included.' },
];

const FAQS = [
  { q: 'Are you a solo developer or an agency?', a: 'Solo developer. I build, deploy, and maintain everything myself. Lower overhead, no middleman markup, direct communication from idea to launch.' },
  { q: 'What is your typical project timeline?', a: 'Discovery + build + deploy for a SaaS product is typically 2-4 weeks. Landing pages can be live within 3-5 days. Trading bots and AI agents depend on complexity but I ship working POCs within the first week.' },
  { q: 'How do payments work?', a: 'All subscription products use Stripe — you sign up, choose a tier, you are in. One-time projects are scoped with a signed proposal and milestone payments. Single Stripe account covers all products.' },
  { q: 'Do you offer ongoing support?', a: 'Yes. Every product includes 30 days of post-launch support. Extended maintenance available as a monthly service.' },
  { q: 'What tech stack do you use?', a: 'Next.js 15, TypeScript, Prisma + PostgreSQL/SQLite, Docker, nginx, hosted on Vultr VPS with Cloudflare DNS. Stripe for payments, Solana for crypto integrations, Python for AI/scripts.' },
];

const LIVE_URLS = [
  { url: 'https://123automateme.com', name: '123automateme.com', uptime: '2d' },
  { url: 'https://app.vivalarassa.fun', name: 'Nexus AI', uptime: '3d' },
  { url: 'https://nexus.vivalarassa.fun', name: 'Aussie Homeschool Hub', uptime: '7h' },
  { url: 'https://admin.vivalarassa.fun', name: 'Admin Dashboard', uptime: '21d' },
  { url: 'https://api.vivalarassa.fun', name: 'API Backend', uptime: '10d' },
  { url: 'https://logs.vivalarassa.fun', name: 'Log Viewer', uptime: '10d' },
];

const STORE_CATEGORIES = [
  {
    name: 'Solana Trading Bots',
    products: [
      { name: 'PUMP.ENGINE', desc: 'Pump.fun pre-graduation sniping via gRPC', sol: 11, icon: Crosshair, color: '#ec4899' },
      { name: 'CEX+Solana Trading Engine', desc: 'Multi-venue engine with MEV protection + Redis orchestration', sol: 17.5, icon: Cpu, color: '#d946ef' },
      { name: 'DEX Replication Bot', desc: 'Copy-trading from on-chain wallets via Playwright', sol: 13, icon: Copy, color: '#a855f7' },
      { name: 'Token-2022 Solana Agent', desc: 'Autonomous fee collection for Token-2022 SPL tokens', sol: 9, icon: Bot, color: '#7c3aed' },
      { name: 'Solana Token Sniper', desc: 'Professional sniping dApp with MEV protection', sol: 13, icon: Zap, color: '#ec4899' },
      { name: 'MetaLaunch AI', desc: 'AI-powered meme coin launcher via Pump.fun', sol: 15, icon: Rocket, color: '#d946ef' },
      { name: 'Solana Wallet Tracker', desc: 'AI-powered wallet analytics and monitoring', sol: 11, icon: Eye, color: '#a855f7' },
      { name: 'Solana Bundler UI', desc: 'Frontend template for bundler bot management', sol: 4.5, icon: Layers, color: '#7c3aed' },
    ],
  },
  {
    name: 'Polymarket Suite',
    products: [
      { name: 'Polymarket Whale Scanner', desc: 'VWAP-based whale detection and PnL ranking', sol: 5.5, icon: Target, color: '#ec4899' },
      { name: 'Polymarket Dashboard', desc: 'React analytics dashboard for whale activity', sol: 7.5, icon: BarChart3, color: '#d946ef' },
      { name: 'PolyBot Bayesian', desc: 'LMSR/Bayesian automated Polymarket trader', sol: 6.5, icon: Brain, color: '#a855f7' },
      { name: 'Polymarket Discord Bot', desc: 'Discord alerts + copy-trading (13 commands)', sol: 6.5, icon: MessageSquare, color: '#7c3aed' },
      { name: 'Polyback', desc: 'Strategy reverse-engineering tool', sol: 5.5, icon: Eye, color: '#ec4899' },
    ],
  },
  {
    name: 'Dashboards & Hubs',
    products: [
      { name: 'Apex Trading Dashboard', desc: 'Consolidated multi-bot management dashboard', sol: 11, icon: LineChart, color: '#d946ef' },
      { name: 'NEXUS AI Trading Hub', desc: 'Multi-chain trading platform (Forex, Crypto, AI)', sol: 22, icon: Cpu, color: '#a855f7' },
      { name: 'Quant Research Engine', desc: '8-agent AI research platform for strategy development', sol: 11, icon: Compass, color: '#7c3aed' },
    ],
  },
  {
    name: 'Analytics & Intelligence',
    products: [
      { name: 'Primos NFT Leaderboard', desc: 'Solana NFT wallet rankings', sol: 4.5, icon: TrendingUp, color: '#ec4899' },
      { name: 'Bubble Maps', desc: 'Wallet/token relationship visualization', sol: 9, icon: Compass, color: '#d946ef' },
      { name: 'Apex Research Bot', desc: 'Automated trading research aggregation', sol: 9, icon: Bot, color: '#a855f7' },
    ],
  },
  {
    name: 'Telegram & Adaptive',
    products: [
      { name: 'TG Copy Tracker', desc: 'Mass copy-trading alerts via Telegram', sol: 6.5, icon: Copy, color: '#7c3aed' },
      { name: 'OptimusPrimoPack v2', desc: 'Telegram commerce platform with SOL payments', sol: 11, icon: Package, color: '#ec4899' },
      { name: 'Memerizzle', desc: 'Meme coin trading bot', sol: 3.5, icon: Coins, color: '#d946ef' },
      { name: 'Memory Extension', desc: 'Persistent memory upgrade for any trading bot', sol: 4.5, icon: Brain, color: '#a855f7' },
    ],
  },
  {
    name: 'Marketplace',
    products: [
      { name: 'K187 Web Store', desc: 'Trading bot marketplace storefront', sol: 9, icon: Store, color: '#7c3aed' },
    ],
  },
];

const STORE_BUNDLES = [
  { name: 'Polymarket Complete', items: 'Scanner + Dashboard + PolyBot + Discord Bot + Polyback', sol: 22, savings: '5 tools' },
  { name: 'Solana Sniper Pack', items: 'PUMP.ENGINE + Token Sniper + MetaLaunch AI', sol: 33, savings: '3 tools' },
  { name: 'Apex Operations', items: 'Dashboard + Research Bot + NEXUS Hub', sol: 35, savings: '3 tools' },
  { name: 'Telegram Commerce', items: 'TG Copy Tracker + OptimusPrimoPack + Memerizzle', sol: 17.5, savings: '3 tools' },
  { name: 'Full Trading Infrastructure', items: 'All 24 products', sol: 130, savings: '24 tools' },
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
        <BotStoreSection />
        <InfraSection />
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
          {[['Portfolio', '#portfolio'], ['Bot Store', '#store'], ['Services', '/services'], ['Pricing', '/pricing'], ['Process', '#process'], ['Stack', '#stack'], ['Status', '#status'], ['FAQ', '#faq']].map(([l, h]) => (
            <a key={h} href={h} className="font-raj text-sm text-purple-300/70 hover:text-white transition-colors">{l}</a>
          ))}
          <Link href="/hire" className="px-4 py-1.5 rounded-lg font-raj font-bold text-xs text-white" style={{ background: 'linear-gradient(135deg,#ec4899,#d946ef)' }}>
            Hire Me
          </Link>
        </nav>
        <a href="#contact" className="px-5 py-2.5 rounded-lg font-raj font-bold text-sm text-white transition-all hover:scale-105"
          style={{ background: 'linear-gradient(135deg,#ec4899,#d946ef)', boxShadow: '0 0 20px rgba(236,72,153,0.3)' }}>
          HIRE ME →
        </a>
      </div>
    </header>
  );
}

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border" style={{
            background: 'rgba(236,72,153,0.08)', borderColor: 'rgba(236,72,153,0.2)',
          }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"/>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"/>
            </span>
            <span className="font-jb text-xs text-pink-300 tracking-wide">AVAILABLE FOR NEW PROJECTS · Q3 2026</span>
          </div>

          <div>
            <div className="font-jb text-xs text-purple-500 tracking-widest mb-3">SOLO DEVELOPER · FULL-STACK ENGINEER</div>
            <h1 className="font-cyber text-5xl lg:text-7xl font-black tracking-tight leading-[0.9]">
              <span className="block text-white">KAI</span>
              <span className="block text-purple-400 mt-2">BUILDS,</span>
              <span className="block relative mt-2">
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#ec4899,#d946ef,#a855f7)' }}>
                  SHIPS, EARNS.
                </span>
                <div className="mt-2 h-1 w-56 rounded-full cv-underline opacity-60"/>
              </span>
            </h1>
          </div>

          <p className="font-raj text-xl text-purple-200/70 leading-relaxed max-w-xl">
            I build full-stack SaaS products, AI agents, and trading infrastructure.
            Currently running <span className="text-pink-400 font-semibold">18+ live products</span> on a
            single Vultr VPS, with <span className="text-pink-400 font-semibold">6 Stripe-integrated</span> and earning revenue.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/services" className="group px-8 py-4 rounded-xl font-raj font-bold text-lg tracking-wide text-white transition-all hover:scale-105 flex items-center gap-3"
              style={{ background: 'linear-gradient(135deg,#ec4899,#d946ef)', boxShadow: '0 0 30px rgba(236,72,153,0.4)' }}>
              BROWSE SERVICES <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
            </Link>
            <Link href="/hire" className="px-8 py-4 rounded-xl border font-raj font-bold text-lg text-purple-300 hover:text-white hover:border-pink-500/50 transition-all"
              style={{ borderColor: 'var(--cv-border)' }}>
              HIRE ME MONTHLY
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 font-jb text-xs text-purple-400/60">
            <span>● Solo developer</span>
            <span>● 47d+ uptime</span>
            <span>● Production-graded</span>
            <span>● Stripe live</span>
          </div>
        </div>

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
                {[
                  ['Location', 'Australia (remote)'],
                  ['Experience', '7+ years · since 2019'],
                  ['Stack', 'Next.js · Node · Solidity'],
                  ['Specialty', 'Ship fast · Earn'],
                  ['Status', 'Available'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between py-2 border-b" style={{ borderColor: 'var(--cv-border)' }}>
                    <span className="text-purple-400/70">{k}</span>
                    <span className={k === 'Status' ? 'text-green-400' : 'text-white'}>{v}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t" style={{ borderColor: 'var(--cv-border)' }}>
                <div className="font-jb text-[10px] text-purple-500 mb-2">CURRENT FOCUS</div>
                <div className="font-raj text-sm text-white">Building production SaaS + AI agents for solo founders</div>
              </div>
            </div>
          </div>

          <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full font-cyber text-[10px] tracking-wider"
            style={{ background: 'linear-gradient(135deg,#ec4899,#d946ef)', boxShadow: '0 0 20px rgba(236,72,153,0.5)' }}>
            18 LIVE
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

function AboutSection() {
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
            7+ years shipping production software. 18+ live products running right now.
            From idea to earning revenue in 2-4 weeks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((s, i) => (
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
            18 LIVE PRODUCTS
          </h2>
          <p className="font-raj text-xl text-purple-300/60 max-w-2xl mx-auto">
            Every product below is running, deployed, and serving real users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <div key={i} className="group relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/40"
              style={{ background: 'var(--cv-card)', borderColor: 'var(--cv-border)' }}>
              <div className="flex items-start justify-between mb-4">
                <span className="font-jb text-[10px] text-purple-500 tracking-widest uppercase">{p.cat}</span>
                <span className={`px-2 py-1 rounded-full font-jb text-[10px] border ${
                  p.status === 'EARNING' ? 'bg-green-500/10 text-green-400 border-green-500/30' :
                  p.status === 'EARNING-READY' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30' :
                  p.status === 'READY' ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' :
                  'bg-purple-500/10 text-purple-400 border-purple-500/30'
                }`}>
                  {p.status}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
                  background: `${p.color}15`, border: `1px solid ${p.color}30`,
                }}>
                  <p.icon className="w-5 h-5" style={{ color: p.color }}/>
                </div>
                <h3 className="font-cyber text-sm font-bold tracking-wide text-white">{p.name}</h3>
              </div>

              <p className="font-raj text-sm text-purple-300/60 leading-relaxed mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 rounded-md font-jb text-[10px]"
                    style={{ background: 'rgba(168,85,247,0.06)', color: 'rgba(192,132,252,0.7)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.stack.map(s => (
                  <span key={s} className="px-2 py-0.5 rounded font-jb text-[9px]"
                    style={{ background: 'rgba(236,72,153,0.05)', color: 'rgba(236,72,153,0.6)', border: '1px solid rgba(236,72,153,0.1)' }}>
                    {s}
                  </span>
                ))}
              </div>

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

function BotStoreSection() {
  return (
    <section id="store" className="py-32 border-t" style={{ borderColor: 'var(--cv-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{
            background: 'linear-gradient(135deg,rgba(153,69,255,0.12),rgba(20,241,149,0.08))',
            borderColor: 'rgba(153,69,255,0.3)',
          }}>
            <ShoppingCart className="w-4 h-4 text-[#14F195]"/>
            <span className="font-jb text-xs tracking-wide" style={{ color: '#14F195' }}>BOT STORE · PAY WITH SOL</span>
          </div>
          <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            24 TRADING BOTS & TEMPLATES
          </h2>
          <p className="font-raj text-xl text-purple-300/60 max-w-2xl mx-auto mb-8">
            Production-ready trading bots, analytics tools, and templates — pay with Solana.
            Full source code, documentation, and 30-day support included.
          </p>
          <div className="max-w-lg mx-auto">
            <CopyAddressButton />
          </div>
        </div>

        <div className="space-y-16">
          {STORE_CATEGORIES.map((cat, ci) => (
            <div key={ci}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1" style={{ background: 'var(--cv-border)' }}/>
                <span className="font-cyber text-xs tracking-widest text-pink-400">{cat.name.toUpperCase()}</span>
                <div className="h-px flex-1" style={{ background: 'var(--cv-border)' }}/>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {cat.products.map((p, pi) => (
                  <div key={pi} className="group rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 flex flex-col"
                    style={{ background: 'var(--cv-card)', borderColor: 'var(--cv-border)' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{
                        background: `${p.color}15`, border: `1px solid ${p.color}30`,
                      }}>
                        <p.icon className="w-4 h-4" style={{ color: p.color }}/>
                      </div>
                      <h3 className="font-cyber text-[11px] font-bold tracking-wide text-white leading-tight">{p.name}</h3>
                    </div>
                    <p className="font-raj text-sm text-purple-300/60 leading-relaxed mb-4 flex-1">{p.desc}</p>
                    <div className="pt-3 border-t space-y-3" style={{ borderColor: 'var(--cv-border)' }}>
                      <div className="flex items-center justify-between">
                        <span className="font-cyber text-sm font-bold text-transparent bg-clip-text"
                          style={{ backgroundImage: 'linear-gradient(135deg,#9945FF,#14F195)' }}>
                          {p.sol} SOL
                        </span>
                        <span className="font-jb text-[10px] text-purple-500">source code</span>
                      </div>
                      <PayButton amount={p.sol} label={p.name} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="font-cyber text-2xl font-bold tracking-wide text-white mb-2">BUNDLE DEALS</h3>
            <p className="font-raj text-purple-300/60">Save big with curated bundles. Pay with SOL.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {STORE_BUNDLES.map((b, i) => (
              <div key={i} className={`rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                b.name === 'Full Trading Infrastructure' ? 'hover:border-pink-500/60 ring-1 ring-pink-500/20' : 'hover:border-pink-500/40'
              }`} style={{
                background: b.name === 'Full Trading Infrastructure'
                  ? 'linear-gradient(160deg,rgba(153,69,255,0.1),rgba(20,241,149,0.05))'
                  : 'var(--cv-card)',
                borderColor: b.name === 'Full Trading Infrastructure' ? 'rgba(153,69,255,0.4)' : 'var(--cv-border)',
              }}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-cyber text-xs font-bold tracking-wide text-white">{b.name}</h4>
                  <span className="px-2 py-1 rounded-full font-jb text-[10px] border"
                    style={{ background: 'rgba(20,241,149,0.08)', color: '#14F195', borderColor: 'rgba(20,241,149,0.2)' }}>
                    {b.savings}
                  </span>
                </div>
                <p className="font-raj text-sm text-purple-300/50 mb-4 flex-1">{b.items}</p>
                <div className="space-y-3">
                  <div className="font-cyber text-lg font-bold text-transparent bg-clip-text"
                    style={{ backgroundImage: 'linear-gradient(135deg,#9945FF,#14F195)' }}>
                    {b.sol} SOL
                  </div>
                  <PayButton amount={b.sol} label={b.name} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border p-8 text-center" style={{
          background: 'linear-gradient(160deg,rgba(153,69,255,0.06),rgba(20,241,149,0.04))',
          borderColor: 'rgba(153,69,255,0.2)',
        }}>
          <h3 className="font-cyber text-lg font-bold text-white mb-3 tracking-wide">HOW TO PAY</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="space-y-2">
              <div className="font-cyber text-2xl font-black text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg,#9945FF,#14F195)' }}>01</div>
              <div className="font-raj text-sm text-white">Click &quot;PAY&quot; on any product</div>
              <div className="font-raj text-xs text-purple-300/50">Opens your Phantom / Solflare wallet</div>
            </div>
            <div className="space-y-2">
              <div className="font-cyber text-2xl font-black text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg,#9945FF,#14F195)' }}>02</div>
              <div className="font-raj text-sm text-white">Send the exact SOL amount</div>
              <div className="font-raj text-xs text-purple-300/50">Or copy the address and send manually</div>
            </div>
            <div className="space-y-2">
              <div className="font-cyber text-2xl font-black text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg,#9945FF,#14F195)' }}>03</div>
              <div className="font-raj text-sm text-white">Get your source code in 24h</div>
              <div className="font-raj text-xs text-purple-300/50">Full repo access + documentation + support</div>
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <CopyAddressButton />
          </div>
          <p className="mt-4 font-raj text-xs text-purple-300/30">
            After payment, send your transaction signature to hello@123automateme.com for instant delivery.
          </p>
        </div>
      </div>
    </section>
  );
}

function InfraSection() {
  return (
    <section className="py-32 border-t" style={{ borderColor: 'var(--cv-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{
            background: 'rgba(124,58,237,0.08)', borderColor: 'rgba(124,58,237,0.2)',
          }}>
            <Server className="w-4 h-4 text-purple-400"/>
            <span className="font-jb text-xs text-purple-300 tracking-wide">INFRASTRUCTURE</span>
          </div>
          <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            THE STACK UNDER THE HOOD
          </h2>
          <p className="font-raj text-xl text-purple-300/60 max-w-2xl mx-auto">
            6 production services running 24/7 on a single Vultr VPS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {INFRA.map((s, i) => (
            <div key={i} className="rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40"
              style={{ background: 'var(--cv-card)', borderColor: 'var(--cv-border)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)' }}>
                  <s.icon className="w-4 h-4 text-purple-400"/>
                </div>
                <div className="font-cyber text-xs font-bold tracking-wide text-white">{s.name}</div>
              </div>
              <p className="font-raj text-sm text-purple-300/60 mb-3">{s.desc}</p>
              <div className="flex items-center justify-between text-[10px] font-jb">
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                    {s.url.replace('https://', '')}
                  </a>
                ) : (
                  <span className="text-purple-500">internal</span>
                )}
                <span className="text-green-400">{s.uptime} uptime</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
            <Link key={i} href={`/services/${s.slug}`} className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/40"
              style={{ background: 'var(--cv-card)', borderColor: 'var(--cv-border)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{
                background: `${s.color}12`, border: `1px solid ${s.color}25`,
              }}>
                <s.icon className="w-6 h-6" style={{ color: s.color }}/>
              </div>
              <h3 className="font-cyber text-sm font-bold tracking-wide text-white mb-3">{s.title}</h3>
              <p className="font-raj text-sm text-purple-300/60 leading-relaxed">{s.desc}</p>
              <div className="mt-4 font-jb text-[10px] tracking-widest" style={{ color: s.color }}>
                SEE PACKAGES →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

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

function TechStackSection() {
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
          {STACK.map((s, i) => (
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
          {LIVE_URLS.map((s, i) => (
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
          <div>18 live products · 6 earning · 47d uptime</div>
        </div>
      </div>
    </section>
  );
}

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

function FinalCTA() {
  return (
    <section id="contact" className="py-32 border-t" style={{ borderColor: 'var(--cv-border)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            READY TO<br/>
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#ec4899,#d946ef)' }}>
              AUTOMATE?
            </span>
          </h2>
          <p className="font-raj text-xl text-purple-300/60 leading-relaxed max-w-2xl mx-auto mb-8">
            Three ways to start. Pick what fits — Stripe checkout takes 60 seconds,
            or send a brief and I&apos;ll respond within 24 hours.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/services" className="px-6 py-3 rounded-xl font-raj font-bold text-white"
              style={{ background: 'linear-gradient(135deg,#ec4899,#d946ef)', boxShadow: '0 0 20px rgba(236,72,153,0.3)' }}>
              BROWSE 18 SERVICE PACKAGES →
            </Link>
            <Link href="/hire" className="px-6 py-3 rounded-xl font-raj font-bold text-pink-300 border hover:bg-pink-500/10"
              style={{ borderColor: 'rgba(236,72,153,0.4)' }}>
              HIRE ME MONTHLY ($5K/MO)
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="font-cyber text-xl font-bold text-white tracking-wide">OR JUST SAY HI</h3>
            <p className="font-raj text-purple-300/60 leading-relaxed">
              For custom work, partnerships, or anything not covered by the packages above.
            </p>
            <div className="space-y-4">
              {[
                { Icon: Mail, label: 'EMAIL', val: 'hello@123automateme.com', href: 'mailto:hello@123automateme.com' },
                { Icon: Phone, label: 'PHONE', val: 'Available on request', href: null },
                { Icon: Clock, label: 'RESPONSE TIME', val: 'Within 24 hours', href: null },
              ].map(({ Icon, label, val, href }, i) => {
                const inner = (
                  <div>
                    <div className="font-jb text-[10px] text-purple-500">{label}</div>
                    <span className="font-raj text-lg text-white">{val}</span>
                  </div>
                );
                return (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
                      background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.2)',
                    }}>
                      <Icon className="w-5 h-5 text-pink-400"/>
                    </div>
                    {href ? <a href={href} className="hover:text-pink-400 transition-colors">{inner}</a> : inner}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border p-6" style={{ background: 'var(--cv-card)', borderColor: 'var(--cv-border)' }}>
            <form action="/api/contact" method="POST" className="space-y-4">
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off"/>
              <div>
                <label className="font-jb text-xs text-purple-500 block mb-2">NAME</label>
                <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl font-raj text-white outline-none focus:ring-2 focus:ring-pink-500/30"
                  style={{ background: 'rgba(10,5,20,0.5)', border: '1px solid var(--cv-border)' }} placeholder="Your name"/>
              </div>
              <div>
                <label className="font-jb text-xs text-purple-500 block mb-2">EMAIL</label>
                <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl font-raj text-white outline-none focus:ring-2 focus:ring-pink-500/30"
                  style={{ background: 'rgba(10,5,20,0.5)', border: '1px solid var(--cv-border)' }} placeholder="you@email.com"/>
              </div>
              <div>
                <label className="font-jb text-xs text-purple-500 block mb-2">PROJECT</label>
                <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-xl font-raj text-white outline-none focus:ring-2 focus:ring-pink-500/30 resize-none"
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
              <li><a href="#store" className="hover:text-pink-400 transition-colors">Bot Store (24 bots)</a></li>
              <li><a href="https://app.vivalarassa.fun" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">Nexus AI</a></li>
              <li><a href="https://nexus.vivalarassa.fun" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">Aussie Homeschool</a></li>
              <li><Link href="/designwithhermes" className="hover:text-pink-400 transition-colors">Design With Hermes</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-jb text-xs text-purple-500 tracking-widest mb-4">PAGES</div>
            <ul className="space-y-2 font-raj text-sm text-purple-300/50">
              <li><a href="#portfolio" className="hover:text-pink-400 transition-colors">Portfolio</a></li>
              <li><Link href="/services" className="hover:text-pink-400 transition-colors">Service Packages</Link></li>
              <li><Link href="/hire" className="hover:text-pink-400 transition-colors">Hire Monthly ($5K)</Link></li>
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
          <span className="font-jb text-xs text-purple-500">© 2026 123automateme.com · All rights reserved</span>
          <span className="font-jb text-xs text-purple-500/40 mt-2 md:mt-0">Built with Next.js · Deployed on Vultr · DNS via Cloudflare</span>
        </div>
      </div>
    </footer>
  );
}
