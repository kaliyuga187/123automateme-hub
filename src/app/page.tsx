import Link from 'next/link';
import {
  ArrowRight, ArrowUpRight, Check, Plus, Minus,
  Sparkles, Cpu, LineChart, Rocket, ShieldCheck, Bot, Code2, Wrench,
  Workflow, Mail, Phone, MessageSquare, ChevronRight, Zap,
  Activity, GitBranch, Globe, Clock, Terminal, Layers, Star,
} from 'lucide-react';

/* ════════════════════════════════════════════════════════════════
   123automateme.com — landing page (2026 redesign)
   Sections:
     1. Hero (asymmetric, floating command-center visual)
     2. Logo / "built with" strip
     3. Stats row
     4. Services (bento grid)
     5. Process (zig-zag, 4 steps)
     6. Featured product (MetaLaunch AI)
     7. Secondary product (K187 Bot Store)
     8. Pull quote
     9. FAQ
    10. Final CTA + Contact form
   ════════════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <StatsRow />
      <Services />
      <Process />
      <FeaturedProduct />
      <SecondaryProduct />
      <PullQuote />
      <FAQ />
      <FinalCTA />
    </>
  );
}

/* ── 1. Hero ────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Faint grid + radial accents */}
      <div aria-hidden className="absolute inset-0 grid-bg pointer-events-none" />
      <div aria-hidden className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="container-page relative pb-16 pt-20 sm:pb-24 sm:pt-28 lg:pb-32 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ── Copy (7 cols) ── */}
          <div className="lg:col-span-7">
            <div className="eyebrow">
              <span className="live-dot" />
              <span>Now booking Q3 builds</span>
            </div>

            <h1 className="h-display">
              <span className="block">Autonomous AI</span>
              <span className="block">
                that works{' '}
                <span className="relative inline-block">
                  <span className="gradient-text-cyan">while you sleep</span>
                  <svg
                    aria-hidden
                    viewBox="0 0 200 12"
                    className="absolute -bottom-2 left-0 h-3 w-full text-accent2/60"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8 Q 50 2, 100 6 T 198 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </span>
            </h1>

            <p className="lede mt-7 max-w-xl">
              We design, build, and operate production-grade AI systems for
              crypto trading, token launches, and bespoke business workflows.
              Real agents, real revenue, no demo-ware.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="#contact" className="btn-primary">
                Start a project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#products" className="btn-ghost">
                See live products
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-dim">
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-success" /> Fixed-price scope
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-success" /> Stripe-powered billing
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-success" /> Self-host or managed
              </span>
            </div>
          </div>

          {/* ── Visual (5 cols) ── */}
          <div className="lg:col-span-5">
            <CommandCenter />
          </div>
        </div>
      </div>
    </section>
  );
}

/* The floating "live" mock dashboard. CSS-only, no images. */
function CommandCenter() {
  return (
    <div className="relative">
      {/* Glow behind */}
      <div aria-hidden className="absolute inset-0 -z-10 translate-y-6 scale-95 bg-gradient-to-br from-accent/20 via-accent2/10 to-transparent blur-3xl" />

      <div className="card relative overflow-hidden rounded-3xl">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-line/60 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent3/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
            <span className="ml-3 font-mono text-[11px] text-dim">~/k187/command-center</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="live-dot" />
            <span className="font-mono text-[11px] text-dim">live</span>
          </div>
        </div>

        {/* Status header */}
        <div className="border-b border-line/40 px-5 py-4">
          <div className="mono-tag">system status</div>
          <div className="mt-2 flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold tracking-tight">All systems</span>
              <span className="text-2xl font-semibold text-success">operational</span>
            </div>
            <span className="font-mono text-[11px] text-dim">99.97% / 30d</span>
          </div>
        </div>

        {/* Mini metrics */}
        <div className="grid grid-cols-3 border-b border-line/40">
          {[
            { k: 'agents',    v: '12',   d: '↑ 3 this week' },
            { k: 'trades',    v: '1,284', d: '24h volume' },
            { k: 'uptime',    v: '45d',   d: 'no incidents' },
          ].map((m, i) => (
            <div
              key={m.k}
              className={`px-4 py-4 ${i < 2 ? 'border-r border-line/40' : ''}`}
            >
              <div className="mono-tag">{m.k}</div>
              <div className="mt-1 font-display text-2xl font-medium tracking-tight">
                {m.v}
              </div>
              <div className="font-mono text-[10px] text-dim">{m.d}</div>
            </div>
          ))}
        </div>

        {/* Recent activity feed */}
        <div className="px-5 py-4">
          <div className="mono-tag mb-3">recent activity</div>
          <ul className="space-y-2.5 font-mono text-[12px]">
            {[
              { t: '13:42:01', a: 'meme-agent',  msg: 'launched $KEK on pump.fun',        lvl: 'success' },
              { t: '13:38:55', a: 'trading-bot', msg: 'closed long SOL/USDC +4.2%',        lvl: 'success' },
              { t: '13:31:12', a: 'monitor',     msg: 'flagged volume spike on $WIF',     lvl: 'warn' },
              { t: '13:24:47', a: 'trading-bot', msg: 'opened long ETH/USDC',              lvl: 'info' },
              { t: '13:18:09', a: 'meme-agent',  msg: 'rewrote token metadata, deploying', lvl: 'info' },
            ].map((row) => (
              <li key={row.t} className="flex items-start gap-3">
                <span className="shrink-0 text-dim">{row.t}</span>
                <span
                  className={
                    row.lvl === 'success' ? 'text-success' :
                    row.lvl === 'warn'    ? 'text-accent3' :
                                            'text-accent2'
                  }
                >
                  ●
                </span>
                <span className="shrink-0 text-accent">{row.a}</span>
                <span className="truncate text-fg/80">{row.msg}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Floating badge — bento depth */}
      <div
        className="absolute -left-6 -bottom-6 hidden rotate-[-4deg] rounded-xl border border-line bg-surface/90 p-3 backdrop-blur-md md:block animate-drift"
        style={{ animationDuration: '6s' }}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/20 text-accent">
            <Zap className="h-3.5 w-3.5" />
          </span>
          <div className="leading-tight">
            <div className="text-[11px] font-mono uppercase tracking-wider text-dim">profit 24h</div>
            <div className="font-display text-sm font-medium text-success">+ $1,247.83</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 2. Logo / "built with" strip ──────────────────────────────── */

function LogoStrip() {
  return (
    <section className="border-y border-line/40 bg-surface/30 py-10">
      <div className="container-page">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="mono-tag shrink-0">built with</div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-dim">
            {[
              { i: Cpu,        k: 'Next.js 15' },
              { i: Layers,     k: 'TypeScript' },
              { i: Code2,      k: 'PostgreSQL' },
              { i: GitBranch,  k: 'GitHub Actions' },
              { i: Terminal,   k: 'Node 22' },
              { i: Globe,      k: 'Vultr + Cloudflare' },
            ].map(({ i: Icon, k }) => (
              <span key={k} className="flex items-center gap-1.5 transition hover:text-fg">
                <Icon className="h-3.5 w-3.5" /> {k}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 3. Stats row ──────────────────────────────────────────────── */

function StatsRow() {
  const stats = [
    { v: '32',  k: 'Projects indexed',      d: 'in our build registry' },
    { v: '6/6', k: 'Validation gate',        d: 'lint · typecheck · test · build · lint · ship' },
    { v: '45d', k: 'Median deploy',          d: 'from kickoff to production' },
    { v: '0',   k: 'Secret leaks',           d: 'enforced in code, not docs' },
  ];
  return (
    <section className="section-tight">
      <div className="container-page">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.k} className="bg-ink p-7 text-center sm:text-left">
              <div className="font-display text-5xl font-medium tracking-tight text-fg">
                {s.v}
              </div>
              <div className="mt-2 text-sm font-semibold text-fg">{s.k}</div>
              <div className="mt-1 text-xs text-dim">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 4. Services (bento grid) ──────────────────────────────────── */

function Services() {
  return (
    <section id="services" className="section">
      <div className="container-page">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="eyebrow">What we do</div>
            <h2 className="h-section">Three ways we can work together.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Every engagement starts with a free 30-minute call. We scope,
            price, and ship — no retainers unless you want one.
          </p>
        </div>

        {/* ── Bento grid: 1 large (col-span 7) + 2 stacked (col-span 5) ── */}
        <div className="grid gap-5 lg:grid-cols-12">
          {/* Featured tier */}
          <article className="card card-hover relative col-span-1 overflow-hidden p-8 lg:col-span-7 lg:p-10">
            <div aria-hidden className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center gap-2">
                <span className="pill border-accent/30 bg-accent/10 text-accent">
                  <Sparkles className="h-3 w-3" /> Most popular
                </span>
              </div>
              <div className="mt-6 flex items-baseline gap-3">
                <h3 className="h-card text-3xl">Commission a build</h3>
                <span className="font-mono text-sm text-accent">from $2,000</span>
              </div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                Tell us the workflow you want automated. We scope, build, and
                ship a production system — fixed price, fixed timeline, 30
                days of support included.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-fg/90">
                {[
                  ['Custom AI agent', Wrench],
                  ['Trading bot',     LineChart],
                  ['Token launcher',  Rocket],
                  ['Workflow auto',   Workflow],
                  ['Payments integ',  Bot],
                  ['Source code',     Code2],
                ].map(([label, Icon]) => {
                  const I = Icon as any;
                  return (
                    <div key={label as string} className="flex items-center gap-2">
                      <I className="h-4 w-4 text-accent" />
                      <span>{label as string}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto pt-8">
                <Link href="#contact" className="btn-accent">
                  Request a build <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>

          {/* Tier 1 */}
          <article className="card card-hover col-span-1 flex flex-col p-8 lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="pill">Subscribe</span>
            </div>
            <h3 className="h-card mt-6 text-2xl">Buy a product</h3>
            <div className="mt-1 font-mono text-sm text-accent2">from $19/mo</div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Subscribe to one of our turnkey SaaS products. Cancel anytime,
              no setup fees, no minimums.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-fg/90">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-accent2" /> MetaLaunch AI
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-accent2" /> K187 Bot Fleet
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-accent2" /> Hosted dashboards
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-accent2" /> Stripe billing
              </li>
            </ul>
            <Link href="#products" className="btn-ghost mt-6 self-start">
              See products <ArrowUpRight className="h-4 w-4" />
            </Link>
          </article>

          {/* Tier 2 — full width below */}
          <article className="card card-hover col-span-1 flex flex-col p-8 sm:col-span-2 lg:col-span-12 lg:flex-row lg:items-center lg:gap-12">
            <div className="flex-1">
              <div className="pill">Retainer</div>
              <h3 className="h-card mt-4 text-2xl">Ongoing engineering partnership</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                Bring us into your team for architecture review, audits, and
                ongoing engineering. Hourly rate, monthly cap, no surprises.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-3 lg:mt-0">
              <Stat label="Rate" value="$300 / hr" />
              <Stat label="Response" value="< 4h" />
              <Stat label="Min. commit" value="4 hr / mo" />
            </div>
            <Link href="#contact" className="btn-ghost mt-6 self-start lg:mt-0">
              Book a call
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mono-tag">{label}</div>
      <div className="font-display text-xl font-medium">{value}</div>
    </div>
  );
}

/* ── 5. Process (zig-zag) ──────────────────────────────────────── */

function Process() {
  const steps = [
    {
      n: '01',
      t: 'Discovery',
      d: 'A 30-minute call to understand the workflow you want automated, the systems in play, and what success looks like. We come prepared; you leave with a one-page summary.',
      bullets: ['No slide decks', 'No NDA required for first call', 'Outcome: clear problem statement'],
    },
    {
      n: '02',
      t: 'Proposal',
      d: 'Within 2 business days you get a fixed-price proposal: scope, deliverables, timeline, and acceptance criteria. We sign before any code is written.',
      bullets: ['Fixed price', 'Fixed timeline', 'Acceptance criteria defined up front'],
    },
    {
      n: '03',
      t: 'Build',
      d: 'Weekly demos. Working software from week one. You see the system come alive, give feedback, and we adjust. By week 4 you have a real thing.',
      bullets: ['Weekly demo', 'Working software always', 'Direct Slack channel to the builder'],
    },
    {
      n: '04',
      t: 'Launch & support',
      d: 'Deployed to your infrastructure (or ours), with monitoring, runbooks, and 30 days of bug-fix support. After that, optional retainer.',
      bullets: ['Deployed to your infra', '30 days bug-fix support', 'Optional retainer afterwards'],
    },
  ];
  return (
    <section id="process" className="section border-t border-line/40 bg-surface/20">
      <div className="container-page">
        <div className="mb-16 max-w-2xl">
          <div className="eyebrow">How it works</div>
          <h2 className="h-section">From idea to live system in weeks, not months.</h2>
        </div>

        <ol className="space-y-20 lg:space-y-28">
          {steps.map((s, i) => {
            const flip = i % 2 === 1; // zig-zag
            return (
              <li key={s.n} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                {/* Text */}
                <div className={`lg:col-span-5 ${flip ? 'lg:order-2 lg:col-start-8' : ''}`}>
                  <div className="font-mono text-xs text-dim">Step {s.n}</div>
                  <h3 className="h-section mt-2 text-3xl sm:text-4xl">{s.t}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {s.d}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-fg/85">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 text-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={`lg:col-span-7 ${flip ? 'lg:order-1 lg:col-start-1' : ''}`}>
                  <ProcessVisual index={i} />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function ProcessVisual({ index }: { index: number }) {
  // Three distinct visuals for the four steps (last one reuses the third)
  if (index === 0) {
    return (
      <div className="card overflow-hidden p-6 sm:p-8">
        <div className="mono-tag">// discovery</div>
        <div className="mt-4 space-y-3 font-mono text-sm">
          {[
            ['Q', 'What workflow do you want automated?'],
            ['A', 'Crypto trading. Trend detection → token deploy → exit.'],
            ['Q', 'What does success look like in 90 days?'],
            ['A', '$5k MRR from Pro tier subscribers.'],
            ['Q', 'Who else has tried this for you?'],
            ['A', 'No one. We want to build from scratch.'],
          ].map(([k, v], i) => (
            <div key={i} className="flex gap-3">
              <span className={k === 'Q' ? 'text-accent2' : 'text-accent'}>{k}</span>
              <span className="text-fg/80">{v}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-2 border-t border-line/40 pt-4 font-mono text-[11px] text-dim">
          <Clock className="h-3 w-3" /> 30 minutes, no NDA
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="card overflow-hidden p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <div className="mono-tag">// proposal · v1</div>
          <span className="pill">signed</span>
        </div>
        <h4 className="mt-4 text-xl font-semibold">MetaLaunch AI — MVP build</h4>
        <div className="mt-5 grid grid-cols-3 gap-4">
          <MiniStat label="scope" value="6 deliverables" />
          <MiniStat label="price" value="$8,400" />
          <MiniStat label="timeline" value="4 weeks" />
        </div>
        <ul className="mt-5 space-y-1.5 font-mono text-sm text-fg/80">
          {['Trend detection engine', 'Token metadata AI', 'Pump.fun deploy', 'Stripe billing', 'Operator dashboard', 'Runbook + handover'].map((d) => (
            <li key={d} className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-success" /> {d}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if (index === 2) {
    return (
      <div className="card overflow-hidden p-6 sm:p-8">
        <div className="mono-tag">// weekly demo</div>
        <div className="mt-4 grid grid-cols-7 items-end gap-2" style={{ height: 160 }}>
          {[40, 55, 50, 70, 60, 85, 95].map((h, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t bg-gradient-to-t from-accent/60 to-accent"
                style={{ height: `${h}%` }}
              />
              <div className="font-mono text-[10px] text-dim">w{i + 1}</div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between text-sm">
          <div>
            <div className="text-fg">Working software, every Friday</div>
            <div className="text-xs text-dim">demoed live · feedback in writing</div>
          </div>
          <span className="pill">
            <Activity className="h-3 w-3" /> week 4 of 4
          </span>
        </div>
      </div>
    );
  }
  // index 3 — Launch
  return (
    <div className="card relative overflow-hidden p-6 sm:p-8">
      <div className="mono-tag">// launch</div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {[
          ['Deployed',      'prod.k187.io',     'success'],
          ['Monitoring',    'UptimeRobot',       'success'],
          ['Stripe live',   'Checkout + webhook','success'],
          ['Runbook',       '30 pages, you own it','success'],
        ].map(([k, v, lvl]) => (
          <div key={k} className="flex items-center justify-between rounded-lg border border-line/60 bg-surface/60 px-4 py-3">
            <div>
              <div className="mono-tag">{k}</div>
              <div className="font-mono text-sm text-fg">{v}</div>
            </div>
            <ShieldCheck className="h-5 w-5 text-success" />
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-lg border border-success/30 bg-success/5 p-4 text-sm">
        <div className="flex items-center gap-2 font-semibold text-success">
          <ShieldCheck className="h-4 w-4" /> Shipped on time, on budget
        </div>
        <div className="mt-1 text-fg/70">30 days of bug-fix support included. Optional retainer after.</div>
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mono-tag">{label}</div>
      <div className="font-display text-lg font-medium">{value}</div>
    </div>
  );
}

/* ── 6. Featured product (MetaLaunch AI) ───────────────────────── */

function FeaturedProduct() {
  return (
    <section id="products" className="section">
      <div className="container-page">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Card */}
          <div className="lg:col-span-5">
            <div className="eyebrow"><Rocket className="h-3 w-3" /> Featured product</div>
            <h2 className="h-section mt-3">MetaLaunch AI</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              An autonomous meme-coin launch platform on Solana. Detects
              viral trends across X, TikTok, and Reddit, generates token
              metadata with AI, and deploys to Pump.fun in one click.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-fg/90">
              {[
                'Trend detection across X, TikTok, Reddit',
                'AI-generated token name, symbol, description, logo',
                'One-click deploy to Pump.fun (or fully auto)',
                'Two modes: manual control, or auto-launch on threshold',
                'Per-user quotas + Stripe-billed subscriptions',
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-success" /> {b}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="#contact" className="btn-accent">
                Join the waitlist <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="pill">Beta · invite only</span>
            </div>
          </div>

          {/* Mock UI */}
          <div className="lg:col-span-7">
            <div className="card relative overflow-hidden p-1.5">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-line/60 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-danger/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent3/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
                <div className="ml-3 flex-1 rounded-md border border-line bg-surface/40 px-3 py-1 font-mono text-[11px] text-dim">
                  metalaunch.ai/trends
                </div>
              </div>

              <div className="grid grid-cols-12 divide-x divide-line/40">
                {/* Trend list */}
                <div className="col-span-7 p-5">
                  <div className="mono-tag mb-3">// trending now</div>
                  <ul className="space-y-2.5">
                    {[
                      { tag: '$GIGACHAD', score: 92, vol: '+340%' },
                      { tag: '$WIFHAT',   score: 87, vol: '+212%' },
                      { tag: '$SLERF',    score: 78, vol: '+118%' },
                      { tag: '$BOME',     score: 71, vol: '+88%'  },
                      { tag: '$TRUMP',    score: 64, vol: '+52%'  },
                    ].map((t, i) => (
                      <li
                        key={t.tag}
                        className="flex items-center justify-between rounded-lg border border-line/40 bg-surface/30 px-3 py-2.5"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[10px] text-dim">{i + 1}</span>
                          <span className="font-mono text-sm font-semibold text-fg">{t.tag}</span>
                        </div>
                        <div className="flex items-center gap-4 font-mono text-[11px]">
                          <span className="text-accent2">score {t.score}</span>
                          <span className="text-success">{t.vol}</span>
                          <button className="rounded-md border border-accent/30 bg-accent/10 px-2 py-1 text-accent">
                            launch →
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Token preview */}
                <div className="col-span-5 p-5">
                  <div className="mono-tag mb-3">// preview</div>
                  <div className="rounded-lg border border-accent/30 bg-accent/5 p-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent2 text-ink font-display text-xl font-bold">
                        G
                      </div>
                      <div>
                        <div className="font-mono text-sm font-semibold">$GIGACHAD</div>
                        <div className="font-mono text-[11px] text-dim">pump.fun · solana</div>
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-fg/75">
                      The most based meme token on Solana. 1B supply, 0% tax,
                      locked liquidity, community-driven.
                    </p>
                    <div className="mt-4 space-y-1.5 font-mono text-[11px]">
                      <div className="flex justify-between"><span className="text-dim">fee</span><span>0.5 SOL</span></div>
                      <div className="flex justify-between"><span className="text-dim">auto-buy</span><span>0.1 SOL</span></div>
                      <div className="flex justify-between"><span className="text-dim">slippage</span><span>3%</span></div>
                    </div>
                    <button className="mt-4 w-full rounded-md bg-accent py-2 text-xs font-semibold text-ink">
                      Deploy to Pump.fun
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 7. Secondary product (K187 Bot Store) ─────────────────────── */

function SecondaryProduct() {
  return (
    <section className="section-tight">
      <div className="container-page">
        <div className="card relative overflow-hidden p-8 sm:p-10">
          <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative grid items-center gap-8 sm:grid-cols-12">
            <div className="sm:col-span-7">
              <div className="flex items-center gap-2">
                <span className="pill"><Bot className="h-3 w-3" /> Live</span>
                <span className="mono-tag">k187 bot store</span>
              </div>
              <h3 className="h-card mt-4 text-2xl sm:text-3xl">
                Algorithmic trading bots, by subscription
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                Cyberpunk-styled storefront for the K187 trading bot fleet.
                Bots for memecoin sniping, US30 scalping, and DEX arbitrage.
                Stripe-powered subscriptions, paper-trading by default.
              </p>
              <Link href="#contact" className="btn-ghost mt-6 inline-flex">
                Browse the store <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="sm:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { n: 'Meme sniping', v: '0.4s' },
                  { n: 'US30 scalper', v: '12ms' },
                  { n: 'DEX arbitrage', v: '4 chains' },
                  { n: 'Portfolio rebal', v: 'weekly' },
                ].map((b) => (
                  <div key={b.n} className="rounded-lg border border-line/60 bg-surface/60 p-4">
                    <div className="mono-tag">{b.n}</div>
                    <div className="font-display text-xl font-medium">{b.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 8. Pull quote ─────────────────────────────────────────────── */

function PullQuote() {
  return (
    <section className="section">
      <div className="container-page">
        <figure className="relative max-w-4xl">
          <Star aria-hidden className="absolute -left-2 -top-6 h-12 w-12 text-accent/20" />
          <blockquote className="font-display text-2xl leading-[1.3] tracking-[-0.01em] text-fg sm:text-3xl md:text-4xl">
            <p>
              &ldquo;We came in with a vague idea and a deadline. Four weeks
              later we had a live, revenue-generating product, with the source
              code and a runbook we actually understand. That last part is
              rarer than you&apos;d think.&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-3 text-sm">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-accent2 to-accent font-mono text-xs font-bold text-ink">
              AC
            </div>
            <div>
              <div className="font-semibold text-fg">Sample testimonial</div>
              <div className="text-xs text-dim">placeholder — replace with a real client quote</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ── 9. FAQ ────────────────────────────────────────────────────── */

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: 'How long does a typical build take?',
    a: 'Small engagements (a single bot or landing page) ship in 2–3 weeks. Medium builds (full SaaS MVP) in 4–6 weeks. Larger systems (multi-service platforms) are scoped in 2-week sprints. The proposal always includes a fixed timeline.',
  },
  {
    q: 'Do I own the code?',
    a: 'Yes. Every engagement ends with a full source-code handover, a runbook, and your infrastructure. We retain a non-exclusive right to reference the work in our portfolio, but otherwise you own everything we build.',
  },
  {
    q: 'Can you host it for me?',
    a: 'Yes. We can deploy to your Vultr/AWS/Hetzner account (you own the credentials), or we can host on our infrastructure with a managed-service retainer. Either way, you can migrate away at any time.',
  },
  {
    q: 'What about trading risk?',
    a: 'All trading products default to paper mode. Live trading requires explicit opt-in, separate authentication, and a written acknowledgement of risk. We do not provide financial advice, and past performance of any bot is not a guarantee of future results.',
  },
  {
    q: 'How does pricing work?',
    a: 'Fixed-price for projects, hourly for retainers. You get a written proposal before any work starts, with deliverables and acceptance criteria. We invoice in two parts: 50% to start, 50% on delivery.',
  },
  {
    q: 'What if I just want to subscribe?',
    a: 'Both MetaLaunch AI and the K187 Bot Store have a free tier to evaluate and a paid tier ($19–199/mo) for full access. Cancel anytime, no setup fees, no minimums.',
  },
];

function FAQ() {
  return (
    <section id="faq" className="section border-t border-line/40 bg-surface/20">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="eyebrow">FAQ</div>
            <h2 className="h-section">Questions, answered.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              If your question isn&apos;t here, send a note via the contact
              form — we reply within one business day.
            </p>
            <Link href="#contact" className="btn-ghost mt-6 inline-flex">
              Ask a question <MessageSquare className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <ul className="divide-y divide-line/60 border-y border-line/60">
              {FAQ_ITEMS.map((item, i) => (
                <FAQRow key={i} q={item.q} a={item.a} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQRow({ q, a }: { q: string; a: string }) {
  return (
    <li>
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 transition">
          <span className="text-base font-semibold text-fg sm:text-lg">{q}</span>
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line bg-surface/60 transition group-open:bg-accent/15 group-open:border-accent/40">
            <Plus className="h-3.5 w-3.5 text-muted transition group-open:hidden" />
            <Minus className="hidden h-3.5 w-3.5 text-accent group-open:block" />
          </span>
        </summary>
        <div className="pb-6 pr-12 text-sm leading-relaxed text-muted">{a}</div>
      </details>
    </li>
  );
}

/* ── 10. Final CTA + Contact form ──────────────────────────────── */

function FinalCTA() {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* CTA copy */}
          <div className="lg:col-span-5">
            <div className="eyebrow">Get in touch</div>
            <h2 className="h-section">Let&apos;s build something.</h2>
            <p className="lede mt-5">
              Tell us what you want to automate. We reply within one
              business day, usually with a short call invite.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-fg/90">
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface/60">
                  <Mail className="h-4 w-4 text-accent" />
                </span>
                <div>
                  <div className="mono-tag">email</div>
                  <a href="mailto:hello@123automateme.com" className="text-fg hover:text-accent">
                    hello@123automateme.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface/60">
                  <Phone className="h-4 w-4 text-accent" />
                </span>
                <div>
                  <div className="mono-tag">mobile</div>
                  <span className="text-muted">on request — email first</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface/60">
                  <Clock className="h-4 w-4 text-accent" />
                </span>
                <div>
                  <div className="mono-tag">hours</div>
                  <span className="text-fg">AEST · Mon–Fri · 9am–6pm</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <form action="/api/contact" method="POST" className="card relative overflow-hidden p-7 sm:p-9 lg:col-span-7">
      <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="name"    name="name"    label="Name"    type="text"     required autoComplete="name"    placeholder="Your name" />
          <Field id="email"   name="email"   label="Email"   type="email"    required autoComplete="email"   placeholder="you@company.com" />
          <Field id="company" name="company" label="Company (optional)" type="text" autoComplete="organization" placeholder="Acme Pty Ltd" className="sm:col-span-2" />
        </div>
        <div className="mt-5">
          <label htmlFor="message" className="block text-sm font-medium text-fg">What do you want to automate?</label>
          <textarea
            id="message" name="message" required rows={5}
            className="mt-2 block w-full rounded-lg border border-line bg-ink/60 px-3 py-2.5 text-sm text-fg placeholder-dim focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="The workflow you want automated, the system you&apos;re using, and any deadlines."
          />
        </div>
        {/* Honeypot */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-dim">
            We reply within one business day. No spam, ever.
          </p>
          <button type="submit" className="btn-primary">
            Send message <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </form>
  );
}

function Field({
  id, name, label, type = 'text', required, autoComplete, placeholder, className = '',
}: {
  id: string; name: string; label: string;
  type?: string; required?: boolean; autoComplete?: string;
  placeholder?: string; className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-fg">{label}</label>
      <input
        id={id} name={name} type={type} required={required} autoComplete={autoComplete}
        className="mt-2 block w-full rounded-lg border border-line bg-ink/60 px-3 py-2.5 text-sm text-fg placeholder-dim focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        placeholder={placeholder}
      />
    </div>
  );
}
