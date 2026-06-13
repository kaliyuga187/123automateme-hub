export const metadata = { title: 'Terms of Service' };

export default function TermsPage() {
  return (
    <article className="section pt-20">
      <div className="eyebrow">Legal</div>
      <h1 className="h2">Terms of Service</h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: {new Date().toLocaleDateString('en-AU')}</p>

      <div className="prose prose-invert mt-10 max-w-none space-y-6 text-zinc-300">
        <Section title="1. Acceptance">
          <p>
            By accessing 123automateme.com or any subdomain, you agree to these terms. If you do
            not agree, do not use the site.
          </p>
        </Section>
        <Section title="2. Services">
          <p>
            The site describes AI agent products, trading bots, and custom-automation services. Any
            paid service is governed by a separate written agreement (Statement of Work) signed
            before work begins. Subscription products are billed via Stripe and can be cancelled
            at any time; refunds follow Stripe and the consumer-law rules of your jurisdiction.
          </p>
        </Section>
        <Section title="3. No investment advice">
          <p>
            Nothing on this site is financial, investment, or trading advice. Crypto assets and
            automated trading carry substantial risk of loss. Past performance of any bot, signal,
            or backtest is not a guarantee of future results. You are solely responsible for your
            own trading and investment decisions.
          </p>
        </Section>
        <Section title="4. Acceptable use">
          <p>
            You agree not to use the site or any product to: violate any law, infringe
            intellectual-property rights, distribute malware, attempt to gain unauthorised access
            to systems, or interfere with other users&apos; use of the service.
          </p>
        </Section>
        <Section title="5. Intellectual property">
          <p>
            All content, code, designs, and trademarks on this site are owned by 123automateme or
            its licensors. You may view and link to the site for personal or internal business
            evaluation. You may not copy, redistribute, or create derivative works without written
            permission.
          </p>
        </Section>
        <Section title="6. Warranties and liability">
          <p>
            The site and information on it are provided &quot;as is&quot; without warranty of any
            kind. To the maximum extent permitted by law, 123automateme is not liable for any
            indirect, incidental, special, consequential, or punitive damages arising from your use
            of the site.
          </p>
        </Section>
        <Section title="7. Changes">
          <p>
            We may update these terms from time to time. Continued use of the site after changes
            are posted constitutes acceptance. Material changes will be highlighted on the homepage
            for at least 30 days.
          </p>
        </Section>
        <Section title="8. Governing law">
          <p>
            These terms are governed by the laws of New South Wales, Australia. Disputes are
            subject to the exclusive jurisdiction of the courts of New South Wales.
          </p>
        </Section>
        <Section title="9. Contact">
          <p>
            Questions? Email{' '}
            <a href="mailto:hello@123automateme.com" className="text-accentLight hover:underline">
              hello@123automateme.com
            </a>
            .
          </p>
        </Section>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-zinc-100">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed">{children}</div>
    </section>
  );
}
