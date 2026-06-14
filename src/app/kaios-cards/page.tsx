import Link from 'next/link'
import {
  Search,
  TrendingUp,
  Zap,
  Shield,
  DollarSign,
  BarChart3,
  Camera,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Star,
  Clock,
  Globe,
  Lock,
} from 'lucide-react'

export default function KaioCards() {
  const stats = [
    { label: 'Pokémon TCG', value: '15K+', sublabel: 'cards indexed' },
    { label: 'Live pricing', value: '5min', sublabel: 'refresh rate' },
    { label: 'Market data', value: '2', sublabel: 'sources' },
    { label: 'Trade analyzer', value: '∞', sublabel: 'comparisons' },
  ]

  const services = [
    {
      icon: Search,
      title: 'Instant Price Lookup',
      desc: 'Search any card by name, set, or collector number. Get TCGplayer + Cardmarket pricing in under 200ms.',
      color: 'from-cyan-500/20 to-blue-500/20',
      iconColor: 'text-cyan-400',
    },
    {
      icon: Camera,
      title: 'Barcode Scanner',
      desc: 'Point your camera at a booster pack EAN. We match it to the exact set and surface the top 10 most valuable cards inside.',
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400',
    },
    {
      icon: TrendingUp,
      title: 'Trade Analyzer',
      desc: 'Compare two cards side-by-side. See price history, market cap, and who wins the trade (you or them).',
      color: 'from-orange-500/20 to-red-500/20',
      iconColor: 'text-orange-400',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Search or Scan',
      desc: 'Type a card name or snap a photo of a booster pack. The pokemontcg.io API returns the full card data with real market prices.',
      visual: 'search-mock',
    },
    {
      step: '02',
      title: 'Analyze the Data',
      desc: 'We pull TCGplayer market price + Cardmarket average price. You see the spread, the trend, and the "fair value" for any trade.',
      visual: 'analyze-mock',
    },
    {
      step: '03',
      title: 'Make the Trade',
      desc: 'Use the trade analyzer to compare cards in your collection. Green = you win. Red = you lose. Yellow = fair swap.',
      visual: 'trade-mock',
    },
  ]

  const faqs = [
    {
      q: 'Is this free to use?',
      a: 'Yes. The core features (price lookup, barcode scan, trade analyzer) are completely free. We monetize through affiliate links when you buy cards from TCGplayer via our search results.',
    },
    {
      q: 'Where does the pricing data come from?',
      a: 'We use the official pokemontcg.io API, which aggregates TCGplayer market prices (US) and Cardmarket average prices (EU). Both update every 24 hours.',
    },
    {
      q: 'Can I scan booster packs?',
      a: 'Yes. Point your phone camera at the EAN barcode on any Pokémon TCG booster pack. We match it to the exact set and show you the top 10 most valuable cards inside.',
    },
    {
      q: 'Do you support other TCGs?',
      a: 'Not yet. We launch with Pokémon TCG only. Magic: The Gathering and Yu-Gi-Oh! are on the roadmap for Q3 2026.',
    },
    {
      q: 'Is my collection data private?',
      a: 'We don\'t store your collection or search history. Everything runs in your browser. No accounts, no tracking, no cookies beyond analytics.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight">KAIO'S CARDS</span>
              <span className="text-xs text-slate-400 -mt-1">by 123automateme.com</span>
            </div>
          </Link>
          <a
            href="https://cards.123automateme.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 text-sm font-semibold hover:shadow-lg hover:shadow-teal-500/30 transition-all"
          >
            Launch App →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              <span className="text-sm font-mono text-teal-300">
                Live: 15,000+ Pokémon cards indexed
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[0.95]">
              <span className="block text-white">Know the price</span>
              <span className="block text-slate-400 mt-2">before you trade</span>
              <span className="block relative mt-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
                any Pokémon card
                {/* Hand-drawn SVG underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8 Q 75,2 150 6 T 298 5"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2dd4bf" />
                      <stop offset="50%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Lede */}
            <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
              Free price lookup, barcode scanner, and trade analyzer for Pokémon TCG collectors.
              Real-time data from TCGplayer + Cardmarket. No account needed.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://cards.123automateme.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-600 text-lg font-semibold shadow-xl shadow-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/40 transition-all hover:-translate-y-0.5"
              >
                Try it free
                <ArrowRight className="inline w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#features"
                className="px-8 py-4 rounded-2xl bg-slate-800/50 border border-white/10 text-lg font-semibold hover:bg-slate-800 hover:border-white/20 transition-all"
              >
                See features
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>pokemontcg.io API</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>TCGplayer + Cardmarket</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>No account needed</span>
              </div>
            </div>
          </div>

          {/* Right: Floating card preview */}
          <div className="relative">
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-6 shadow-2xl shadow-teal-500/10">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 px-3 py-1.5 rounded-lg bg-slate-950/50 text-xs text-slate-400 font-mono">
                  cards.123automateme.com
                </div>
              </div>

              {/* App mock */}
              <div className="space-y-4">
                {/* Search bar */}
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10">
                  <Search className="w-5 h-5 text-slate-400" />
                  <span className="text-sm text-slate-300 flex-1">Charizard ex</span>
                  <kbd className="px-2 py-1 rounded-md bg-slate-800 text-xs text-slate-400 font-mono">
                    ⌘K
                  </kbd>
                </div>

                {/* Card result */}
                <div className="rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs font-mono text-orange-400 mb-1">sv6 · 006/165</div>
                      <div className="font-bold text-lg tracking-tight">Charizard ex</div>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-orange-500/20 border border-orange-500/30">
                      <span className="text-sm font-mono text-orange-300">$619.22</span>
                    </div>
                  </div>

                  {/* Price grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10">
                    <div>
                      <div className="text-xs text-slate-400 mb-1">TCGplayer Market</div>
                      <div className="text-lg font-semibold text-green-400">$619.22</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-1">Cardmarket Avg</div>
                      <div className="text-lg font-semibold text-cyan-400">€580.00</div>
                    </div>
                  </div>

                  {/* Trade analyzer */}
                  <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-slate-300">+12.4% this month</span>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="grid grid-cols-3 gap-2">
                  <button className="px-3 py-2 rounded-lg bg-slate-800/50 border border-white/10 text-xs font-medium hover:bg-slate-800 transition">
                    <Camera className="w-4 h-4 mx-auto mb-1" />
                    Scan
                  </button>
                  <button className="px-3 py-2 rounded-lg bg-slate-800/50 border border-white/10 text-xs font-medium hover:bg-slate-800 transition">
                    <BarChart3 className="w-4 h-4 mx-auto mb-1" />
                    Analyze
                  </button>
                  <button className="px-3 py-2 rounded-lg bg-teal-500/20 border border-teal-500/30 text-xs font-medium text-teal-300 hover:bg-teal-500/30 transition">
                    <Sparkles className="w-4 h-4 mx-auto mb-1" />
                    Trade
                  </button>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 text-sm font-bold shadow-xl shadow-teal-500/30 animate-pulse">
              Live data
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl lg:text-5xl font-black tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-white mb-1">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Bento */}
      <section id="features" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-mono text-cyan-300">Features</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Everything you need to trade smarter
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Three tools. One dashboard. Zero account required.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className={`group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.05] hover:border-white/20 transition-all hover:-translate-y-1 ${
                  i === 0 ? 'lg:row-span-2' : ''
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                >
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Zig-Zag */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <BarChart3 className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-mono text-purple-300">How it works</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Three steps to a fair trade
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              No guesswork. No arguments. Just data.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-24">
            {process.map((step, i) => (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Copy */}
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-800/50 border border-white/10 mb-6">
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                      {step.step}
                    </span>
                    <div className="w-8 h-px bg-gradient-to-r from-teal-400 to-transparent" />
                    <span className="text-sm font-mono text-slate-300">Step {step.step}</span>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight mb-4">{step.title}</h3>
                  <p className="text-lg text-slate-400 leading-relaxed">{step.desc}</p>
                </div>

                {/* Visual mock */}
                <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                  {step.visual === 'search-mock' && (
                    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-6">
                      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 mb-4">
                        <Search className="w-5 h-5 text-slate-400" />
                        <span className="text-sm text-slate-300 flex-1">Charizard</span>
                      </div>
                      <div className="space-y-2">
                        {['Charizard ex (sv6)', 'Charizard VMAX (swsh3)', 'Charizard GX (sm3)'].map(
                          (name, j) => (
                            <div
                              key={j}
                              className="px-4 py-3 rounded-lg bg-slate-800/50 border border-white/5 hover:border-cyan-500/30 transition cursor-pointer"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">{name}</span>
                                <span className="text-xs font-mono text-cyan-400">$619.22</span>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {step.visual === 'analyze-mock' && (
                    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-lg font-bold">Charizard ex</div>
                        <div className="text-2xl font-mono text-green-400">$619.22</div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-slate-400">30-day trend</span>
                            <span className="text-green-400">+12.4%</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
                              style={{ width: '75%' }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-slate-400">Market spread</span>
                            <span className="text-orange-400">6.8%</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                              style={{ width: '25%' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.visual === 'trade-mock' && (
                    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-6">
                      <div className="text-xs font-mono text-slate-400 mb-4">TRADE ANALYZER</div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="rounded-xl bg-slate-800/50 border border-white/10 p-4">
                          <div className="text-xs text-slate-400 mb-1">You give</div>
                          <div className="text-sm font-bold mb-2">Pikachu VMAX</div>
                          <div className="text-lg font-mono text-green-400">$45.20</div>
                        </div>
                        <div className="rounded-xl bg-slate-800/50 border border-white/10 p-4">
                          <div className="text-xs text-slate-400 mb-1">You get</div>
                          <div className="text-sm font-bold mb-2">Charizard ex</div>
                          <div className="text-lg font-mono text-cyan-400">$619.22</div>
                        </div>
                      </div>
                      <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-3 text-center">
                        <div className="text-sm font-bold text-green-400">
                          You win by $574.02
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Star className="w-16 h-16 text-teal-400/20 mx-auto mb-8" />
          <blockquote className="text-3xl lg:text-5xl font-black tracking-tight leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
            "Finally, a tool that tells me if a trade is fair before I shake hands."
          </blockquote>
          <div className="text-lg text-slate-400">
            <div className="font-semibold text-white mb-1">Built for collectors</div>
            <div>by collectors</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-500/10 border border-slate-500/20 mb-6">
              <span className="text-sm font-mono text-slate-300">FAQ</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Questions? Answered.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-white/10 bg-white/[0.03]">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <span className="text-lg font-semibold">{faq.q}</span>
                  <span className="ml-6 text-2xl text-slate-400 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-400 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight mb-6">
            Ready to trade smarter?
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            No account. No payment. Just real-time Pokémon card pricing in your browser.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://cards.123automateme.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-600 text-lg font-semibold shadow-xl shadow-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/40 transition-all hover:-translate-y-0.5"
            >
              Launch KAIO'S CARDS
              <ArrowRight className="inline w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-teal-400" />
              <span>Live at cards.123automateme.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-teal-400" />
              <span>No tracking, no cookies</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-400" />
              <span>Updated every 24h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="font-bold text-lg tracking-tight">KAIO'S CARDS</div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Free Pokémon TCG price lookup and trade analyzer. Built with{' '}
                <Link href="/" className="text-cyan-400 hover:underline">
                  123automateme.com
                </Link>
                .
              </p>
            </div>

            <div>
              <div className="font-semibold text-sm mb-4">Product</div>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a
                    href="https://cards.123automateme.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Launch App
                  </a>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#process" className="hover:text-white transition">
                    How it works
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-semibold text-sm mb-4">Company</div>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-semibold text-sm mb-4">Legal</div>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="/terms" className="hover:text-white transition">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-slate-500">
            <div>© 2026 123automateme.com. All rights reserved.</div>
            <div className="mt-4 md:mt-0">
              Pokémon TCG data provided by pokemontcg.io • Prices from TCGplayer + Cardmarket
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
