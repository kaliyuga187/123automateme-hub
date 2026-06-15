import Link from 'next/link'
import {
  Search, TrendingUp, Zap, Shield, BarChart3, Camera, Sparkles,
  ArrowRight, CheckCircle2, Star, Clock, Globe, Gamepad2, Hexagon, Activity,
} from 'lucide-react'

const cyberpunkCSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
:root {
  --kc-bg: #0a0514;
  --kc-card: rgba(15, 8, 30, 0.8);
  --kc-border: rgba(168, 85, 247, 0.15);
  --kc-pink: #ec4899;
  --kc-mag: #d946ef;
  --kc-purple: #a855f7;
}
.font-cyber { font-family: 'Orbitron', sans-serif; }
.font-raj { font-family: 'Rajdhani', sans-serif; }
.font-jb { font-family: 'JetBrains Mono', monospace; }
@keyframes kc-drift { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
@keyframes kc-pulse { 0%,100%{box-shadow:0 0 20px rgba(236,72,153,0.3),0 0 40px rgba(236,72,153,0.1)} 50%{box-shadow:0 0 30px rgba(236,72,153,0.4),0 0 60px rgba(236,72,153,0.2)} }
@keyframes kc-glow { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
.kc-neon { animation: kc-pulse 3s ease-in-out infinite; }
.kc-float { animation: kc-drift 5s ease-in-out infinite; }
.kc-underline {
  background: linear-gradient(90deg, #ec4899, #d946ef, #a855f7);
  background-size: 200% 100%;
  animation: kc-glow 3s linear infinite;
}
`;

export default function KaioCardsPage() {
  const stats = [
    { label: 'Pokémon TCG', value: '15K+', sub: 'cards indexed' },
    { label: 'Live pricing', value: '5min', sub: 'refresh' },
    { label: 'Data sources', value: '2', sub: 'US + EU' },
    { label: 'Trade analysis', value: '∞', sub: 'comparisons' },
  ]

  const features = [
    { icon: Search, title: 'Instant Price Lookup', desc: 'Search by name, set, or collector number. TCGplayer + Cardmarket pricing in under 200ms.', color: '#ec4899' },
    { icon: Camera, title: 'Barcode Scanner', desc: 'Scan booster pack EAN. Match to exact set, surface top 10 most valuable cards.', color: '#d946ef' },
    { icon: TrendingUp, title: 'Trade Analyzer', desc: 'Compare two cards side by side. Price history, market cap, who wins the trade.', color: '#a855f7' },
  ]

  const steps = [
    { n: '01', t: 'Search or Scan', d: 'Type a card name or snap a photo. pokemontcg.io returns full data with real market prices.' },
    { n: '02', t: 'Analyze the Data', d: 'TCGplayer market + Cardmarket average. See the spread, the trend, the fair value.' },
    { n: '03', t: 'Make the Trade', d: 'Green = you win. Red = you lose. Yellow = fair swap. No arguments, just data.' },
  ]

  const faqs = [
    { q: 'Is this free to use?', a: 'Yes. Price lookup, barcode scan, and trade analyzer are completely free.' },
    { q: 'Where does the pricing data come from?', a: 'Official pokemontcg.io API — aggregates TCGplayer market prices (US) and Cardmarket average prices (EU). Updated every 24 hours.' },
    { q: 'Can I scan booster packs?', a: 'Yes. Point your camera at the EAN barcode on any Pokémon TCG booster pack. We match it and show the top 10 most valuable cards.' },
    { q: 'Do you support other TCGs?', a: 'Launching with Pokémon only. Magic: The Gathering and Yu-Gi-Oh on the roadmap for Q3 2026.' },
    { q: 'Is my data private?', a: 'We do not store your collection or search history. No accounts, no tracking, no cookies beyond analytics.' },
  ]

  return (
    <>
      <style>{cyberpunkCSS}</style>
      <div className="min-h-screen text-white font-raj" style={{ background: 'var(--kc-bg)' }}>

        {/* HEADER */}
        <header className="fixed top-0 w-full z-50 border-b" style={{
          background: 'rgba(10,5,20,0.85)', backdropFilter: 'blur(20px)', borderColor: 'var(--kc-border)',
        }}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
                background: 'linear-gradient(135deg,#ec4899,#d946ef,#a855f7)', boxShadow: '0 0 20px rgba(236,72,153,0.3)',
              }}>
                <Gamepad2 className="w-5 h-5 text-white"/>
              </div>
              <div>
                <div className="font-cyber font-bold text-sm tracking-wider text-white">KAIO&apos;S CARDS</div>
                <div className="font-jb text-[10px] text-purple-400">123automateme.com</div>
              </div>
            </Link>
            <a href="https://cards.123automateme.com" target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg font-raj font-bold text-sm tracking-wide text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#ec4899,#d946ef)', boxShadow: '0 0 20px rgba(236,72,153,0.3)' }}>
              LAUNCH APP →
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="relative pt-28 pb-24 overflow-hidden min-h-[90vh] flex items-center">
          {/* Hex bg */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 800 600">
            <defs><pattern id="hex" width="60" height="52" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon points="30,1 55,15 55,37 30,51 5,37 5,15" fill="none" stroke="#a855f7" strokeWidth="0.5"/>
            </pattern></defs>
            <rect width="100%" height="100%" fill="url(#hex)"/>
          </svg>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
            style={{ background: 'radial-gradient(ellipse,rgba(236,72,153,0.1) 0%,rgba(168,85,247,0.05) 40%,transparent 70%)' }}/>

          <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border" style={{
                background: 'rgba(236,72,153,0.08)', borderColor: 'rgba(236,72,153,0.2)',
              }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"/>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"/>
                </span>
                <span className="font-jb text-xs text-pink-300">LIVE: 15,000+ CARDS INDEXED</span>
              </div>

              <h1 className="font-cyber text-5xl lg:text-7xl font-black tracking-tight leading-[0.9]">
                <span className="block text-white">KNOW THE</span>
                <span className="block text-purple-400 mt-2">PRICE</span>
                <span className="block relative mt-2">
                  <span className="text-transparent bg-clip-text" style={{
                    backgroundImage: 'linear-gradient(135deg,#ec4899,#d946ef,#a855f7)',
                  }}>BEFORE YOU TRADE</span>
                  <div className="mt-2 h-1 w-56 rounded-full kc-underline opacity-60"/>
                </span>
              </h1>

              <p className="font-raj text-xl text-purple-200/70 leading-relaxed max-w-xl">
                Free Pokémon TCG price lookup, barcode scanner, and trade analyzer.
                Real-time TCGplayer + Cardmarket data. No account needed.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="https://cards.123automateme.com" target="_blank" rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl font-raj font-bold text-lg tracking-wide text-white transition-all hover:scale-105 flex items-center gap-3"
                  style={{ background: 'linear-gradient(135deg,#ec4899,#d946ef)', boxShadow: '0 0 30px rgba(236,72,153,0.4)' }}>
                  TRY IT FREE <ArrowRight className="w-5 h-5"/>
                </a>
                <a href="#features" className="px-8 py-4 rounded-xl border font-raj font-bold text-lg text-purple-300 hover:text-white hover:border-pink-500/50 transition-all"
                  style={{ borderColor: 'var(--kc-border)' }}>
                  SEE FEATURES
                </a>
              </div>

              <div className="flex flex-wrap gap-6 font-jb text-xs text-purple-400/60">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-pink-400"/>pokemontcg.io API</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-pink-400"/>TCGplayer + Cardmarket</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-pink-400"/>No account needed</div>
              </div>
            </div>

            {/* Floating card preview */}
            <div className="relative hidden lg:block">
              <div className="relative z-30 kc-float mx-auto">
                <div className="rounded-2xl border p-6 kc-neon" style={{
                  background: 'linear-gradient(160deg,rgba(236,72,153,0.15),rgba(168,85,247,0.1))',
                  borderColor: 'rgba(236,72,153,0.3)',
                }}>
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b" style={{ borderColor: 'var(--kc-border)' }}>
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/60"/>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60"/>
                      <div className="w-3 h-3 rounded-full bg-green-500/60"/>
                    </div>
                    <div className="flex-1 px-3 py-1.5 rounded-lg font-jb text-[10px] text-purple-400" style={{ background: 'rgba(10,5,20,0.5)' }}>
                      cards.123automateme.com
                    </div>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl mb-4" style={{
                    background: 'rgba(10,5,20,0.5)', border: '1px solid var(--kc-border)',
                  }}>
                    <Search className="w-4 h-4 text-purple-400"/>
                    <span className="font-raj text-sm text-purple-200/60 flex-1">Charizard ex</span>
                  </div>
                  <div className="rounded-xl p-4 mb-3" style={{
                    background: 'linear-gradient(135deg,rgba(236,72,153,0.1),rgba(168,85,247,0.08))',
                    border: '1px solid rgba(236,72,153,0.2)',
                  }}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-jb text-[10px] text-pink-400">sv6 · 006/165</div>
                        <div className="font-cyber text-lg font-bold text-white">Charizard ex</div>
                      </div>
                      <div className="px-3 py-1.5 rounded-lg" style={{
                        background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.3)',
                      }}>
                        <span className="font-cyber text-sm text-pink-300">$619.22</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-3 border-t" style={{ borderColor: 'var(--kc-border)' }}>
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
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{
                    background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)',
                  }}>
                    <Activity className="w-4 h-4 text-green-400"/>
                    <span className="font-jb text-xs text-green-400">+12.4% this month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-16 border-y" style={{ borderColor: 'var(--kc-border)' }}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-transparent bg-clip-text mb-2"
                  style={{ backgroundImage: 'linear-gradient(135deg,#ec4899,#a855f7)' }}>
                  {s.value}
                </div>
                <div className="font-raj text-sm text-white">{s.label}</div>
                <div className="font-jb text-[10px] text-purple-500">{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES BENTO */}
        <section id="features" className="py-32 border-t" style={{ borderColor: 'var(--kc-border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">THREE TOOLS. ZERO ACCOUNTS.</h2>
              <p className="font-raj text-xl text-purple-300/60">Everything you need to trade smarter.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/40" style={{
                  background: 'var(--kc-card)', borderColor: 'var(--kc-border)',
                }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{
                    background: `${f.color}15`, border: `1px solid ${f.color}30`,
                  }}>
                    <f.icon className="w-7 h-7" style={{ color: f.color }}/>
                  </div>
                  <h3 className="font-cyber text-lg font-bold tracking-wide text-white mb-3">{f.title}</h3>
                  <p className="font-raj text-purple-300/60 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-32 border-t" style={{ borderColor: 'var(--kc-border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">THREE STEPS TO A FAIR TRADE</h2>
              <p className="font-raj text-xl text-purple-300/60">No guesswork. No arguments. Just data.</p>
            </div>
            <div className="space-y-16">
              {steps.map((s, i) => (
                <div key={i} className={`grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="inline-flex items-center gap-3 mb-6">
                      <span className="font-cyber text-3xl font-black text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(135deg,#ec4899,#a855f7)' }}>{s.n}</span>
                      <div className="w-12 h-px bg-gradient-to-r from-pink-500 to-transparent"/>
                    </div>
                    <h3 className="font-cyber text-2xl font-bold tracking-tight text-white mb-4">{s.t}</h3>
                    <p className="font-raj text-lg text-purple-300/60 leading-relaxed">{s.d}</p>
                  </div>
                  <div className={`rounded-2xl border p-6 ${i % 2 === 1 ? 'lg:col-start-1' : ''}`} style={{
                    background: 'var(--kc-card)', borderColor: 'var(--kc-border)',
                  }}>
                    {i === 0 && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: 'rgba(10,5,20,0.5)', border: '1px solid var(--kc-border)' }}>
                          <Search className="w-4 h-4 text-pink-400"/><span className="font-raj text-sm text-purple-200/60">Charizard ex sv6</span>
                        </div>
                        {['Charizard ex (sv6) · $619.22', 'Charizard VMAX (swsh3) · $89.50', 'Charizard GX (sm3) · $42.10'].map((c, j) => (
                          <div key={j} className="px-4 py-3 rounded-lg flex items-center justify-between" style={{
                            background: 'rgba(15,8,30,0.5)', border: '1px solid var(--kc-border)',
                          }}>
                            <span className="font-raj text-sm text-white">{c}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {i === 1 && (
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between font-jb text-xs text-purple-400 mb-2"><span>30-day trend</span><span className="text-green-400">+12.4%</span></div>
                          <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(168,85,247,0.1)' }}>
                            <div className="h-full w-3/4 rounded-full" style={{ background: 'linear-gradient(90deg,#ec4899,#a855f7)' }}/>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between font-jb text-xs text-purple-400 mb-2"><span>Market spread</span><span className="text-orange-400">6.8%</span></div>
                          <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(168,85,247,0.1)' }}>
                            <div className="h-full w-1/4 rounded-full" style={{ background: 'linear-gradient(90deg,#fb923c,#ef4444)' }}/>
                          </div>
                        </div>
                      </div>
                    )}
                    {i === 2 && (
                      <div>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="rounded-xl p-4" style={{ background: 'rgba(15,8,30,0.5)', border: '1px solid var(--kc-border)' }}>
                            <div className="font-jb text-[10px] text-purple-500 mb-1">YOU GIVE</div>
                            <div className="font-raj font-bold text-white mb-1">Pikachu VMAX</div>
                            <div className="font-cyber text-lg text-green-400">$45.20</div>
                          </div>
                          <div className="rounded-xl p-4" style={{ background: 'rgba(15,8,30,0.5)', border: '1px solid var(--kc-border)' }}>
                            <div className="font-jb text-[10px] text-purple-500 mb-1">YOU GET</div>
                            <div className="font-raj font-bold text-white mb-1">Charizard ex</div>
                            <div className="font-cyber text-lg text-pink-400">$619.22</div>
                          </div>
                        </div>
                        <div className="rounded-xl p-3 text-center" style={{
                          background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)',
                        }}>
                          <div className="font-raj font-bold text-green-400">You win by $574.02</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 border-t" style={{ borderColor: 'var(--kc-border)' }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white">FAQ</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="group rounded-xl border overflow-hidden" style={{
                  background: 'var(--kc-card)', borderColor: 'var(--kc-border)',
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

        {/* FINAL CTA */}
        <section className="py-32 border-t" style={{ borderColor: 'var(--kc-border)' }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-cyber text-4xl lg:text-6xl font-black tracking-tight text-white mb-6">READY TO TRADE SMARTER?</h2>
            <p className="font-raj text-xl text-purple-300/60 mb-8">No account. No payment. Just real-time card pricing in your browser.</p>
            <a href="https://cards.123automateme.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-raj font-bold text-lg text-white transition-all hover:scale-105 mb-8"
              style={{ background: 'linear-gradient(135deg,#ec4899,#d946ef)', boxShadow: '0 0 30px rgba(236,72,153,0.3)' }}>
              LAUNCH KAIO&apos;S CARDS <ArrowRight className="w-5 h-5"/>
            </a>
            <div className="flex flex-wrap justify-center gap-6 font-jb text-xs text-purple-400/50">
              <span className="flex items-center gap-2"><Globe className="w-3 h-3 text-pink-400"/>cards.123automateme.com</span>
              <span className="flex items-center gap-2"><Shield className="w-3 h-3 text-pink-400"/>No tracking, no cookies</span>
              <span className="flex items-center gap-2"><Clock className="w-3 h-3 text-pink-400"/>Updated every 24h</span>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t py-12" style={{ borderColor: 'var(--kc-border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg,#ec4899,#a855f7)',
                }}>
                  <Gamepad2 className="w-4 h-4 text-white"/>
                </div>
                <div>
                  <span className="font-cyber font-bold text-sm text-white">KAIO&apos;S CARDS</span>
                  <span className="font-jb text-[10px] text-purple-500 ml-3">by 123automateme.com</span>
                </div>
              </div>
              <div className="flex gap-6 font-raj text-sm text-purple-300/50">
                <Link href="/" className="hover:text-pink-400 transition-colors">About</Link>
                <Link href="/kaios-cards" className="hover:text-pink-400 transition-colors">Features</Link>
                <Link href="/privacy" className="hover:text-pink-400 transition-colors">Privacy</Link>
              </div>
              <span className="font-jb text-[10px] text-purple-500">
                Pokémon TCG data from pokemontcg.io · Prices from TCGplayer + Cardmarket
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
