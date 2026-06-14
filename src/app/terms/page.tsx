export const metadata = { title: 'Terms of Service' };

export default function TermsPage() {
  return (
    <article className="section">
      <div className="container-page max-w-3xl">
        <div className="eyebrow">Legal</div>
        <h1 className="h-section">Terms of Service</h1>
        <p className="mt-2 text-sm text-dim">
          Last updated: {new Date().toLocaleDateString('en-AU')}
        </p>

        <div className="mt-12 space-y-8 text-[15px] leading-[1.75] text-fg/85">
          <Section title="1. Acceptance">
            By accessing 123automateme.com or any subdomain, you agree to
            these terms. If you do not agree, do not use the site.
          </Section>
          <Section title="2. Services">
            The site describes AI agent products, trading bots, and
            custom-automation services. Any paid service is governed by a
            separate written agreement (Statement of Work) signed before
            work begins. Subscription products are billed via Stripe and
            can be cancelled at any time; refunds follow Stripe and the
            consumer-law rules of your jurisdiction.
          </Section>
          <Section title="3. No investment advice">
            Nothing on this site is financial, investment, or trading
            advice. Crypto assets and automated trading carry substantial
            risk of loss. Past performance of any bot, signal, or backtest
            is not a guarantee of future results. You are solely
            responsible for your own trading and investment decisions.
          </Section>
          <Section title="4. Acceptable use">
            You agree not to use the site or any product to: violate any
            law, infringe intellectual-property rights, distribute malware,
            attempt to gain unauthorised access to systems, or interfere
            with other users&apos; use of the service.
          </Section>
          <Section title="5. Intellectual property">
            All content, code, designs, and trademarks on this site are
            owned by 123automateme or its licensors. You may view and link
            to the site for personal or internal business evaluation. You
            may not copy, redistribute, or create derivative works without
            written permission.
          </Section>
          <Section title="6. Warranties and liability">
            The site and information on it are provided &quot;as is&quot;
            without warranty of any kind. To the maximum extent permitted
            by law, 123automateme is not liable for any indirect,
            incidental, special, consequential, or punitive damages arising
            from your use of the site.
          </Section>
          <Section title="7. Changes">
            We may update these terms from time to time. Continued use of
            the site after changes are posted constitutes acceptance.
            Material changes will be highlighted on the homepage for at
            least 30 days.
          </Section>
          <Section title="8. Governing law">
            These terms are governed by the laws of New South Wales,
            Australia. Disputes are subject to the exclusive jurisdiction
            of the courts of New South Wales.
          </Section>
          <Section title="9. Contact">
            Questions? Email{' '}
            <a href="mailto:hello@123automateme.com" className="text-accent hover:underline">
              hello@123automateme.com
            </a>
            .
          </Section>
        </div>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-fg">{title}</h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}
