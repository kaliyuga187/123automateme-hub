import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="section pt-24 pb-32 text-center">
        <div className="eyebrow">Autonomous AI Systems</div>
        <h1 className="h1 mx-auto max-w-4xl">
          AI agents that <span className="text-accentLight">work</span> while you sleep.
        </h1>
        <p className="lede mx-auto mt-6 max-w-2xl">
          We build production-grade AI systems for crypto trading, token launches, and business
          automation. Ship faster, earn while you rest, and stop babysitting dashboards.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="#contact" className="btn-primary">Get a quote →</Link>
          <Link href="#products" className="btn-ghost">See our products</Link>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-zinc-500">
          <span>No code required to start</span>
          <span>·</span>
          <span>Stripe subscriptions</span>
          <span>·</span>
          <span>Self-host or managed</span>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section id="services" className="section border-t border-zinc-800/60">
        <div className="text-center">
          <div className="eyebrow">What we do</div>
          <h2 className="h2 mx-auto max-w-2xl">Three ways we can work together</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="1. Buy a product"
            price="From $19/mo"
            description="Subscribe to one of our turnkey SaaS products. Cancel anytime. No setup."
            bullets={[
              'MetaLaunch AI — autonomous meme-coin launcher',
              'K187 Bot Fleet — algorithmic trading bots',
              'Hosted dashboards with Stripe billing',
            ]}
            cta="See products"
            href="#products"
          />
          <ServiceCard
            title="2. Commission a build"
            price="From $2,000"
            description="Tell us the workflow you want automated. We scope, build, and ship it."
            bullets={[
              'Custom AI agent for your business',
              'Integration with your existing stack',
              '30 days of post-launch support included',
            ]}
            cta="Request a build"
            href="#contact"
            highlight
          />
          <ServiceCard
            title="3. Retainer consulting"
            price="$300/hr"
            description="Bring us into your team for architecture review, audits, and ongoing engineering."
            bullets={[
              'AI agent architecture design',
              'Performance and security review',
              'Stripe / payments integration',
            ]}
            cta="Book a call"
            href="#contact"
          />
        </div>
      </section>

      {/* ─── How it works ─── */}
      <section id="how" className="section border-t border-zinc-800/60">
        <div className="text-center">
          <div className="eyebrow">How it works</div>
          <h2 className="h2 mx-auto max-w-2xl">From idea to live system in days, not months</h2>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-4">
          {[
            { n: '01', t: 'Discovery', d: '30-minute call to understand what you want automated and what success looks like.' },
            { n: '02', t: 'Proposal', d: 'A clear scope, fixed price, and timeline. No surprises. Signed before any code is written.' },
            { n: '03', t: 'Build', d: 'Iterative delivery with a working demo every week. You see the system come alive.' },
            { n: '04', t: 'Launch & support', d: 'Deployed to your infrastructure (or ours), with 30 days of bug-fix support included.' },
          ].map((s) => (
            <li key={s.n} className="card">
              <div className="font-mono text-xs text-accentLight">{s.n}</div>
              <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-zinc-400">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ─── Products ─── */}
      <section id="products" className="section border-t border-zinc-800/60">
        <div className="text-center">
          <div className="eyebrow">Live products</div>
          <h2 className="h2 mx-auto max-w-2xl">SaaS you can subscribe to today</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <ProductCard
            name="MetaLaunch AI"
            tag="Solana token launcher"
            description="Detects viral trends across X, TikTok, and Reddit; generates token metadata with AI; deploys meme coins to Pump.fun in one click. Manual or auto-launch mode."
            status="Beta — invite list"
            cta="Join the waitlist"
            href="#contact"
          />
          <ProductCard
            name="K187 Bot Store"
            tag="Algorithmic trading bots"
            description="Cyberpunk-styled storefront for our trading bot fleet. Stripe-powered subscriptions. Bots for memecoin sniping, US30 scalping, and DEX arbitrage."
            status="Available now"
            cta="Browse the store"
            href="#contact"
          />
        </div>
        <p className="mt-8 text-center text-sm text-zinc-500">
          Both products are in active development. Subscribe to the waitlist to get early access and
          founder pricing.
        </p>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="section border-t border-zinc-800/60">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="eyebrow">Get in touch</div>
            <h2 className="h2">Let&apos;s build something</h2>
            <p className="lede mt-6 text-zinc-300">
              Tell us what you want to automate. We reply within one business day with a clear next
              step — usually a short call to scope the work.
            </p>
            <div className="mt-10 space-y-4 text-sm text-zinc-300">
              <ContactRow label="Email" value="hello@123automateme.com" href="mailto:hello@123automateme.com" />
              <ContactRow label="Mobile" value="+61 • • • •" hint="On request — please email first" />
              <ContactRow label="Hours" value="AEST · Mon–Fri · 9am–6pm" />
              <ContactRow label="Response time" value="< 1 business day" />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  title,
  price,
  description,
  bullets,
  cta,
  href,
  highlight,
}: {
  title: string;
  price: string;
  description: string;
  bullets: string[];
  cta: string;
  href: string;
  highlight?: boolean;
}) {
  return (
    <div className={highlight ? 'card border-accent/60 ring-1 ring-accent/20' : 'card'}>
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="font-mono text-sm text-accentLight">{price}</div>
      </div>
      <p className="mt-3 text-sm text-zinc-400">{description}</p>
      <ul className="mt-4 space-y-2 text-sm text-zinc-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="text-accentLight">→</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <Link href={href} className="btn-ghost mt-6 w-full">
        {cta}
      </Link>
    </div>
  );
}

function ProductCard({
  name,
  tag,
  description,
  status,
  cta,
  href,
}: {
  name: string;
  tag: string;
  description: string;
  status: string;
  cta: string;
  href: string;
}) {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <div className="mt-1 font-mono text-xs text-accentLight">{tag}</div>
        </div>
        <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
          {status}
        </span>
      </div>
      <p className="mt-4 text-sm text-zinc-400">{description}</p>
      <Link href={href} className="btn-primary mt-6 w-full">
        {cta}
      </Link>
    </div>
  );
}

function ContactRow({ label, value, href, hint }: { label: string; value: string; href?: string; hint?: string }) {
  return (
    <div className="flex justify-between border-b border-zinc-800/60 pb-3">
      <div className="text-zinc-500">{label}</div>
      <div className="text-right">
        {href ? (
          <a href={href} className="text-zinc-100 hover:text-accentLight">
            {value}
          </a>
        ) : (
          <span className="text-zinc-100">{value}</span>
        )}
        {hint && <div className="text-xs text-zinc-500">{hint}</div>}
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form
      action="/api/contact"
      method="POST"
      className="card space-y-4"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-300">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1 block w-full rounded-lg border border-zinc-700 bg-ink px-3 py-2 text-sm text-zinc-100 placeholder-zinc-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-300">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 block w-full rounded-lg border border-zinc-700 bg-ink px-3 py-2 text-sm text-zinc-100 placeholder-zinc-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-zinc-300">Company <span className="text-zinc-600">(optional)</span></label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="mt-1 block w-full rounded-lg border border-zinc-700 bg-ink px-3 py-2 text-sm text-zinc-100 placeholder-zinc-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Acme Pty Ltd"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-300">What do you want to automate?</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 block w-full rounded-lg border border-zinc-700 bg-ink px-3 py-2 text-sm text-zinc-100 placeholder-zinc-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="The workflow you want automated, the system you're using, and any deadlines."
        />
      </div>
      {/* Honeypot for bots — must remain empty. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button type="submit" className="btn-primary w-full">
        Send message
      </button>
      <p className="text-center text-xs text-zinc-500">
        We reply within one business day. No spam, ever.
      </p>
    </form>
  );
}
