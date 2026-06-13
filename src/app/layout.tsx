import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://123automateme.com'),
  title: {
    default: '123automateme — Autonomous AI Systems for Trading & Product Launches',
    template: '%s — 123automateme',
  },
  description:
    'We build autonomous AI agents that trade crypto, launch tokens, and run business workflows 24/7. Custom AI agent development, SaaS products, and consulting.',
  openGraph: {
    title: '123automateme — Autonomous AI Systems',
    description: 'AI agents that work while you sleep. Trading bots, token launchers, and custom automation.',
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
    <html lang="en">
      <body>
        <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-ink/80 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight">
              <span className="text-accent">123</span>
              <span>automateme</span>
            </Link>
            <div className="hidden gap-8 text-sm text-zinc-300 md:flex">
              <Link href="#services" className="hover:text-white">Services</Link>
              <Link href="#how" className="hover:text-white">How it works</Link>
              <Link href="#products" className="hover:text-white">Products</Link>
              <Link href="#contact" className="hover:text-white">Contact</Link>
            </div>
            <Link href="#contact" className="btn-primary hidden md:inline-flex">
              Get a quote
            </Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="border-t border-zinc-800/60">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-mono text-zinc-200">123automateme.com</div>
              <div className="mt-1 text-xs text-zinc-500">
                Autonomous AI systems for trading and product launches.
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy" className="hover:text-zinc-200">Privacy</Link>
              <Link href="/terms" className="hover:text-zinc-200">Terms</Link>
              <a href="mailto:hello@123automateme.com" className="hover:text-zinc-200">hello@123automateme.com</a>
            </div>
          </div>
          <div className="border-t border-zinc-800/60 py-4 text-center text-xs text-zinc-600">
            © {new Date().getFullYear()} 123automateme. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
