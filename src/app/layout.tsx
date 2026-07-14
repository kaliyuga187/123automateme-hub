import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Fraunces } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});
const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['opsz'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://123automateme.com'),
  title: {
    default: '123automateme — Autonomous AI Systems for Trading & Product Launches',
    template: '%s — 123automateme',
  },
  description:
    'We design, build, and operate autonomous AI systems: crypto trading bots, token launchers, and bespoke workflow automation. Self-host or managed.',
  openGraph: {
    title: '123automateme — Autonomous AI Systems',
    description: 'AI agents that work while you sleep. Trading bots, token launchers, custom automation.',
    url: 'https://123automateme.com',
    siteName: '123automateme',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '123automateme — Autonomous AI Systems',
    description: 'AI agents that work while you sleep.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${display.variable}`}>
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-ink/70 backdrop-blur-xl">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span aria-hidden className="relative flex h-7 w-7 items-center justify-center rounded-lg border border-lineStrong bg-surface">
            <span className="absolute inset-0 rounded-lg bg-accent/20 transition group-hover:bg-accent/30" />
            <span className="relative font-mono text-[12px] font-bold text-accent">123</span>
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight">
            automateme
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-muted md:flex">
          <Link href="#services"   className="transition hover:text-fg">Services</Link>
          <Link href="#store"      className="transition hover:text-fg">Bot Store</Link>
          <Link href="#process"    className="transition hover:text-fg">Process</Link>
          <Link href="#products"   className="transition hover:text-fg">Products</Link>
          <Link href="#faq"        className="transition hover:text-fg">FAQ</Link>
        </div>

        <div className="flex items-center gap-2">
          <Link href="mailto:hello@123automateme.com" className="hidden text-sm text-muted transition hover:text-fg sm:inline">
            hello@123automateme.com
          </Link>
          <Link href="#contact" className="btn-primary">
            Get a quote
          </Link>
        </div>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="relative border-t border-line/60 bg-ink">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span aria-hidden className="flex h-7 w-7 items-center justify-center rounded-lg border border-lineStrong bg-surface font-mono text-[12px] font-bold text-accent">
                123
              </span>
              <span className="font-mono text-sm font-semibold">automateme</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Autonomous AI systems for trading, token launches, and bespoke
              business workflows. Self-host or managed.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-dim">
              <span className="live-dot" />
              <span className="font-mono">all systems operational</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
            <FooterColumn
              title="Services"
              links={[
                { label: 'Subscribe',      href: '#services' },
                { label: 'Commission build', href: '#contact' },
                { label: 'Retainer',       href: '#contact' },
                { label: 'Templates',      href: '#' },
              ]}
            />
            <FooterColumn
              title="Products"
              links={[
                { label: 'Bot Store (24)', href: '#store' },
                { label: 'MetaLaunch AI',  href: '#store' },
                { label: 'K187 Bot Store', href: '#store' },
                { label: 'Bundles',        href: '#store' },
              ]}
            />
            <FooterColumn
              title="Company"
              links={[
                { label: 'About',          href: '#' },
                { label: 'Contact',        href: '#contact' },
                { label: 'Privacy',        href: '/privacy' },
                { label: 'Terms',          href: '/terms' },
              ]}
            />
          </div>
        </div>

        <div className="divider-line my-10" />

        <div className="flex flex-col items-start justify-between gap-4 text-xs text-dim sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} 123automateme · All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span className="font-mono">AEST · Sydney, AU</span>
            <a href="mailto:hello@123automateme.com" className="hover:text-muted">
              hello@123automateme.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="mono-tag mb-3">{title}</div>
      <ul className="space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-muted transition hover:text-fg">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
