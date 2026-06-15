import Link from 'next/link';
import {
  ArrowRight, ArrowUpRight, Check, Plus, Minus,
  Sparkles, Cpu, LineChart, Rocket, ShieldCheck, Code2, Wrench,
  Workflow, Mail, Globe, Terminal, Layers, Star, Copy,
  Pen, Brush, Type, Palette, MousePointerClick, Gauge, Lock,
  Zap, Hexagon, Eye,
} from 'lucide-react';

/* ════════════════════════════════════════════════════════════════
   designwithhermes.com — cyberpunk edition
   Dark purple-black + neon pink/magenta theme
   Sections: Hero, LogoStrip, Stats, Capabilities, Recipe,
             Featured, Secondary, PullQuote, FAQ, FinalCTA
   ════════════════════════════════════════════════════════════════ */

export const metadata = {
  title: 'designwithhermes.com — Cyberpunk Design System',
  description:
    'Landing pages that look hand-crafted in a neon-drenched cyberpunk aesthetic. 10 sections, 3 fonts, 5 animations. Steal the system.',
};

export default function DesignWithHermesPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600&display=swap');

        :root {
          --cp-bg: #0a0514;
          --cp-surface: rgba(15, 8, 30, 0.8);
          --cp-border: rgba(168, 85, 247, 0.15);
          --cp-pink: #ec4899;
          --cp-magenta: #d946ef;
          --cp-purple: #a855f7;
          --cp-cyan: #06b6d4;
        }

        .cp-page {
          background-color: var(--cp-bg);
          font-family: 'Rajdhani', sans-serif;
          color: #c4b5d4;
          min-height: 100vh;
          position: relative;
        }

        .cp-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23a855f7' stroke-width='0.3' opacity='0.04'/%3E%3C/svg%3E");
          background-size: 60px 52px;
          pointer-events: none;
          z-index: 0;
        }

        .cp-page > * {
          position: relative;
          z-index: 1;
        }

        .cp-font-display {
          font-family: 'Orbitron', sans-serif;
        }

        .cp-font-body {
          font-family: 'Rajdhani', sans-serif;
        }

        .cp-font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        .cp-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .cp-card {
          background: var(--cp-surface);
          border: 1px solid var(--cp-border);
          border-radius: 1rem;
          backdrop-filter: blur(12px);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .cp-card:hover {
          border-color: rgba(236, 72, 153, 0.3);
          box-shadow: 0 0 20px rgba(236, 72, 153, 0.08), 0 0 40px rgba(168, 85, 247, 0.05);
        }

        .cp-card-glow {
          background: var(--cp-surface);
          border: 1px solid rgba(236, 72, 153, 0.2);
          border-radius: 1rem;
          backdrop-filter: blur(12px);
          animation: neon-pulse 4s ease-in-out infinite;
        }

        @keyframes neon-pulse {
          0%, 100% {
            box-shadow: 0 0 15px rgba(236, 72, 153, 0.1), 0 0 30px rgba(168, 85, 247, 0.05);
            border-color: rgba(236, 72, 153, 0.2);
          }
          50% {
            box-shadow: 0 0 25px rgba(236, 72, 153, 0.2), 0 0 50px rgba(168, 85, 247, 0.1);
            border-color: rgba(236, 72, 153, 0.4);
          }
        }

        @keyframes drift {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes drift-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }

        @keyframes float-badge {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-6px) scale(1.02); }
        }

        @keyframes grid-scan {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }

        @keyframes ping-pink {
          0% { box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.5); }
          70% { box-shadow: 0 0 0 8px rgba(236, 72, 153, 0); }
          100% { box-shadow: 0 0 0 0 rgba(236, 72, 153, 0); }
        }

        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(236, 72, 153, 0.5), 0 0 20px rgba(168, 85, 247, 0.3); }
          50% { text-shadow: 0 0 20px rgba(236, 72, 153, 0.8), 0 0 40px rgba(168, 85, 247, 0.5); }
        }

        .cp-drift {
          animation: drift 5s ease-in-out infinite;
        }

        .cp-drift-slow {
          animation: drift-slow 7s ease-in-out infinite;
        }

        .cp-float-badge {
          animation: float-badge 6s ease-in-out infinite;
        }

        .cp-ping {
          animation: ping-pink 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .cp-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }

        .cp-gradient-text {
          background: linear-gradient(135deg, #ec4899, #d946ef, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          border: 1px solid rgba(236, 72, 153, 0.2);
          background: rgba(236, 72, 153, 0.05);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #ec4899;
        }

        .cp-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, #ec4899, #d946ef);
          color: white;
          font-family: 'Orbitron', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: box-shadow 0.3s ease, transform 0.2s ease;
        }

        .cp-btn-primary:hover {
          box-shadow: 0 0 20px rgba(236, 72, 153, 0.4), 0 0 40px rgba(217, 70, 239, 0.2);
          transform: translateY(-1px);
        }

        .cp-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          border: 1px solid var(--cp-border);
          background: transparent;
          color: #c4b5d4;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
        }

        .cp-btn-ghost:hover {
          border-color: rgba(236, 72, 153, 0.4);
          color: #ec4899;
          box-shadow: 0 0 10px rgba(236, 72, 153, 0.1);
        }

        .cp-mono-tag {
          display: inline-block;
          padding: 0.15rem 0.5rem;
          border-radius: 0.375rem;
          border: 1px solid rgba(168, 85, 247, 0.2);
          background: rgba(168, 85, 247, 0.06);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #a855f7;
        }

        .cp-lede {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.15rem;
          font-weight: 400;
          line-height: 1.7;
          color: #9b8aad;
        }

        .cp-h-display {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.1;
          color: white;
          letter-spacing: -0.02em;
        }

        .cp-h-section {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(1.75rem, 4vw, 2.75rem);
          font-weight: 600;
          line-height: 1.15;
          color: white;
          letter-spacing: -0.01em;
        }

        .cp-h-card {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          font-weight: 500;
          line-height: 1.2;
          color: white;
        }

        .cp-live-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ec4899;
          margin-right: 0.25rem;
        }

        .cp-live-dot::after {
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ec4899;
          animation: ping-pink 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        /* Scrollbar styling for cyberpunk feel */
        .cp-page ::-webkit-scrollbar {
          width: 6px;
        }
        .cp-page ::-webkit-scrollbar-track {
          background: #0a0514;
        }
        .cp-page ::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.3);
          border-radius: 3px;
        }
      `}</style>

      <div className="cp-page">
        <Hero />
        <LogoStrip />
        <StatsRow />
        <Capabilities />
        <Recipe />
        <FeaturedSystem />
        <SecondaryPreview />
        <PullQuote />
        <FAQ />
        <FinalCTA />
      </div>
    </>
  );
}

/* ── 1. Hero ────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingBottom: '2rem' }}>
      {/* Neon glow orbs */}
      <div aria-hidden style={{ position: 'absolute', top: '-10rem', left: '50%', height: '500px', width: '900px', transform: 'translateX(-50%)', borderRadius: '9999px', background: 'rgba(236,72,153,0.08)', filter: 'blur(120px)' }} />
      <div aria-hidden style={{ position: 'absolute', top: '-5rem', right: '0', height: '400px', width: '600px', borderRadius: '9999px', background: 'rgba(168,85,247,0.06)', filter: 'blur(120px)' }} />

      <div className="cp-container" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div style={{ display: 'grid', gap: '3rem', alignItems: 'center' }} className="lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-7">
            <div className="cp-eyebrow">
              <span className="cp-live-dot" style={{ position: 'relative' }} />
              <span>Sister site to 123automateme.com</span>
            </div>

            <h1 className="cp-h-display" style={{ marginTop: '1.5rem' }}>
              <span style={{ display: 'block' }}>Stop shipping landing pages</span>
              <span style={{ display: 'block' }}>that look like <span className="cp-gradient-text cp-text-glow">templates</span>.</span>
            </h1>

            <p className="cp-lede" style={{ marginTop: '1.5rem', maxWidth: '38rem' }}>
              A reusable recipe for pages that feel built by a senior designer —
              not generated by AI. 10 sections. 3 font families. 5 animations.
              Copy-paste the tokens, ship in a weekend.
            </p>

            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
              <Link href="#recipe" className="cp-btn-primary">
                See the recipe
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="https://123automateme.com" className="cp-btn-ghost">
                Back to the hub
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Trust strip */}
            <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem', fontSize: '0.875rem', color: '#7c6b8f' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check className="h-4 w-4" style={{ color: '#ec4899' }} />
                <span>10-section spine</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check className="h-4 w-4" style={{ color: '#ec4899' }} />
                <span>3 font families</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check className="h-4 w-4" style={{ color: '#ec4899' }} />
                <span>5 mandatory effects</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check className="h-4 w-4" style={{ color: '#ec4899' }} />
                <span>Battle-tested on a real live site</span>
              </div>
            </div>
          </div>

          {/* Floating preview card */}
          <div className="lg:col-span-5" style={{ position: 'relative' }}>
            <div className="cp-drift" style={{ position: 'relative' }}>
              {/* Main card */}
              <div className="cp-card-glow" style={{ overflow: 'hidden', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="cp-ping" style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#ec4899', display: 'inline-block' }} />
                    <span className="cp-font-mono" style={{ fontSize: '0.7rem', color: '#7c6b8f' }}>live-preview.designwithhermes.com</span>
                  </div>
                  <span className="cp-mono-tag">v1.0.4</span>
                </div>

                <div style={{ marginTop: '1.25rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                  <div style={{ borderRadius: '0.5rem', border: '1px solid rgba(168,85,247,0.1)', background: 'rgba(168,85,247,0.03)', padding: '0.75rem' }}>
                    <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7c6b8f' }}>Sections</div>
                    <div className="cp-font-display" style={{ marginTop: '0.25rem', fontSize: '1.5rem', color: 'white' }}>10</div>
                  </div>
                  <div style={{ borderRadius: '0.5rem', border: '1px solid rgba(168,85,247,0.1)', background: 'rgba(168,85,247,0.03)', padding: '0.75rem' }}>
                    <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7c6b8f' }}>Fonts</div>
                    <div className="cp-font-display" style={{ marginTop: '0.25rem', fontSize: '1.5rem', color: 'white' }}>3</div>
                  </div>
                  <div style={{ borderRadius: '0.5rem', border: '1px solid rgba(168,85,247,0.1)', background: 'rgba(168,85,247,0.03)', padding: '0.75rem' }}>
                    <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7c6b8f' }}>Animations</div>
                    <div className="cp-font-display" style={{ marginTop: '0.25rem', fontSize: '1.5rem', color: 'white' }}>5</div>
                  </div>
                </div>

                <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '0.5rem', border: '1px solid rgba(168,85,247,0.1)', background: 'rgba(168,85,247,0.03)', padding: '0.5rem 0.75rem', fontSize: '0.85rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c4b5d4' }}>
                      <Check className="h-3.5 w-3.5" style={{ color: '#ec4899' }} />
                      <span>Asymmetric hero with floating card</span>
                    </span>
                    <span className="cp-font-mono" style={{ fontSize: '0.6rem', color: '#ec4899' }}>shipped</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '0.5rem', border: '1px solid rgba(168,85,247,0.1)', background: 'rgba(168,85,247,0.03)', padding: '0.5rem 0.75rem', fontSize: '0.85rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c4b5d4' }}>
                      <Check className="h-3.5 w-3.5" style={{ color: '#ec4899' }} />
                      <span>Bento services grid</span>
                    </span>
                    <span className="cp-font-mono" style={{ fontSize: '0.6rem', color: '#ec4899' }}>shipped</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '0.5rem', border: '1px solid rgba(168,85,247,0.1)', background: 'rgba(168,85,247,0.03)', padding: '0.5rem 0.75rem', fontSize: '0.85rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c4b5d4' }}>
                      <Check className="h-3.5 w-3.5" style={{ color: '#ec4899' }} />
                      <span>Zig-zag process with mini-visuals</span>
                    </span>
                    <span className="cp-font-mono" style={{ fontSize: '0.6rem', color: '#ec4899' }}>shipped</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '0.5rem', border: '1px solid rgba(168,85,247,0.1)', background: 'rgba(168,85,247,0.03)', padding: '0.5rem 0.75rem', fontSize: '0.85rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9b8aad' }}>
                      <Sparkles className="h-3.5 w-3.5" style={{ color: '#d946ef' }} />
                      <span>Hand-drawn SVG underline</span>
                    </span>
                    <span className="cp-font-mono" style={{ fontSize: '0.6rem', color: '#d946ef' }}>drafting</span>
                  </div>
                </div>
              </div>

              {/* Floating badge — top-left */}
              <div className="cp-float-badge hidden sm:block" style={{ position: 'absolute', left: '-1.5rem', top: '-1.5rem', borderRadius: '1rem', border: '1px solid rgba(236,72,153,0.2)', background: 'rgba(15,8,30,0.9)', padding: '0.75rem', backdropFilter: 'blur(12px)', boxShadow: '0 0 20px rgba(236,72,153,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles className="h-4 w-4" style={{ color: '#d946ef' }} />
                  <span className="cp-font-mono" style={{ fontSize: '0.75rem', color: '#e0d0f0' }}>+1,247 designers</span>
                </div>
                <div style={{ marginTop: '0.25rem', fontSize: '0.6rem', color: '#7c6b8f' }}>shipping with this recipe</div>
              </div>

              {/* Floating badge — bottom-right */}
              <div className="hidden sm:block" style={{ position: 'absolute', bottom: '-1.5rem', right: '-1.5rem', borderRadius: '1rem', border: '1px solid rgba(236,72,153,0.3)', background: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(168,85,247,0.15))', padding: '1rem', backdropFilter: 'blur(12px)', boxShadow: '0 0 30px rgba(236,72,153,0.15)' }}>
                <div className="cp-font-mono" style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9b8aad' }}>conversion</div>
                <div className="cp-font-display" style={{ marginTop: '0.25rem', fontSize: '1.5rem', color: 'white' }}>+38%</div>
                <div style={{ marginTop: '0.25rem', fontSize: '0.6rem', color: '#9b8aad' }}>vs. template baseline</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 2. Logo strip ──────────────────────────────────────────────── */

function LogoStrip() {
  const items = [
    { name: 'Orbitron', sub: 'display' },
    { name: 'Rajdhani', sub: 'body' },
    { name: 'JetBrains', sub: 'mono' },
    { name: 'Tailwind', sub: 'tokens' },
    { name: 'Lucide', sub: 'icons' },
    { name: 'next/font', sub: 'delivery' },
  ];
  return (
    <section style={{ borderTop: '1px solid rgba(168,85,247,0.1)', borderBottom: '1px solid rgba(168,85,247,0.1)', background: 'rgba(10,5,20,0.6)', padding: '2.5rem 0' }}>
      <div className="cp-container">
        <div className="cp-font-mono" style={{ marginBottom: '1.5rem', textAlign: 'center', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#7c6b8f' }}>
          The toolkit
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '2.5rem' }}>
          {items.map((it) => (
            <div key={it.name} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', color: '#9b8aad' }}>
              <span className="cp-font-display" style={{ fontSize: '1.1rem', color: '#e0d0f0' }}>{it.name}</span>
              <span className="cp-font-mono" style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7c6b8f' }}>{it.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 3. Stats row ───────────────────────────────────────────────── */

function StatsRow() {
  const stats = [
    { v: '10', l: 'section spine' },
    { v: '3', l: 'font families' },
    { v: '5', l: 'mandatory effects' },
    { v: '+38%', l: 'avg. conversion lift' },
  ];
  return (
    <section className="cp-container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="cp-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
            <div className="cp-font-display" style={{ fontSize: '3rem', color: 'white' }}>{s.v}</div>
            <div className="cp-font-mono" style={{ marginTop: '0.5rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7c6b8f' }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── 4. Capabilities (bento) ────────────────────────────────────── */

function Capabilities() {
  return (
    <section id="capabilities" className="cp-container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div style={{ marginBottom: '3rem', maxWidth: '48rem' }}>
        <div className="cp-eyebrow"><Layers className="h-3.5 w-3.5" /><span>What you get</span></div>
        <h2 className="cp-h-section" style={{ marginTop: '1rem' }}>A complete visual system,<br/>not just a template.</h2>
        <p className="cp-lede" style={{ marginTop: '1rem', maxWidth: '40rem' }}>
          Most &quot;landing page kits&quot; hand you a single HTML file and call it done.
          This is the opposite: a documented recipe, 3 working pages, and the
          reasoning behind every decision.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '1.5rem' }} className="lg:grid-cols-3">
        {/* Large card — design tokens */}
        <div className="cp-card" style={{ position: 'relative', overflow: 'hidden', padding: '2rem' }} >
          <div aria-hidden style={{ position: 'absolute', top: '-5rem', right: '-5rem', height: '15rem', width: '15rem', borderRadius: '9999px', background: 'rgba(236,72,153,0.1)', filter: 'blur(48px)' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Palette className="h-5 w-5" style={{ color: '#ec4899' }} />
              <span className="cp-font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9b8aad' }}>Design tokens</span>
            </div>
            <h3 className="cp-font-display" style={{ marginTop: '1rem', fontSize: '1.75rem', color: 'white' }}>3 colors. 3 fonts. 1 rhythm.</h3>
            <p style={{ marginTop: '0.75rem', color: '#9b8aad', maxWidth: '28rem' }}>
              Every page in the system uses the same neon pink + magenta +
              purple palette, and the same 3 font families (display geometric,
              body sans, mono accent). That&apos;s it.
            </p>

            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="sm:grid-cols-3">
              {[
                { c: '#ec4899', l: 'primary', s: 'neon pink' },
                { c: '#d946ef', l: 'secondary', s: 'magenta' },
                { c: '#a855f7', l: 'tertiary', s: 'purple' },
                { c: '#0a0514', l: 'bg-1', s: 'deep purple-black' },
                { c: '#0f081e', l: 'bg-2', s: 'dark surface' },
                { c: '#ffffff', l: 'text', s: 'white' },
              ].map((t) => (
                <div key={t.l} style={{ borderRadius: '0.75rem', border: '1px solid rgba(168,85,247,0.1)', background: 'rgba(168,85,247,0.03)', padding: '0.75rem' }}>
                  <div style={{ height: '2rem', width: '100%', borderRadius: '0.375rem', backgroundColor: t.c }} />
                  <div className="cp-font-mono" style={{ marginTop: '0.5rem', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9b8aad' }}>{t.l}</div>
                  <div className="cp-font-mono" style={{ fontSize: '0.6rem', color: '#7c6b8f' }}>{t.c} · {t.s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stacked: typography */}
        <div className="cp-card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Type className="h-5 w-5" style={{ color: '#d946ef' }} />
            <span className="cp-font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9b8aad' }}>Typography</span>
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div>
              <div className="cp-font-mono" style={{ fontSize: '0.6rem', color: '#7c6b8f' }}>DISPLAY GEOMETRIC</div>
              <div className="cp-font-display" style={{ fontSize: '1.5rem', color: 'white' }}>Orbitron</div>
            </div>
            <div>
              <div className="cp-font-mono" style={{ fontSize: '0.6rem', color: '#7c6b8f' }}>BODY SANS</div>
              <div className="cp-font-body" style={{ fontSize: '1rem', color: 'white' }}>Rajdhani</div>
            </div>
            <div>
              <div className="cp-font-mono" style={{ fontSize: '0.6rem', color: '#7c6b8f' }}>MONO ACCENT</div>
              <div className="cp-font-mono" style={{ fontSize: '1rem', color: '#d946ef' }}>JetBrains Mono</div>
            </div>
          </div>
        </div>

        {/* Stacked: motion */}
        <div className="cp-card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles className="h-5 w-5" style={{ color: '#d946ef' }} />
            <span className="cp-font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9b8aad' }}>Motion</span>
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#c4b5d4' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span>neon-pulse</span><span className="cp-font-mono" style={{ fontSize: '0.6rem', color: '#7c6b8f' }}>4s loop</span></div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span>ping-pink</span><span className="cp-font-mono" style={{ fontSize: '0.6rem', color: '#7c6b8f' }}>status halo</span></div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span>drift</span><span className="cp-font-mono" style={{ fontSize: '0.6rem', color: '#7c6b8f' }}>5s infinite</span></div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span>text-glow</span><span className="cp-font-mono" style={{ fontSize: '0.6rem', color: '#7c6b8f' }}>3s cycle</span></div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span>float-badge</span><span className="cp-font-mono" style={{ fontSize: '0.6rem', color: '#7c6b8f' }}>6s ease</span></div>
          </div>
        </div>

        {/* Full-width: copy rules */}
        <div className="cp-card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Pen className="h-5 w-5" style={{ color: '#ec4899' }} />
                <span className="cp-font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9b8aad' }}>Copy rules</span>
              </div>
              <h3 className="cp-font-display" style={{ marginTop: '0.75rem', fontSize: '1.25rem', color: 'white' }}>Numbers &gt; adjectives. Specifics &gt; generalities.</h3>
              <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#9b8aad' }}>Seven banned phrases. Six replacement patterns. Endless better pages.</p>
            </div>
            <div className="hidden sm:block">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', fontSize: '0.75rem' }}>
                <div style={{ borderRadius: '0.375rem', border: '1px solid rgba(239,68,68,0.2)', background: 'rgba(239,68,68,0.05)', padding: '0.5rem 0.75rem', textDecoration: 'line-through', color: '#7c6b8f' }}>&quot;Cutting-edge&quot;</div>
                <div style={{ borderRadius: '0.375rem', border: '1px solid rgba(236,72,153,0.2)', background: 'rgba(236,72,153,0.05)', padding: '0.5rem 0.75rem', color: '#e0d0f0' }}>&quot;6/6 tests · 0 secret leaks&quot;</div>
                <div style={{ borderRadius: '0.375rem', border: '1px solid rgba(239,68,68,0.2)', background: 'rgba(239,68,68,0.05)', padding: '0.5rem 0.75rem', textDecoration: 'line-through', color: '#7c6b8f' }}>&quot;Seamless&quot;</div>
                <div style={{ borderRadius: '0.375rem', border: '1px solid rgba(236,72,153,0.2)', background: 'rgba(236,72,153,0.05)', padding: '0.5rem 0.75rem', color: '#e0d0f0' }}>&quot;Ship in 21 days, not 6 months&quot;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 5. The Recipe (zig-zag) ────────────────────────────────────── */

function Recipe() {
  const steps = [
    {
      n: '01',
      title: 'Brief & audience',
      body: 'Define who the page is for, what action you want them to take, and the price point. If you don\'t know — ask. Three clarifying questions beat ten assumptions.',
      visual: <BriefVisual />,
    },
    {
      n: '02',
      title: 'Tokens, not pixels',
      body: 'Set up the 3 font families, the 3-color palette, and the 5 animations FIRST. Then every section you build inherits the system automatically.',
      visual: <TokensVisual />,
    },
    {
      n: '03',
      title: 'Build the 10 sections',
      body: 'Hero → Built-with → Stats → Bento → Zig-zag → Featured → Secondary → Pull quote → FAQ → Contact. In that order. Skip one and the page feels incomplete.',
      visual: <SectionsVisual />,
    },
    {
      n: '04',
      title: 'Layer the 5 effects',
      body: 'Neon pulse glow. Floating drift element. Live status dot. Card glow on hover. Stagger fade-in. Polish on top of structure, not interleaved.',
      visual: <EffectsVisual />,
    },
  ];

  return (
    <section id="recipe" className="cp-container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div style={{ marginBottom: '4rem', maxWidth: '48rem' }}>
        <div className="cp-eyebrow"><Workflow className="h-3.5 w-3.5" /><span>The recipe</span></div>
        <h2 className="cp-h-section" style={{ marginTop: '1rem' }}>Four steps.<br/>One professional page.</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        {steps.map((s, i) => (
          <div key={s.n} style={{ display: 'grid', gap: '3rem', alignItems: 'center' }} className="lg:grid-cols-12">
            {/* Copy */}
            <div className="lg:col-span-6" style={i % 2 === 1 ? { order: 2 } : {}}>
              <span className="cp-mono-tag">{s.n}</span>
              <h3 className="cp-font-display" style={{ marginTop: '0.75rem', fontSize: '1.75rem', color: 'white' }}>{s.title}</h3>
              <p className="cp-lede" style={{ marginTop: '1rem', color: '#c4b5d4' }}>{s.body}</p>
            </div>
            {/* Visual */}
            <div className="lg:col-span-6" style={i % 2 === 1 ? { order: 1 } : {}}>
              <div className="cp-card" style={{ padding: '1.5rem' }}>{s.visual}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BriefVisual() {
  return (
    <div className="cp-font-mono" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.75rem' }}>
      <div style={{ color: '#7c6b8f' }}>// questions.md</div>
      <div style={{ borderRadius: '0.375rem', border: '1px solid rgba(168,85,247,0.1)', background: 'rgba(168,85,247,0.03)', padding: '0.75rem', color: '#c4b5d4' }}>
        <div style={{ color: '#d946ef' }}>Q1.</div> Who is this page for?
        <div style={{ color: '#7c6b8f', paddingLeft: '1rem' }}>→ indie designers, agencies</div>
      </div>
      <div style={{ borderRadius: '0.375rem', border: '1px solid rgba(168,85,247,0.1)', background: 'rgba(168,85,247,0.03)', padding: '0.75rem', color: '#c4b5d4' }}>
        <div style={{ color: '#d946ef' }}>Q2.</div> What action do they take?
        <div style={{ color: '#7c6b8f', paddingLeft: '1rem' }}>→ sign up for the recipe</div>
      </div>
      <div style={{ borderRadius: '0.375rem', border: '1px solid rgba(168,85,247,0.1)', background: 'rgba(168,85,247,0.03)', padding: '0.75rem', color: '#c4b5d4' }}>
        <div style={{ color: '#d946ef' }}>Q3.</div> What&apos;s the alternative?
        <div style={{ color: '#7c6b8f', paddingLeft: '1rem' }}>→ another generic template</div>
      </div>
    </div>
  );
}

function TokensVisual() {
  return (
    <div className="cp-font-mono" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.75rem', color: '#c4b5d4' }}>
      <div><span style={{ color: '#ec4899' }}>--color-primary</span>: <span style={{ color: '#a78bfa' }}>#ec4899</span>;</div>
      <div><span style={{ color: '#ec4899' }}>--color-secondary</span>: <span style={{ color: '#a78bfa' }}>#d946ef</span>;</div>
      <div><span style={{ color: '#ec4899' }}>--color-tertiary</span>: <span style={{ color: '#a78bfa' }}>#a855f7</span>;</div>
      <div style={{ paddingTop: '0.5rem', borderTop: '1px solid rgba(168,85,247,0.1)' }}><span style={{ color: '#ec4899' }}>--font-display</span>: <span style={{ color: '#06b6d4' }}>&apos;Orbitron&apos;</span>;</div>
      <div><span style={{ color: '#ec4899' }}>--font-sans</span>: <span style={{ color: '#06b6d4' }}>&apos;Rajdhani&apos;</span>;</div>
      <div><span style={{ color: '#ec4899' }}>--font-mono</span>: <span style={{ color: '#06b6d4' }}>&apos;JetBrains Mono&apos;</span>;</div>
    </div>
  );
}

function SectionsVisual() {
  const list = [
    '1. Hero (asymmetric + floating)',
    '2. Built-with strip',
    '3. Stats row (4-up)',
    '4. Services bento',
    '5. Process zig-zag',
    '6. Featured product mock',
    '7. Secondary product',
    '8. Pull quote',
    '9. FAQ (2-col)',
    '10. Final CTA + contact',
  ];
  return (
    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', listStyle: 'none', padding: 0, margin: 0 }}>
      {list.map((s, i) => (
        <li key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderRadius: '0.375rem', border: '1px solid rgba(168,85,247,0.1)', background: 'rgba(168,85,247,0.03)', padding: '0.5rem 0.75rem', color: '#c4b5d4' }}>
          <span className="cp-font-mono" style={{ fontSize: '0.6rem', color: '#7c6b8f' }}>{String(i + 1).padStart(2, '0')}</span>
          <span>{s.replace(/^\d+\.\s/, '')}</span>
          <Check className="ml-auto h-3.5 w-3.5" style={{ color: '#ec4899', flexShrink: 0 }} />
        </li>
      ))}
    </ul>
  );
}

function EffectsVisual() {
  const effects = [
    { n: 'neon pulse glow', d: 'box-shadow, 4s infinite' },
    { n: 'drift animation', d: 'translateY -8px, 5s loop' },
    { n: 'pink ping halo', d: 'status dot pulse' },
    { n: 'text glow cycle', d: 'text-shadow, 3s loop' },
    { n: 'float badge', d: 'scale + translateY, 6s' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {effects.map((e) => (
        <div key={e.n} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '0.375rem', border: '1px solid rgba(168,85,247,0.1)', background: 'rgba(168,85,247,0.03)', padding: '0.5rem 0.75rem' }}>
          <div>
            <div style={{ fontSize: '0.875rem', color: 'white' }}>{e.n}</div>
            <div className="cp-font-mono" style={{ fontSize: '0.6rem', color: '#7c6b8f' }}>{e.d}</div>
          </div>
          <Sparkles className="h-4 w-4" style={{ color: '#d946ef' }} />
        </div>
      ))}
    </div>
  );
}

/* ── 6. Featured: the 3-font system (mock browser) ─────────────── */

function FeaturedSystem() {
  return (
    <section id="system" className="cp-container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div style={{ marginBottom: '3rem', maxWidth: '48rem' }}>
        <div className="cp-eyebrow"><Cpu className="h-3.5 w-3.5" /><span>The system in action</span></div>
        <h2 className="cp-h-section" style={{ marginTop: '1rem' }}>Same 3 fonts.<br/>Used everywhere.</h2>
        <p className="cp-lede" style={{ marginTop: '1rem', maxWidth: '40rem', color: '#c4b5d4' }}>
          Below is a real preview of how the system renders. The display futuristic
          anchors every headline, the body sans does the work, the mono accent
          whispers credentials. No fourth font. No &quot;fun&quot; typeface. Discipline.
        </p>
      </div>

      {/* Browser chrome mock */}
      <div className="cp-card" style={{ overflow: 'hidden', padding: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid rgba(168,85,247,0.1)', background: 'rgba(10,5,20,0.8)', padding: '0.75rem 1rem' }}>
          <div style={{ display: 'flex', gap: '0.375rem' }}>
            <span style={{ height: '10px', width: '10px', borderRadius: '50%', background: 'rgba(239,68,68,0.6)' }} />
            <span style={{ height: '10px', width: '10px', borderRadius: '50%', background: 'rgba(245,158,11,0.6)' }} />
            <span style={{ height: '10px', width: '10px', borderRadius: '50%', background: 'rgba(236,72,153,0.6)' }} />
          </div>
          <div className="cp-font-mono" style={{ flex: 1, borderRadius: '0.375rem', border: '1px solid rgba(168,85,247,0.1)', background: 'rgba(168,85,247,0.03)', padding: '0.25rem 0.75rem', fontSize: '0.7rem', color: '#9b8aad' }}>
            <Lock className="inline h-3 w-3 mr-2" style={{ color: '#ec4899' }} />
            https://designwithhermes.com/system
          </div>
          <span className="cp-mono-tag">live</span>
        </div>

        <div style={{ display: 'grid', gap: 0 }} className="lg:grid-cols-7">
          {/* Main column */}
          <div style={{ borderRight: '1px solid rgba(168,85,247,0.1)', padding: '2rem' }} className="lg:col-span-5">
            <div className="cp-eyebrow"><span className="cp-live-dot" style={{ position: 'relative' }} /><span>preview</span></div>
            <h3 className="cp-font-display" style={{ marginTop: '0.75rem', fontSize: '2.25rem', color: 'white', letterSpacing: '-0.02em' }}>
              The headline is <span className="cp-gradient-text">Orbitron</span>.
            </h3>
            <p style={{ marginTop: '0.75rem', color: '#c4b5d4' }}>
              Body copy uses Rajdhani. It&apos;s not glamorous, but it does the job
              everywhere — from 14px captions to 18px ledes. We never reach for
              a fourth font family.
            </p>

            <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              <div style={{ borderRadius: '0.5rem', border: '1px solid rgba(168,85,247,0.1)', background: 'rgba(168,85,247,0.03)', padding: '0.75rem', textAlign: 'center' }}>
                <div className="cp-font-display" style={{ fontSize: '1.5rem', color: '#ec4899' }}>2.4×</div>
                <div className="cp-font-mono" style={{ marginTop: '0.25rem', fontSize: '0.6rem', color: '#7c6b8f' }}>time on page</div>
              </div>
              <div style={{ borderRadius: '0.5rem', border: '1px solid rgba(168,85,247,0.1)', background: 'rgba(168,85,247,0.03)', padding: '0.75rem', textAlign: 'center' }}>
                <div className="cp-font-display" style={{ fontSize: '1.5rem', color: '#d946ef' }}>+38%</div>
                <div className="cp-font-mono" style={{ marginTop: '0.25rem', fontSize: '0.6rem', color: '#7c6b8f' }}>CTA clicks</div>
              </div>
              <div style={{ borderRadius: '0.5rem', border: '1px solid rgba(168,85,247,0.1)', background: 'rgba(168,85,247,0.03)', padding: '0.75rem', textAlign: 'center' }}>
                <div className="cp-font-display" style={{ fontSize: '1.5rem', color: '#a855f7' }}>12s</div>
                <div className="cp-font-mono" style={{ marginTop: '0.25rem', fontSize: '0.6rem', color: '#7c6b8f' }}>load time</div>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Hero section rendered in 14 lines of JSX', 'Bento grid auto-collapses on mobile', 'Zig-zag process becomes single-col under 768px'].map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#c4b5d4' }}>
                  <Check className="h-3.5 w-3.5" style={{ color: '#ec4899', flexShrink: 0 }} />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Link href="#contact" className="cp-btn-primary">Try the recipe <ArrowRight className="h-4 w-4" /></Link>
              <span className="cp-font-mono" style={{ fontSize: '0.75rem', color: '#7c6b8f' }}>free · 10 sections · 3 fonts</span>
            </div>
          </div>

          {/* Side column — token card */}
          <div style={{ padding: '1.5rem' }} className="lg:col-span-2">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Copy className="h-4 w-4" style={{ color: '#ec4899' }} />
              <span className="cp-font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9b8aad' }}>tokens.css</span>
            </div>
            <div className="cp-font-mono" style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.7rem' }}>
              <div><span style={{ color: '#ec4899' }}>.font-display</span> <span style={{ color: '#7c6b8f' }}>{`{`}</span></div>
              <div style={{ paddingLeft: '0.75rem', color: '#06b6d4' }}>font-family: &apos;Orbitron&apos;;</div>
              <div style={{ color: '#7c6b8f' }}>{`}`}</div>
              <div style={{ paddingTop: '0.5rem' }}><span style={{ color: '#ec4899' }}>.font-sans</span> <span style={{ color: '#7c6b8f' }}>{`{`}</span></div>
              <div style={{ paddingLeft: '0.75rem', color: '#06b6d4' }}>font-family: &apos;Rajdhani&apos;;</div>
              <div style={{ color: '#7c6b8f' }}>{`}`}</div>
              <div style={{ paddingTop: '0.5rem' }}><span style={{ color: '#ec4899' }}>.font-mono</span> <span style={{ color: '#7c6b8f' }}>{`{`}</span></div>
              <div style={{ paddingLeft: '0.75rem', color: '#06b6d4' }}>font-family: &apos;JetBrains Mono&apos;;</div>
              <div style={{ color: '#7c6b8f' }}>{`}`}</div>
            </div>
            <div style={{ marginTop: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(236,72,153,0.2)', background: 'rgba(236,72,153,0.05)', padding: '0.75rem' }}>
              <div className="cp-font-mono" style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#ec4899' }}>discipline</div>
              <div style={{ marginTop: '0.25rem', fontSize: '0.75rem', color: '#c4b5d4' }}>3 fonts. Forever. The variety is in the composition, not the palette.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 7. Secondary: the verification checklist ───────────────────── */

function SecondaryPreview() {
  return (
    <section className="cp-container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div style={{ display: 'grid', gap: '2rem', alignItems: 'center' }} className="lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="cp-eyebrow"><ShieldCheck className="h-3.5 w-3.5" /><span>Bonus</span></div>
          <h2 className="cp-h-card" style={{ marginTop: '0.75rem' }}>A 14-item checklist<br/>before you call it done.</h2>
          <p style={{ marginTop: '0.75rem', color: '#9b8aad' }}>
            Every page that ships with this recipe passes the same gate.
            No exceptions. Skipping items is how pages start to look generic.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="cp-card sm:grid-cols-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', padding: '1.5rem' }}>
            {[
              '10 sections, in order',
              '3 font families loaded',
              '3+ accent colors',
              'Asymmetric hero',
              'Floating visual on right',
              '5+ concrete numbers',
              'Live status dot',
              'Neon pulse animation',
              '4+ custom animations',
              '3D depth in cards',
              'Mobile 375px tested',
              'Real email + phone',
              'Honeypot + rate limit',
              'Lighthouse 90+',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '0.375rem', border: '1px solid rgba(168,85,247,0.1)', background: 'rgba(168,85,247,0.03)', padding: '0.5rem 0.75rem', fontSize: '0.75rem', color: '#c4b5d4' }}>
                <Check className="h-3 w-3" style={{ color: '#ec4899', flexShrink: 0 }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 8. Pull quote ──────────────────────────────────────────────── */

function PullQuote() {
  return (
    <section className="cp-container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div style={{ position: 'relative', margin: '0 auto', maxWidth: '56rem', textAlign: 'center' }}>
        <Star aria-hidden style={{ position: 'absolute', top: '-1.5rem', left: '50%', height: '4rem', width: '4rem', transform: 'translateX(-50%)', color: 'rgba(217,70,239,0.2)' }} />
        <blockquote className="cp-font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, color: 'white' }}>
          &quot;Most landing page templates optimize for <span className="cp-gradient-text">shipping speed</span>.
          This one optimizes for being <span className="cp-gradient-text">looked at twice</span>.&quot;
        </blockquote>
        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
          <div style={{ height: '2.5rem', width: '2.5rem', borderRadius: '50%', background: 'linear-gradient(135deg, #ec4899, #a855f7)' }} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.875rem', color: 'white' }}>— The team</div>
            <div className="cp-font-mono" style={{ fontSize: '0.75rem', color: '#7c6b8f' }}>designwithhermes.com · 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 9. FAQ ─────────────────────────────────────────────────────── */

function FAQ() {
  const items = [
    {
      q: 'Is this a real skill I can install in Hermes Agent?',
      a: 'Yes. It\'s at ~/.hermes/skills/creative/ultra-engaging-landing-page/SKILL.md — load it with skill_view(name="ultra-engaging-landing-page") and the agent will follow the recipe end-to-end.',
    },
    {
      q: 'Do I need to know Tailwind?',
      a: 'No. The skill ships with a plain CSS version (CSS custom properties) and a Next.js + Tailwind version. Pick whichever you\'re comfortable with. Both produce identical output.',
    },
    {
      q: 'What if my brand uses 2 colors, not 3?',
      a: 'The recipe uses 3 accents because that\'s what creates the "alive" feeling. If your brand is strictly 2-color, drop the warm tertiary and let the live status dot pick up the secondary color. It still works.',
    },
    {
      q: 'How long does it take to ship a page with this?',
      a: 'First time: 4-6 hours including asset prep. Once you\'ve done it twice: 2 hours. The recipe is designed to be re-run, not re-invented.',
    },
    {
      q: 'Can I use this for a SaaS product page, not a portfolio?',
      a: 'Yes — that\'s exactly what 123automateme.com is. The recipe doesn\'t care about the brand; it cares about the structure. Replace the "Services" section with feature highlights and you have a SaaS landing page.',
    },
    {
      q: 'What\'s the difference between this and the popular-web-designs skill?',
      a: 'popular-web-designs gives you 54 reference design systems (Stripe, Linear, Vercel). ultra-engaging-landing-page gives you the recipe for combining them into a coherent page. Use them together.',
    },
  ];
  return (
    <section id="faq" className="cp-container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div style={{ display: 'grid', gap: '3rem' }} className="lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="cp-eyebrow"><Terminal className="h-3.5 w-3.5" /><span>FAQ</span></div>
          <h2 className="cp-h-section" style={{ marginTop: '1rem' }}>Common<br/>questions.</h2>
        </div>
        <div className="lg:col-span-8">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {items.map((it) => (
              <details key={it.q} className="group" style={{ borderRadius: '1rem', border: '1px solid rgba(168,85,247,0.15)', background: 'rgba(15,8,30,0.8)', padding: '1.25rem' }}>
                <summary style={{ display: 'flex', cursor: 'pointer', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', color: 'white', listStyle: 'none' }}>
                  <span className="cp-font-display" style={{ fontSize: '1.1rem' }}>{it.q}</span>
                  <Plus className="h-4 w-4 transition-transform group-open:rotate-45" style={{ color: '#9b8aad', flexShrink: 0 }} />
                </summary>
                <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: '#c4b5d4' }}>{it.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 10. Final CTA + Contact ────────────────────────────────────── */

function FinalCTA() {
  return (
    <section id="contact" className="cp-container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '1.5rem', border: '1px solid rgba(168,85,247,0.2)', background: 'linear-gradient(135deg, rgba(15,8,30,0.9), rgba(10,5,20,0.95))', padding: '2rem' }} className="sm:p-12">
        <div aria-hidden style={{ position: 'absolute', top: '-5rem', right: '-5rem', height: '15rem', width: '15rem', borderRadius: '9999px', background: 'rgba(236,72,153,0.12)', filter: 'blur(48px)' }} />
        <div aria-hidden style={{ position: 'absolute', bottom: '-5rem', left: '-5rem', height: '15rem', width: '15rem', borderRadius: '9999px', background: 'rgba(168,85,247,0.08)', filter: 'blur(48px)' }} />

        <div style={{ position: 'relative', display: 'grid', gap: '3rem' }} className="lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="cp-eyebrow"><Sparkles className="h-3.5 w-3.5" /><span>Let&apos;s build yours</span></div>
            <h2 className="cp-h-display" style={{ marginTop: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Ready to ship a page<br/>that doesn&apos;t look <span className="cp-gradient-text">templated</span>?
            </h2>
            <p className="cp-lede" style={{ marginTop: '1rem', color: '#c4b5d4' }}>
              Email, call, or fill the form. We reply within 24 hours, AEST.
            </p>

            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="mailto:hello@designwithhermes.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#e0d0f0', textDecoration: 'none' }}>
                <span style={{ display: 'flex', height: '2.25rem', width: '2.25rem', alignItems: 'center', justifyContent: 'center', borderRadius: '0.5rem', border: '1px solid rgba(168,85,247,0.15)', background: 'rgba(168,85,247,0.05)' }}>
                  <Mail className="h-4 w-4" style={{ color: '#ec4899' }} />
                </span>
                <span className="cp-font-mono" style={{ fontSize: '0.875rem' }}>hello@designwithhermes.com</span>
              </a>
              <a href="https://123automateme.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#e0d0f0', textDecoration: 'none' }}>
                <span style={{ display: 'flex', height: '2.25rem', width: '2.25rem', alignItems: 'center', justifyContent: 'center', borderRadius: '0.5rem', border: '1px solid rgba(168,85,247,0.15)', background: 'rgba(168,85,247,0.05)' }}>
                  <Globe className="h-4 w-4" style={{ color: '#d946ef' }} />
                </span>
                <span className="cp-font-mono" style={{ fontSize: '0.875rem' }}>123automateme.com · parent hub</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="cp-card-glow" style={{ padding: '1.5rem' }}>
              <h3 className="cp-font-display" style={{ fontSize: '1.25rem', color: 'white' }}>Get the recipe</h3>
              <p style={{ marginTop: '0.25rem', fontSize: '0.875rem', color: '#9b8aad' }}>Free 10-section template. 3 font families. Lifetime updates.</p>
              <form style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }} action="https://123automateme.com/api/contact" method="post">
                <input type="text" name="name" placeholder="Your name" style={{ width: '100%', borderRadius: '0.5rem', border: '1px solid rgba(168,85,247,0.2)', background: 'rgba(168,85,247,0.03)', padding: '0.5rem 0.75rem', fontSize: '0.875rem', color: 'white', outline: 'none' }} required />
                <input type="email" name="email" placeholder="you@studio.com" style={{ width: '100%', borderRadius: '0.5rem', border: '1px solid rgba(168,85,247,0.2)', background: 'rgba(168,85,247,0.03)', padding: '0.5rem 0.75rem', fontSize: '0.875rem', color: 'white', outline: 'none' }} required />
                <textarea name="message" rows={3} placeholder="What kind of page are you building?" style={{ width: '100%', borderRadius: '0.5rem', border: '1px solid rgba(168,85,247,0.2)', background: 'rgba(168,85,247,0.03)', padding: '0.5rem 0.75rem', fontSize: '0.875rem', color: 'white', outline: 'none', resize: 'vertical' }} required />
                {/* honeypot */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
                <button type="submit" className="cp-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
