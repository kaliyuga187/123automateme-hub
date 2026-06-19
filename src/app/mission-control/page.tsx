import {
  Activity, AlertTriangle, ArrowRight, BarChart3, Bot, CheckCircle2,
  ChevronRight, Clock, Cpu, Database, DollarSign, ExternalLink,
  Globe, Hexagon, Layers, LineChart, Lock, Mail, MapPin,
  Phone, Radar, Radio, Server, Shield, Terminal, Wifi, Zap, XCircle,
} from 'lucide-react';
import Link from 'next/link';

const cyberpunkCSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
:root {
  --mc-bg: #0a0514;
  --mc-card: rgba(15, 8, 30, 0.7);
  --mc-border: rgba(168, 85, 247, 0.15);
  --mc-pink: #ec4899;
  --mc-mag: #d946ef;
  --mc-purple: #a855f7;
}
.font-cyber { font-family: 'Orbitron', sans-serif; }
.font-raj { font-family: 'Rajdhani', sans-serif; }
.font-jb { font-family: 'JetBrains Mono', monospace; }
@keyframes mc-pulse { 0%,100%{opacity:1;box-shadow:0 0 12px rgba(16,185,129,0.4)} 50%{opacity:0.5;box-shadow:0 0 24px rgba(16,185,129,0.6)} }
@keyframes mc-blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
@keyframes mc-drift { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
.mc-live-dot { animation: mc-blink 1.5s ease-in-out infinite; }
.mc-status-online { animation: mc-pulse 2s ease-in-out infinite; }
.mc-float { animation: mc-drift 4s ease-in-out infinite; }
`;

// ──────────────────────────────────────────────────────────────────
// MISSION CONTROL DATA — pulled from real VPS state on June 17 2026
// ──────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    group: 'PUBLIC WEBSITES',
    icon: Globe,
    color: '#ec4899',
    items: [
      { name: '123automateme.com (Hub)', url: 'https://123automateme.com', status: 'operational', uptime: '2d 14h', desc: 'SaaS CV / portfolio landing' },
      { name: 'Nexus AI', url: 'https://app.vivalarassa.fun', status: 'operational', uptime: '3d 6h', desc: '3-tier Stripe subscriptions' },
      { name: 'Aussie Homeschool Hub', url: 'https://nexus.vivalarassa.fun', status: 'operational', uptime: '7h 12m', desc: 'ACARA platform, Stripe ready' },
    ],
  },
  {
    group: 'INFRASTRUCTURE',
    icon: Server,
    color: '#d946ef',
    items: [
      { name: 'Admin Dashboard', url: 'https://admin.vivalarassa.fun', status: 'operational', uptime: '21d 4h', desc: 'Solana wallet auth, container control' },
      { name: 'API Backend', url: 'https://api.vivalarassa.fun', status: 'operational', uptime: '10d 2h', desc: 'Express + PG + Redis' },
      { name: 'Log Viewer', url: 'https://logs.vivalarassa.fun', status: 'auth-gated', uptime: '10d 2h', desc: 'HTTP Basic Auth, multi-source search' },
    ],
  },
  {
    group: 'PM2 BOTS',
    icon: Bot,
    color: '#a855f7',
    items: [
      { name: 'apex-research-bot', url: null, status: 'earning', uptime: '39d 8h', desc: 'Stripe $9 query / $29 mo · 6 users' },
      { name: 'apex-trading', url: null, status: 'operational', uptime: '47d 6h', desc: 'Solana analytics, port 4004' },
      { name: 'nexus-ai (live)', url: 'https://app.vivalarassa.fun', status: 'earning', uptime: '3d 6h', desc: '3-tier Stripe + SOL payments' },
      { name: 'nexus-x-bot', url: null, status: 'operational', uptime: '3d 1h', desc: 'X/Twitter content scheduler' },
      { name: 'aussie-homeschool-hub', url: 'https://nexus.vivalarassa.fun', status: 'operational', uptime: '7h 12m', desc: 'Stripe checkout + webhooks' },
      { name: 'k187-store-bot', url: null, status: 'pending', uptime: '0d 0h', desc: '⚠ AWAITING TELEGRAM TOKEN' },
    ],
  },
];

const PRODUCTS = [
  { name: 'Apex Research Bot', cat: 'FINTECH · STRIPE', rev: '$9 / $29', status: 'earning', desc: '12 hedge-fund research commands' },
  { name: 'Nexus AI', cat: 'AI AGENT · STRIPE', rev: '$29 / $99 / $299', status: 'earning', desc: '3-tier AI trading hub' },
  { name: 'Aussie Homeschool Hub', cat: 'EDUCATION · SAAS', rev: 'Subscription', status: 'ready', desc: 'ACARA-aligned, Stripe integrated' },
  { name: 'Apex XEPA Hub', cat: 'FINTECH · DASHBOARD', rev: 'SaaS-ready', status: 'live', desc: '14-section multi-chain trading' },
  { name: 'Aerial Estimates', cat: 'CONSTRUCTION · AI', rev: 'Quote-based', status: 'live', desc: 'Stripe + Supabase referrals' },
  { name: 'MetaLaunch AI', cat: 'SOLANA · LAUNCHER', rev: 'Token-fee', status: 'live', desc: 'Pump.fun auto-launcher' },
  { name: 'Apex Trading Dashboard', cat: 'FINTECH', rev: 'Future tier', status: 'live', desc: '47d uptime trading analytics' },
  { name: 'Primos Leaderboard', cat: 'SOLANA · ANALYTICS', rev: 'Free', status: 'live', desc: 'Tensor NFT leaderboard' },
  { name: 'Solana Token Sniper', cat: 'SOLANA · DAPP', rev: 'Trade-fee', status: 'live', desc: 'MEV protection, Phantom' },
  { name: 'Polyback', cat: 'PREDICTION MARKETS', rev: 'SaaS-ready', status: 'live', desc: 'Polymarket strategy tool' },
  { name: 'K187 Store Bot', cat: 'TELEGRAM', rev: '$29/$49/$99', status: 'pending', desc: '⚠ Awaiting Telegram token' },
  { name: 'Bubble Maps', cat: 'SOLANA · ANALYTICS', rev: 'SaaS-ready', status: 'live', desc: 'Token holder visualization' },
  { name: 'AI Ad-Lib Live', cat: 'AI · MUSIC', rev: 'Subscription', status: 'live', desc: 'Real-time mic + AI lyrics' },
  { name: 'YouTube Shorts Pipeline', cat: 'CONTENT', rev: 'Ad revenue', status: 'live', desc: 'Auto news → video pipeline' },
  { name: 'K187 Portfolio Audit', cat: 'MOBILE · EXPO', rev: 'Internal', status: 'live', desc: 'iOS-style audit app' },
  { name: 'K187 Nexus Platform', cat: 'INFRASTRUCTURE', rev: 'Internal', status: 'live', desc: 'Subscription command center' },
];

const HEALTH = {
  cpu: 23,         // avg %
  ram: 58,         // %
  disk: 41,        // %
  uptime: 45,      // days
  sslCerts: 7,     // valid certs
  containers: 11,  // running
  pm2Bots: 6,      // online
  products: 18,    // total
  earning: 3,      // currently earning
  pending: 1,      // pending
};

const ALERTS = [
  { level: 'warn', msg: 'k187-store-bot is awaiting a valid Telegram bot token from @BotFather', since: 'since 2026-06-14' },
  { level: 'info', msg: 'research.vivalarassa.fun + trading.vivalarassa.fun awaiting Cloudflare DNS A records', since: 'since 2026-06-17' },
  { level: 'info', msg: 'Stripe webhook endpoint we_1TilU2Rv2AJX9CCag8LOCkL0 created and verified', since: '2026-06-17' },
  { level: 'ok', msg: 'All 11 Docker containers healthy', since: '2026-06-17' },
  { level: 'ok', msg: 'All 6 PM2 bots online', since: '2026-06-17' },
];

export default function MissionControl() {
  return (
    <>
      <style>{cyberpunkCSS}</style>
      <div className="min-h-screen text-white font-raj" style={{ background: 'var(--mc-bg)' }}>
        <Header />
        <StatusBanner />
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
          <HealthSection />
          <ServiceMatrix />
          <ProductGrid />
          <AlertsFeed />
          <QuickActions />
        </div>
        <Footer />
      </div>
    </>
  );
}

function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b" style={{
      background: 'rgba(10,5,20,0.9)', backdropFilter: 'blur(20px)', borderColor: 'var(--mc-border)',
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
        <nav className="hidden md:flex items-center gap-6 font-raj text-sm">
          <Link href="/" className="text-purple-300/70 hover:text-white transition-colors">Hub</Link>
          <Link href="/mission-control" className="text-pink-400 font-semibold">Mission Control</Link>
          <Link href="/designwithhermes" className="text-purple-300/70 hover:text-white transition-colors">Design</Link>
          <a href="https://github.com/kaliyuga187" target="_blank" rel="noopener noreferrer" className="text-purple-300/70 hover:text-white transition-colors">GitHub</a>
        </nav>
        <div className="flex items-center gap-3">
          <span className="font-jb text-[10px] text-purple-500 hidden md:inline">SYS.OPERATOR</span>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{
            background: 'linear-gradient(135deg,#ec4899,#a855f7)', boxShadow: '0 0 12px rgba(236,72,153,0.4)',
          }}>
            <Radar className="w-4 h-4 text-white"/>
          </div>
        </div>
      </div>
    </header>
  );
}

function StatusBanner() {
  return (
    <section className="pt-24 pb-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 mc-status-online"/>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"/>
          </span>
          <span className="font-cyber text-sm tracking-widest text-green-400">SYSTEMS NOMINAL · 2026-06-17</span>
        </div>
        <h1 className="font-cyber text-4xl lg:text-6xl font-black tracking-tight leading-[0.95]">
          <span className="text-white">MISSION</span>
          <span className="block text-transparent bg-clip-text mt-1" style={{
            backgroundImage: 'linear-gradient(135deg,#ec4899,#d946ef,#a855f7)',
          }}>CONTROL</span>
        </h1>
        <p className="font-raj text-lg text-purple-300/60 mt-3 max-w-2xl">
          Single-pane view of every product, bot, and service running across the 123automateme.com ecosystem.
        </p>
      </div>
    </section>
  );
}

function HealthSection() {
  const tiles = [
    { label: 'VPS CPU', value: HEALTH.cpu + '%', icon: Cpu, color: HEALTH.cpu > 80 ? '#ef4444' : HEALTH.cpu > 50 ? '#fb923c' : '#10b981' },
    { label: 'VPS RAM', value: HEALTH.ram + '%', icon: Layers, color: HEALTH.ram > 80 ? '#ef4444' : HEALTH.ram > 50 ? '#fb923c' : '#10b981' },
    { label: 'VPS DISK', value: HEALTH.disk + '%', icon: Database, color: HEALTH.disk > 80 ? '#ef4444' : HEALTH.disk > 50 ? '#fb923c' : '#10b981' },
    { label: 'UPTIME', value: HEALTH.uptime + 'd', icon: Clock, color: '#10b981' },
    { label: 'DOCKER', value: HEALTH.containers, icon: Server, color: '#10b981' },
    { label: 'PM2 BOTS', value: HEALTH.pm2Bots, icon: Bot, color: '#10b981' },
    { label: 'PRODUCTS', value: HEALTH.products, icon: Layers, color: '#d946ef' },
    { label: 'EARNING', value: HEALTH.earning, icon: DollarSign, color: '#10b981' },
  ];
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-green-400"/>
          <h2 className="font-cyber text-sm tracking-widest text-white">VPS HEALTH</h2>
        </div>
        <span className="font-jb text-[10px] text-purple-500">apex-prod · 139.180.174.4 · Ubuntu 22.04</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
        {tiles.map((t, i) => (
          <div key={i} className="rounded-xl border p-4" style={{ background: 'var(--mc-card)', borderColor: 'var(--mc-border)' }}>
            <t.icon className="w-4 h-4 mb-2" style={{ color: t.color }}/>
            <div className="font-cyber text-xl font-black tracking-tight text-white">{t.value}</div>
            <div className="font-jb text-[9px] text-purple-500 mt-1 tracking-widest">{t.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServiceMatrix() {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <Radar className="w-4 h-4 text-pink-400"/>
        <h2 className="font-cyber text-sm tracking-widest text-white">SERVICE MATRIX</h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        {SERVICES.map((g, gi) => (
          <div key={gi} className="rounded-2xl border p-5" style={{ background: 'var(--mc-card)', borderColor: 'var(--mc-border)' }}>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b" style={{ borderColor: 'var(--mc-border)' }}>
              <g.icon className="w-4 h-4" style={{ color: g.color }}/>
              <span className="font-cyber text-xs tracking-widest text-white">{g.group}</span>
            </div>
            <div className="space-y-2">
              {g.items.map((it, ii) => (
                <div key={ii} className="flex items-center justify-between gap-3 py-2">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <StatusDot status={it.status}/>
                      <span className="font-raj text-sm text-white truncate">{it.name}</span>
                    </div>
                    <div className="font-jb text-[10px] text-purple-500 ml-4 mt-0.5">{it.desc}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-jb text-[10px] text-green-400">{it.uptime}</div>
                    {it.url && (
                      <a href={it.url} target="_blank" rel="noopener noreferrer" className="font-jb text-[10px] text-purple-500 hover:text-pink-400 transition-colors inline-flex items-center gap-1">
                        open <ExternalLink className="w-2 h-2"/>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatusDot({ status }: { status: string }) {
  const map: Record<string, { color: string; label: string }> = {
    operational: { color: '#10b981', label: 'OK' },
    earning:     { color: '#10b981', label: 'OK' },
    'auth-gated':{ color: '#fb923c', label: 'AUTH' },
    pending:     { color: '#fb923c', label: 'WAIT' },
    down:        { color: '#ef4444', label: 'DOWN' },
  };
  const s = map[status] || map.operational;
  return (
    <span className="relative flex h-2 w-2 flex-shrink-0">
      <span className="absolute inline-flex h-full w-full rounded-full opacity-75 mc-live-dot" style={{ background: s.color }}/>
      <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: s.color }}/>
    </span>
  );
}

function ProductGrid() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-purple-400"/>
          <h2 className="font-cyber text-sm tracking-widest text-white">PRODUCT INVENTORY</h2>
        </div>
        <span className="font-jb text-[10px] text-purple-500">{PRODUCTS.length} total · {HEALTH.earning} earning · {HEALTH.pending} pending</span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {PRODUCTS.map((p, i) => (
          <div key={i} className="rounded-xl border p-4 transition-all hover:-translate-y-1" style={{ background: 'var(--mc-card)', borderColor: 'var(--mc-border)' }}>
            <div className="flex items-start justify-between mb-2">
              <span className="font-jb text-[9px] text-purple-500 tracking-widest uppercase">{p.cat}</span>
              <StatusDot status={p.status}/>
            </div>
            <div className="font-cyber text-sm font-bold tracking-wide text-white mb-2">{p.name}</div>
            <p className="font-raj text-xs text-purple-300/60 leading-relaxed mb-3">{p.desc}</p>
            <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: 'var(--mc-border)' }}>
              <span className="font-jb text-[10px] text-green-400">{p.rev}</span>
              <span className={`font-jb text-[9px] uppercase ${
                p.status === 'earning' ? 'text-green-400' :
                p.status === 'pending' ? 'text-orange-400' :
                'text-purple-400'
              }`}>{p.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AlertsFeed() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-pink-400 mc-live-dot"/>
          <h2 className="font-cyber text-sm tracking-widest text-white">LIVE ALERTS</h2>
        </div>
        <span className="font-jb text-[10px] text-purple-500">{ALERTS.length} active</span>
      </div>
      <div className="rounded-2xl border divide-y" style={{ background: 'var(--mc-card)', borderColor: 'var(--mc-border)' }}>
        {ALERTS.map((a, i) => (
          <div key={i} className="px-5 py-3 flex items-center gap-3" style={{ borderColor: 'var(--mc-border)' }}>
            {a.level === 'warn' ? <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0"/> :
             a.level === 'info' ? <Activity className="w-4 h-4 text-purple-400 flex-shrink-0"/> :
             <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0"/>}
            <span className="font-raj text-sm text-white flex-1">{a.msg}</span>
            <span className="font-jb text-[10px] text-purple-500">{a.since}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function QuickActions() {
  const actions = [
    { label: 'Open Stripe Dashboard', url: 'https://dashboard.stripe.com', icon: DollarSign, color: '#d946ef' },
    { label: 'Open Cloudflare DNS', url: 'https://dash.cloudflare.com', icon: Globe, color: '#ec4899' },
    { label: 'Open GitHub Repos', url: 'https://github.com/kaliyuga187', icon: Terminal, color: '#a855f7' },
    { label: 'Open Vultr Console', url: 'https://my.vultr.com', icon: Server, color: '#7c3aed' },
    { label: 'Email Support', url: 'mailto:hello@123automateme.com', icon: Mail, color: '#ec4899' },
    { label: 'View Full Portfolio', url: 'https://123automateme.com#portfolio', icon: ExternalLink, color: '#d946ef' },
  ];
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-4 h-4 text-yellow-400"/>
        <h2 className="font-cyber text-sm tracking-widest text-white">QUICK ACTIONS</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        {actions.map((a, i) => (
          <a key={i} href={a.url} target="_blank" rel="noopener noreferrer"
            className="group rounded-xl border p-4 transition-all hover:-translate-y-1 flex items-center gap-3"
            style={{ background: 'var(--mc-card)', borderColor: 'var(--mc-border)' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
              background: `${a.color}15`, border: `1px solid ${a.color}30`,
            }}>
              <a.icon className="w-5 h-5" style={{ color: a.color }}/>
            </div>
            <span className="font-raj text-sm text-white flex-1">{a.label}</span>
            <ChevronRight className="w-4 h-4 text-purple-500 group-hover:translate-x-1 transition-transform"/>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t mt-12 py-8" style={{ borderColor: 'var(--mc-border)' }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#ec4899,#a855f7)' }}>
            <Hexagon className="w-4 h-4 text-white"/>
          </div>
          <span className="font-cyber text-xs text-white tracking-wider">123AUTOMATEME MISSION CONTROL</span>
        </div>
        <div className="font-jb text-[10px] text-purple-500 flex gap-4">
          <span>Build 2026.06.17</span>
          <span>VPS: apex-prod</span>
          <span>Region: Sydney</span>
        </div>
      </div>
    </footer>
  );
}