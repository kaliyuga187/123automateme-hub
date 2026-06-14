/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Backgrounds ──────────────────────────────────────
        ink:        '#0a0a0f',   // base
        surface:    '#0f0f17',   // card
        surface2:   '#15151f',   // card hover
        line:       'rgba(255, 255, 255, 0.08)',
        lineStrong: 'rgba(255, 255, 255, 0.14)',

        // ── Text ─────────────────────────────────────────────
        fg:         '#fafafa',
        muted:      '#a1a1aa',
        dim:        '#71717a',

        // ── Accents ──────────────────────────────────────────
        accent:     '#a78bfa',   // primary lavender
        accent2:    '#22d3ee',   // secondary cyan
        accent3:    '#fb923c',   // tertiary warm orange
        success:    '#34d399',
        danger:     '#fb7185',

        // Backwards-compat aliases
        accentLight: '#c4b5fd',
      },
      fontFamily: {
        sans:  ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:  ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        // Display sizes for hero
        '6xl':  ['3.75rem',  { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        '7xl':  ['4.5rem',   { lineHeight: '1.0',  letterSpacing: '-0.03em'  }],
        '8xl':  ['6rem',     { lineHeight: '0.95', letterSpacing: '-0.035em' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in':     'fadeIn 0.6s ease-out both',
        'fade-in-up':  'fadeInUp 0.7s ease-out both',
        'pulse-slow':  'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer':     'shimmer 2.4s linear infinite',
        'spin-slow':   'spin 8s linear infinite',
        'drift':       'drift 14s ease-in-out infinite',
        'ticker':      'ticker 30s linear infinite',
      },
      keyframes: {
        fadeIn:    { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeInUp:  {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer:   {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%':      { transform: 'translate(8px, -6px)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(167, 139, 250, 0.18), transparent 70%)',
      },
      backgroundSize: {
        'grid-32': '32px 32px',
      },
      boxShadow: {
        'glow-accent':  '0 0 60px -12px rgba(167, 139, 250, 0.45)',
        'glow-cyan':    '0 0 60px -12px rgba(34, 211, 238, 0.4)',
        'inner-line':   'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
};
