import Link from 'next/link';
import {
  ArrowRight, Check, Plus, Minus,
  Sparkles, Cpu, LineChart, Rocket, ShieldCheck, Bot, Code2,
  Workflow, Mail, Phone, ChevronRight, Zap,
  Activity, Globe, Clock, Star, Gamepad2, Hexagon,
} from 'lucide-react';

/* ════════════════════════════════════════════════════════════════
   123automateme.com — Cyberpunk Legends Redesign (2026)
   Dark purple/black + neon pink/magenta + electric purple
   Sections:
     1. Hero (dramatic, card-game aesthetic)
     2. Built With Strip (tech credibility)
     3. Stats Row
     4. Products Portfolio (bento grid)
     5. Process (zig-zag, 4 steps)
     6. Featured Product (KAIO'S CARDS)
     7. Services (what we build)
     8. Pull Quote
     9. FAQ
    10. Final CTA + Contact
════════════════════════════════════════════════════════════════ */

/* ─── CSS tokens injected inline for zero-config ─── */
const cyberpunkCSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
:root {
  --cp-bg: #0a0514;
  --cp-bg-card: rgba(15, 8, 30, 0.8);
  --cp-border: rgba(168, 85, 247, 0.15);
  --cp-border-hover: rgba(236, 72, 153, 0.4);
  --cp-pink: #ec4899;
  --cp-magenta: #d946ef;
  --cp-purple: #a855f7;
  --cp-electric: #7c3aed;
  --cp-cyan-glow: rgba(168, 85, 247, 0.3);
  --cp-pink-glow: rgba(236, 72, 153, 0.3);
}
.font-cyber { font-family: 'Orbitron', sans-serif; }
.font-raj { font-family: 'Rajdhani', sans-serif; }
.font-jb { font-family: 'JetBrains Mono', monospace; }
@keyframes hex-drift {
  0%,100% { transform: translateY(0) rotate(0deg); opacity: 0.08; }
  50% { transform: translateY(-12px) rotate(3deg); opacity: 0.15; }
}
@keyframes neon-pulse {
  0%,100% { box-shadow: 0 0 20px var(--cp-pink-glow), 0 0 40px rgba(236,72,153,0.1); }
  50% { box-shadow: 0 0 30px var(--cp-pink-glow), 0 0 60px rgba(236,72,153,0.2); }
}
@keyframes glow-line {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}
@keyframes cyber-card-in {
  from { opacity: 0; transform: translateY(30px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.hex-bg-line {
  animation: hex-drift 8s ease-in-out infinite;
}
.neon-border {
  animation: neon-pulse 3s ease-in-out infinite;
}
.glow-underline {
  background: linear-gradient(90deg, var(--cp-pink), var(--cp-magenta), var(--cp-purple));
  background-size: 200% 100%;
  animation: glow-line 3s linear infinite;
}
.cyber-card { animation: cyber-card-in 0.6s ease-out both; }
`;

export default function HomePage() {
  return (
    <>
      <style>{cyberpunkCSS}</style>
      <div className="min-h-screen text-white" style={{ background: 'var(--cp-bg)' }}>
        <Header />
        <Hero />
        <TechStrip />
        <StatsRow />
        <PortfolioGrid />
        <ProcessSection />
        <FeaturedProduct />
        <ServicesSection />
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
      background: 'rgba(10, 5, 20, 0.85)',
      backdropFilter: 'blur(20px)',
      borderColor: 'var(--cp-border)',
    }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
            background: 'linear-gradient(135deg, #ec4899, #d946ef, #a855f7)',
            boxShadow: '0 0 20px rgba(236,72,153,0.3)',
          }}>
            <Hexagon className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-cyber font-bold text-lg tracking-wider text-white">123AUTO</span>
            <span className="font-raj text-xs text-purple-400 -mt-1 tracking-widest">ME.COM</span>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Portfolio', 'Products', 'Services', 'Process', 'FAQ'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-raj text-sm text-purple-300/80 hover:text-white transition-colors tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:flex px-4 py-2 rounded-lg border font-raj text-sm tracking-wide text-purple-300 hover:text-white hover:border-pink-500/50 transition-all"
            style={{ borderColor: 'var(--cp-border)' }}
          >
            CONTACT
          </a>
          <a
            href="#portfolio"
            className="px-5 py-2.5 rounded-lg font-raj text-sm font-bold tracking-wide text-white transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #ec4899, #d946ef)',
              boxShadow: '0 0 20px rgba(236,72,153,0.4)',
            }}
          >
            EXPLORE
          </a>
        </div>
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. HERO — dramatic cyberpunk card-game aesthetic
═══════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Hex grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 800 600">
          <defs>
            <pattern id="hexGrid" width="60" height="52" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon points="30,1 55,15 55,37 30,51 5,37 5,15" fill="none" stroke="#a855f7" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexGrid)"/>
        </svg>
        {/* Radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full" style={{
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.12) 0%, rgba(236,72,153,0.06) 40%, transparent 70%)',
        }}/>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center w-full">
        {/* LEFT: Copy */}
        <div className="space-y-8">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border" style={{
            background: 'rgba(168,85,247,0.08)',
            borderColor: 'rgba(168,85,247,0.2)',
          }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"/>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"/>
            </span>
            <span className="font-jb text-xs text-purple-300 tracking-wide">
              6 LIVE PRODUCTS ● ACCEPTING CLIENTS
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-cyber text-5xl lg:text-7xl font-black tracking-tight leading-[0.9]">
            <span className="block text-white">AUTOMATE</span>
            <span className="block text-purple-400 mt-2">EVERYTHING</span>
            <span className="block relative mt-2">
              <span className="text-transparent bg-clip-text" style={{
                backgroundImage: 'linear-gradient(135deg, #ec4899, #d946ef, #a855f7)',
              }}>
                SHIP FASTER
              </span>
              {/* Glow underline */}
              <div className="mt-2 h-1 w-48 rounded-full glow-underline opacity-60"/>
            </span>
          </h1>

          {/* Lede */}
          <p className="font-raj text-xl text-purple-200/70 leading-relaxed max-w-xl">
            Full-stack SaaS products, trading bots, AI agents, and custom automation.
            Built by a solo developer, deployed to production, live and earning.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="group px-8 py-4 rounded-xl font-raj font-bold text-lg tracking-wide transition-all hover:scale-105 flex items-center gap-3"
              style={{
                background: 'linear-gradient(135deg, #ec4899, #d946ef)',
                boxShadow: '0 0 30px rgba(236,72,153,0.4)',
              }}
            >
              VIEW PRODUCTS
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
            </a>
            <a
              href="#process"
              className="px-8 py-4 rounded-xl border font-raj font-bold text-lg tracking-wide text-purple-300 hover:text-white hover:border-pink-500/50 transition-all"
              style={{ borderColor: 'var(--cp-border)' }}
            >
              HOW IT WORKS
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap gap-6 font-jb text-xs text-purple-400/60">
            <span>● Since 2019</span>
            <span>● 32+ Projects Shipped</span>
            <span>● Stripe-integrated</span>
            <span>● 99.9% Uptime</span>
          </div>
        </div>

        {/* RIGHT: Floating product cards (cyberpunk card-game style) */}
        <div className="relative hidden lg:block">
          {/* Background hex glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]"
            style={{
              background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 60%)',
            }}
          />

          {/* Card 1 - KAIO'S CARDS (front, biggest) */}
          <div className="relative z-30 w-[280px] mx-auto" style={{
            animation: 'hex-drift 6s ease-in-out infinite',
          }}>
            <div className="rounded-2xl border p-5 backdrop-blur-sm neon-border" style={{
              background: 'linear-gradient(160deg, rgba(236,72,153,0.15), rgba(168,85,247,0.1))',
              borderColor: 'rgba(236,72,153,0.3)',
            }}>
              {/* Card header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-pink-400"/>
                  <span className="font-cyber text-xs tracking-wider text-pink-300">KAIO&apos;S CARDS</span>
                </div>
                <span className="font-jb text-[10px] text-purple-500">LIVE</span>
              </div>

              {/* Product visual */}
              <div className="rounded-xl p-4 mb-4" style={{
                background: 'rgba(10,5,20,0.6)',
                border: '1px solid rgba(168,85,247,0.1)',
              }}>
                <div className="font-cyber text-xs text-purple-400 mb-2">CHARIZARD EX</div>
                <div className="font-cyber text-2xl text-white mb-1">$619.22</div>
                <div className="flex items-center gap-2">
                  <Activity className="w-3 h-3 text-green-400"/>
                  <span className="font-jb text-xs text-green-400">+12.4%</span>
                </div>
              </div>

              {/* Card stats */}
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center">
                  <div className="font-cyber text-sm text-white">15K</div>
                  <div className="font-jb text-[10px] text-purple-500">CARDS</div>
                </div>
                <div className="text-center">
                  <div className="font-cyber text-sm text-white">5min</div>
                  <div className="font-jb text-[10px] text-purple-500">SCAN</div>
                </div>
                <div className="text-center">
                  <div className="font-cyber text-sm text-white">24/7</div>
                  <div className="font-jb text-[10px] text-purple-500">LIVE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - APEX TRADING (behind left) */}
          <div className="absolute top-8 -left-4 z-20 w-[200px] opacity-60 rotate-[-6deg]" style={{
            animation: 'hex-drift 7s ease-in-out infinite',
            animationDelay: '1s',
          }}>
            <div className="rounded-xl border p-4" style={{
              background: 'linear-gradient(160deg, rgba(168,85,247,0.12), rgba(124,58,237,0.08))',
              borderColor: 'rgba(168,85,247,0.2)',
            }}>
              <div className="flex items-center gap-2 mb-3">
                <LineChart className="w-4 h-4 text-purple-400"/>
                <span className="font-cyber text-[10px] tracking-wider text-purple-300">APEX TRADING</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 rounded-full bg-purple-500/20"><div className="h-full w-3/4 rounded-full bg-purple-500/60"/></div>
                <div className="h-2 rounded-full bg-pink-500/20"><div className="h-full w-1/2 rounded-full bg-pink-500/60"/></div>
                <div className="h-2 rounded-full bg-purple-500/20"><div className="h-full w-5/6 rounded-full bg-purple-500/60"/></div>
              </div>
              <div className="font-jb text-[10px] text-purple-500 mt-3">SOLANA · PORT 4004</div>
            </div>
          </div>

          {/* Card 3 - NEXUS AI (behind right) */}
          <div className="absolute top-16 -right-4 z-10 w-[200px] opacity-50 rotate-[4deg]" style={{
            animation: 'hex-drift 9s ease-in-out infinite',
            animationDelay: '2s',
          }}>
            <div className="rounded-xl border p-4" style={{
              background: 'linear-gradient(160deg, rgba(217,70,239,0.12), rgba(168,85,247,0.08))',
              borderColor: 'rgba(217,70,239,0.2)',
            }}>
              <div className="flex items-center gap-2 mb-3">
                <Bot className="w-4 h-4 text-fuchsia-400"/>
                <span className="font-cyber text-[10px] tracking-wider text-fuchsia-300">NEXUS AI</span>
              </div>
              <div className="font-jb text-xs text-white mb-2">3 Tiers Live</div>
              <div className="flex gap-2">
                <span className="px-2 py-1 rounded text-[9px] font-jb bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">$29</span>
                <span className="px-2 py-1 rounded text-[9px] font-jb bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">$99</span>
                <span className="px-2 py-1 rounded text-[9px] font-jb bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">$299</span>
              </div>
              <div className="font-jb text-[10px] text-purple-500 mt-3">STRIPE ● SOL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. TECH STRIP
═══════════════════════════════════════════════════════════════ */
function TechStrip() {
  const techs = ['Next.js 15', 'TypeScript', 'Prisma', 'SQLite', 'Docker', 'Stripe', 'Solana'];
  return (
    <section className="py-12 border-y" style={{
      background: 'rgba(15,8,30,0.5)',
      borderColor: 'var(--cp-border)',
    }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          <span className="font-jb text-xs text-purple-500 uppercase tracking-widest">Built with</span>
          {techs.map(t => (
            <div key={t} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-pink-500/60"/>
              <span className="font-raj text-sm text-purple-300/70">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4. STATS ROW
═══════════════════════════════════════════════════════════════ */
function StatsRow() {
  const stats = [
    { value: '32+', label: 'Projects', icon: Cpu },
    { value: '6', label: 'Live Products', icon: Rocket },
    { value: '45d+', label: 'Avg Uptime', icon: Clock },
    { value: '0', label: 'Secret Leaks', icon: ShieldCheck },
  ];
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center cyber-card" style={{ animationDelay: `${i * 100}ms` }}>
              <s.icon className="w-6 h-6 mx-auto mb-3 text-pink-500/60"/>
              <div className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-transparent bg-clip-text mb-2"
                style={{ backgroundImage: 'linear-gradient(135deg, #ec4899, #a855f7)' }}>
                {s.value}
              </div>
              <div className="font-raj text-sm text-purple-300/70 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5. PORTFOLIO GRID — All products organized
═══════════════════════════════════════════════════════════════ */
function PortfolioGrid() {
  const products = [
    {
      title: "KAIO'S CARDS",
      cat: 'COLLECTIBLES',
      desc: 'Pokémon TCG price lookup & trade analyzer. 15K+ cards indexed with real-time TCGplayer + Cardmarket data. Free to use.',
      status: 'LIVE',
      url: 'https://cards.123automateme.com',
      icon: Gamepad2,
      color: '#ec4899',
      tags: ['Free', 'API', 'Scanner'],
    },
    {
      title: 'APEX TRADING BOT',
      cat: 'FINTECH',
      desc: 'Solana trading analytics & execution platform. WebSocket data feeds, real-time market analysis, automated strategies.',
      status: 'LIVE',
      url: 'https://app.vivalarassa.fun',
      icon: LineChart,
      color: '#a855f7',
      tags: ['Solana', 'Real-time', 'WebSocket'],
    },
    {
      title: 'APEX RESEARCH BOT',
      cat: 'FINTECH',
      desc: 'AI-powered crypto research assistant. Stripe-gated access: $9 single query, $29/mo subscription. 6 active users.',
      status: 'EARNING',
      url: '#',
      icon: Bot,
      color: '#d946ef',
      tags: ['Stripe', 'AI', 'Subscription'],
    },
    {
      title: 'NEXUS AI',
      cat: 'AI AGENT',
      desc: 'Multi-tier AI trading hub. Starter/Pro/Elite subscriptions via Stripe + SOL payments. Community dashboard.',
      status: 'EARNING',
      url: 'https://nexus.vivalarassa.fun',
      icon: Cpu,
      color: '#7c3aed',
      tags: ['3 Tiers', 'Stripe', 'SOL'],
    },
    {
      title: 'SOLANA ANALYTICS',
      cat: 'RESEARCH',
      desc: 'Read-only Solana blockchain research tool. Bonding curve analysis, wallet tracking, pool scanning, market insights.',
      status: 'LIVE',
      url: '#',
      icon: Activity,
      color: '#ec4899',
      tags: ['Read-only', 'On-chain', 'CLI'],
    },
    {
      title: 'DESIGN WITH HERMES',
      cat: 'AGENCY',
      desc: 'Full-stack web design & development consultancy. Landing pages, SaaS products, custom automation. Client-facing brand.',
      status: 'LIVE',
      url: '/designwithhermes',
      icon: Sparkles,
      color: '#a855f7',
      tags: ['Consulting', 'Next.js', 'Design'],
    },
  ];

  return (
    <section id="portfolio" className="py-32 border-t" style={{ borderColor: 'var(--cp-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{
            background: 'rgba(236,72,153,0.08)',
            borderColor: 'rgba(236,72,153,0.2)',
          }}>
            <Gamepad2 className="w-4 h-4 text-pink-400"/>
            <span className="font-jb text-xs text-pink-300 tracking-wide">PORTFOLIO</span>
          </div>
          <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            PRODUCTS & PROJECTS
          </h2>
          <p className="font-raj text-xl text-purple-300/60 max-w-2xl mx-auto">
            Six live products. Built, deployed, and maintained by a solo developer.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 cyber-card"
              style={{
                background: 'var(--cp-bg-card)',
                borderColor: 'var(--cp-border)',
                animationDelay: `${i * 80}ms`,
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(236,72,153,0.4)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--cp-border)')}
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-jb text-[10px] text-purple-500 tracking-widest uppercase">{p.cat}</span>
                <span className={`px-2 py-1 rounded-full text-[10px] font-jb border ${
                  p.status === 'EARNING'
                    ? 'bg-green-500/10 text-green-400 border-green-500/30'
                    : 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                }`}>
                  {p.status}
                </span>
              </div>

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
                  background: `${p.color}15`,
                  border: `1px solid ${p.color}30`,
                }}>
                  <p.icon className="w-5 h-5" style={{ color: p.color }}/>
                </div>
                <h3 className="font-cyber text-sm font-bold tracking-wide text-white">{p.title}</h3>
              </div>

              {/* Description */}
              <p className="font-raj text-sm text-purple-300/60 leading-relaxed mb-5">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 rounded-md font-jb text-[10px] border"
                    style={{
                      background: 'rgba(168,85,247,0.06)',
                      borderColor: 'rgba(168,85,247,0.15)',
                      color: 'rgba(192,132,252,0.7)',
                    }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              {p.url !== '#' && (
                <a href={p.url} target={p.url.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-raj text-sm text-pink-400 hover:text-pink-300 transition-colors group/link">
                  Explore
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"/>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6. PROCESS — zig-zag
═══════════════════════════════════════════════════════════════ */
function ProcessSection() {
  const steps = [
    {
      step: '01', title: 'DISCOVERY',
      desc: 'We map your workflow, identify automation opportunities, and scope the build. No vague promises — just concrete deliverables.',
      visual: (
        <div className="space-y-3">
          {['Stakeholder interview', 'Workflow mapping', 'Scope document', 'Timeline + milestones'].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-2 rounded-lg" style={{
              background: i === 1 ? 'rgba(236,72,153,0.08)' : 'rgba(15,8,30,0.5)',
              border: `1px solid ${i === 1 ? 'rgba(236,72,153,0.3)' : 'var(--cp-border)'}`,
            }}>
              <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-pink-500' : 'bg-purple-500/40'}`}/>
              <span className="font-raj text-sm text-purple-200/70">{item}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      step: '02', title: 'BUILD',
      desc: 'Sprint-based development. Next.js frontend, Prisma database, Docker infrastructure. Every line tested, every deploy validated.',
      visual: (
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-jb text-[10px] text-purple-500">BUILD PIPELINE</span>
          </div>
          {['pnpm install ✓', 'prisma db:push ✓', 'next build ✓', 'docker build ✓'].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg" style={{
              background: 'rgba(15,8,30,0.5)', border: '1px solid var(--cp-border)',
            }}>
              <Check className="w-3 h-3 text-green-400"/>
              <span className="font-jb text-xs text-purple-200/60">{item}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      step: '03', title: 'DEPLOY',
      desc: 'Push to production on your VPS. SSL certificates, DNS, nginx reverse proxy, health checks — all automated and verified.',
      visual: (
        <div className="space-y-3">
          <div className="px-4 py-3 rounded-lg flex items-center gap-3" style={{
            background: 'rgba(15,8,30,0.5)', border: '1px solid var(--cp-border)',
          }}>
            <Globe className="w-4 h-4 text-pink-400"/>
            <div>
              <div className="font-jb text-xs text-white">https://yourapp.com</div>
              <div className="font-jb text-[10px] text-green-400">HTTP/2 200 · SSL verified</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="px-3 py-2 rounded-lg text-center" style={{
              background: 'rgba(236,72,153,0.08)', border: '1px solid rgba(236,72,153,0.2)',
            }}>
              <div className="font-cyber text-sm text-white">99.9%</div>
              <div className="font-jb text-[10px] text-purple-500">UPTIME</div>
            </div>
            <div className="px-3 py-2 rounded-lg text-center" style={{
              background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)',
            }}>
              <div className="font-cyber text-sm text-white">{'<100ms'}</div>
              <div className="font-jb text-[10px] text-purple-500">LATENCY</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      step: '04', title: 'MONETIZE',
      desc: 'Integrate Stripe payments, set up subscription tiers, configure webhooks. Your product starts earning from day one.',
      visual: (
        <div className="space-y-3">
          <div className="px-4 py-3 rounded-lg" style={{
            background: 'rgba(15,8,30,0.5)', border: '1px solid var(--cp-border)',
          }}>
            <div className="font-jb text-[10px] text-purple-500 mb-2">STRIPE CHECKOUT</div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                <Zap className="w-4 h-4 text-green-400"/>
              </div>
              <div>
                <div className="font-raj text-sm text-white">Payment received</div>
                <div className="font-jb text-xs text-green-400">$29.00 AUD · Monthly</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {['$9', '$29', '$299'].map((p, i) => (
              <div key={i} className="px-3 py-2 rounded-lg text-center" style={{
                background: 'rgba(236,72,153,0.06)', border: '1px solid rgba(236,72,153,0.15)',
              }}>
                <div className="font-cyber text-sm text-white">{p}</div>
                <div className="font-jb text-[10px] text-purple-500">/mo</div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="process" className="py-32 border-t" style={{ borderColor: 'var(--cp-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{
            background: 'rgba(168,85,247,0.08)',
            borderColor: 'rgba(168,85,247,0.2)',
          }}>
            <Workflow className="w-4 h-4 text-purple-400"/>
            <span className="font-jb text-xs text-purple-300 tracking-wide">PROCESS</span>
          </div>
          <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            FROM IDEA TO INCOME
          </h2>
          <p className="font-raj text-xl text-purple-300/60 max-w-xl mx-auto">
            Four steps. No bloated timelines. Ship fast, ship clean.
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((s, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="font-cyber text-3xl font-black text-transparent bg-clip-text"
                    style={{ backgroundImage: 'linear-gradient(135deg, #ec4899, #a855f7)' }}>
                    {s.step}
                  </span>
                  <div className="w-12 h-px bg-gradient-to-r from-pink-500 to-transparent"/>
                  <span className="font-cyber text-sm text-purple-400 tracking-widest">{s.title}</span>
                </div>
                <h3 className="font-cyber text-2xl font-bold tracking-tight text-white mb-4">{s.title}</h3>
                <p className="font-raj text-lg text-purple-300/60 leading-relaxed">{s.desc}</p>
              </div>
              <div className={`rounded-2xl border p-6 ${i % 2 === 1 ? 'lg:col-start-1' : ''}`} style={{
                background: 'var(--cp-bg-card)',
                borderColor: 'var(--cp-border)',
              }}>
                {s.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   7. FEATURED PRODUCT — KAIO'S CARDS
═══════════════════════════════════════════════════════════════ */
function FeaturedProduct() {
  return (
    <section id="products" className="py-32 border-t" style={{ borderColor: 'var(--cp-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border" style={{
              background: 'rgba(236,72,153,0.08)',
              borderColor: 'rgba(236,72,153,0.2)',
            }}>
              <Star className="w-4 h-4 text-pink-400"/>
              <span className="font-jb text-xs text-pink-300 tracking-wide">FEATURED PRODUCT</span>
            </div>

            <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white">
              KAIO&apos;S CARDS
            </h2>
            <p className="font-raj text-xl text-purple-300/60 leading-relaxed">
              Free Pokémon TCG price lookup with real-time TCGplayer + Cardmarket data.
              Search 15,000+ cards, scan booster packs, and analyze trades — all in your browser.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Cards Indexed', value: '15,000+' },
                { label: 'Price Sources', value: '2 (US + EU)' },
                { label: 'Refresh Rate', value: 'Every 24h' },
                { label: 'Account Needed', value: 'None (Free)' },
              ].map((m, i) => (
                <div key={i} className="rounded-xl border p-4" style={{
                  background: 'rgba(15,8,30,0.5)',
                  borderColor: 'var(--cp-border)',
                }}>
                  <div className="font-cyber text-lg text-white">{m.value}</div>
                  <div className="font-jb text-[10px] text-purple-500 mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="https://cards.123automateme.com" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-raj font-bold tracking-wide text-white transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #ec4899, #d946ef)',
                  boxShadow: '0 0 20px rgba(236,72,153,0.3)',
                }}>
                TRY IT FREE →
              </a>
              <a href="/kaios-cards" className="px-6 py-3 rounded-xl border font-raj font-bold tracking-wide text-purple-300 hover:text-white hover:border-pink-500/50 transition-all"
                style={{ borderColor: 'var(--cp-border)' }}>
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Right: Product mock */}
          <div className="relative">
            <div className="rounded-2xl border p-6 neon-border" style={{
              background: 'var(--cp-bg-card)',
              borderColor: 'rgba(236,72,153,0.3)',
            }}>
              {/* Browser chrome */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b" style={{ borderColor: 'var(--cp-border)' }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"/>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"/>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"/>
                </div>
                <div className="flex-1 px-3 py-1.5 rounded-lg font-jb text-[10px] text-purple-400" style={{
                  background: 'rgba(10,5,20,0.5)',
                }}>
                  cards.123automateme.com
                </div>
              </div>

              {/* Search */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl mb-4" style={{
                background: 'rgba(10,5,20,0.5)',
                border: '1px solid var(--cp-border)',
              }}>
                <span className="text-purple-400">⌕</span>
                <span className="font-raj text-sm text-purple-200/60 flex-1">Charizard ex</span>
                <kbd className="px-2 py-0.5 rounded font-jb text-[10px] text-purple-500" style={{
                  background: 'rgba(15,8,30,0.8)',
                }}>⌘K</kbd>
              </div>

              {/* Card result */}
              <div className="rounded-xl p-4 mb-4" style={{
                background: 'linear-gradient(135deg, rgba(236,72,153,0.08), rgba(168,85,247,0.06))',
                border: '1px solid rgba(236,72,153,0.2)',
              }}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-jb text-[10px] text-pink-400">sv6 · 006/165</div>
                    <div className="font-cyber text-lg font-bold text-white">Charizard ex</div>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg" style={{
                    background: 'rgba(236,72,153,0.1)',
                    border: '1px solid rgba(236,72,153,0.3)',
                  }}>
                    <span className="font-cyber text-sm text-pink-300">$619.22</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-3 border-t" style={{ borderColor: 'var(--cp-border)' }}>
                  <div>
                    <div className="font-jb text-[10px] text-purple-500">TCGplayer</div>
                    <div className="font-raj text-lg font-semibold text-green-400">$619.22</div>
                  </div>
                  <div>
                    <div className="font-jb text-[10px] text-purple-500">Cardmarket</div>
                    <div className="font-raj text-lg font-semibold text-purple-400">€580.00</div>
                  </div>
                </div>
              </div>

              {/* Trade analyzer preview */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{
                background: 'rgba(16,185,129,0.08)',
                border: '1px solid rgba(16,185,129,0.2)',
              }}>
                <Activity className="w-4 h-4 text-green-400"/>
                <span className="font-jb text-xs text-green-400">+12.4% this month · Strong buy signal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   8. SERVICES
═══════════════════════════════════════════════════════════════ */
function ServicesSection() {
  const services = [
    {
      icon: Code2, title: 'SAAS PRODUCTS',
      desc: 'Full-stack Next.js applications with Stripe payments, user auth, and automated deployments.',
      color: '#ec4899',
    },
    {
      icon: Bot, title: 'AI AGENTS',
      desc: 'Custom AI bots for research, trading, and customer support. Telegram, Discord, and web interfaces.',
      color: '#d946ef',
    },
    {
      icon: LineChart, title: 'TRADING BOTS',
      desc: 'Solana analytics, curve monitoring, and market intelligence dashboards with subscription access.',
      color: '#a855f7',
    },
    {
      icon: Workflow, title: 'AUTOMATION',
      desc: 'Custom workflow automation, data pipelines, and business process optimization.',
      color: '#7c3aed',
    },
  ];

  return (
    <section id="services" className="py-32 border-t" style={{ borderColor: 'var(--cp-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{
            background: 'rgba(168,85,247,0.08)',
            borderColor: 'rgba(168,85,247,0.2)',
          }}>
            <Zap className="w-4 h-4 text-purple-400"/>
            <span className="font-jb text-xs text-purple-300 tracking-wide">SERVICES</span>
          </div>
          <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            WHAT I BUILD
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 cyber-card"
              style={{
                background: 'var(--cp-bg-card)',
                borderColor: 'var(--cp-border)',
                animationDelay: `${i * 100}ms`,
              }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{
                background: `${s.color}12`,
                border: `1px solid ${s.color}25`,
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
   9. PULL QUOTE
═══════════════════════════════════════════════════════════════ */
function PullQuote() {
  return (
    <section className="py-32 border-t" style={{ borderColor: 'var(--cp-border)' }}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <Hexagon className="w-16 h-16 mx-auto mb-8 text-pink-500/20"/>
        <blockquote className="font-cyber text-3xl lg:text-5xl font-black tracking-tight leading-tight mb-8 text-transparent bg-clip-text"
          style={{ backgroundImage: 'linear-gradient(135deg, #ec4899, #d946ef, #a855f7)' }}>
          &quot;Stop planning. Start shipping.
          <br/>Income follows execution.&quot;
        </blockquote>
        <div className="font-raj text-lg text-purple-300/50">
          <div className="font-semibold text-purple-200/80 mb-1">123 Automate Me</div>
          <div>— Solo dev, multiple income streams</div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   10. FAQ
═══════════════════════════════════════════════════════════════ */
function FAQSection() {
  const faqs = [
    { q: 'Are you a solo developer or an agency?', a: 'Solo developer. I build, deploy, and maintain everything myself. That means lower overhead, no middleman markup, and direct communication from idea to launch.' },
    { q: 'What is your typical project timeline?', a: 'Discovery + build + deploy for a SaaS product is typically 2–4 weeks. Landing pages can be live within 3–5 days. Trading bots and AI agents depend on complexity but I ship working POCs within the first week.' },
    { q: 'How do payments work?', a: 'All products with subscription access use Stripe — you sign up, choose a tier, and you are in. One-time projects are scoped with a signed proposal and milestone payments.' },
    { q: 'Do you offer ongoing support?', a: 'Yes. Every product includes 30 days of post-launch support. Extended maintenance is available as a monthly service.' },
    { q: 'What tech stack do you use?', a: 'Next.js 15, TypeScript, Prisma + SQLite, Docker, nginx, hosted on Vultr VPS with Cloudflare DNS. Stripe for payments, Solana for crypto integrations.' },
  ];

  return (
    <section className="py-32 border-t" style={{ borderColor: 'var(--cp-border)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">FAQ</h2>
          <p className="font-raj text-xl text-purple-300/60">Common questions, direct answers.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-xl border overflow-hidden cyber-card" style={{
              background: 'var(--cp-bg-card)',
              borderColor: 'var(--cp-border)',
              animationDelay: `${i * 80}ms`,
            }}>
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
   11. FINAL CTA + CONTACT
═══════════════════════════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section id="contact" className="py-32 border-t" style={{ borderColor: 'var(--cp-border)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: CTA text */}
          <div className="space-y-6">
            <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white">
              READY TO<br/>
              <span className="text-transparent bg-clip-text" style={{
                backgroundImage: 'linear-gradient(135deg, #ec4899, #d946ef)',
              }}>AUTOMATE?</span>
            </h2>
            <p className="font-raj text-xl text-purple-300/60 leading-relaxed">
              Let&apos;s talk about your project. Email, call, or fill out the form — I respond within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
                  background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.2)',
                }}>
                  <Mail className="w-5 h-5 text-pink-400"/>
                </div>
                <div>
                  <div className="font-jb text-xs text-purple-500">EMAIL</div>
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
                  <div className="font-jb text-xs text-purple-500">PHONE</div>
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
                  <div className="font-jb text-xs text-purple-500">RESPONSE TIME</div>
                  <span className="font-raj text-lg text-white">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="rounded-2xl border p-6" style={{
            background: 'var(--cp-bg-card)',
            borderColor: 'var(--cp-border)',
          }}>
            <form action="/api/contact" method="POST" className="space-y-4">
              {/* Honeypot */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off"/>

              <div>
                <label className="font-jb text-xs text-purple-500 block mb-2">NAME</label>
                <input type="text" name="name" required
                  className="w-full px-4 py-3 rounded-xl font-raj text-white outline-none focus:ring-2 focus:ring-pink-500/30 transition-all"
                  style={{
                    background: 'rgba(10,5,20,0.5)',
                    border: '1px solid var(--cp-border)',
                  }}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-jb text-xs text-purple-500 block mb-2">EMAIL</label>
                <input type="email" name="email" required
                  className="w-full px-4 py-3 rounded-xl font-raj text-white outline-none focus:ring-2 focus:ring-pink-500/30 transition-all"
                  style={{
                    background: 'rgba(10,5,20,0.5)',
                    border: '1px solid var(--cp-border)',
                  }}
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="font-jb text-xs text-purple-500 block mb-2">PROJECT DETAILS</label>
                <textarea name="message" required rows={4}
                  className="w-full px-4 py-3 rounded-xl font-raj text-white outline-none focus:ring-2 focus:ring-pink-500/30 transition-all resize-none"
                  style={{
                    background: 'rgba(10,5,20,0.5)',
                    border: '1px solid var(--cp-border)',
                  }}
                  placeholder="Tell me about your project..."
                />
              </div>
              <button type="submit"
                className="w-full px-6 py-4 rounded-xl font-raj font-bold text-lg tracking-wide text-white transition-all hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #ec4899, #d946ef)',
                  boxShadow: '0 0 30px rgba(236,72,153,0.3)',
                }}>
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
   12. FOOTER
═══════════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="border-t py-12" style={{ borderColor: 'var(--cp-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{
                background: 'linear-gradient(135deg, #ec4899, #a855f7)',
              }}>
                <Hexagon className="w-4 h-4 text-white"/>
              </div>
              <span className="font-cyber font-bold text-sm text-white tracking-wider">123AUTO</span>
            </div>
            <p className="font-raj text-sm text-purple-300/50 leading-relaxed">
              Solo developer building, deploying, and monetizing web products.
            </p>
          </div>
          <div>
            <div className="font-jb text-xs text-purple-500 tracking-widest mb-4">PRODUCTS</div>
            <ul className="space-y-2 font-raj text-sm text-purple-300/50">
              <li><a href="https://cards.123automateme.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">KAIO&apos;S CARDS</a></li>
              <li><a href="https://app.vivalarassa.fun" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">Apex Trading</a></li>
              <li><a href="/designwithhermes" className="hover:text-pink-400 transition-colors">Design With Hermes</a></li>
            </ul>
          </div>
          <div>
            <div className="font-jb text-xs text-purple-500 tracking-widest mb-4">COMPANY</div>
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

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t text-sm" style={{ borderColor: 'var(--cp-border)' }}>
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
