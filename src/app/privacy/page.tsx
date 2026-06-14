export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <article className="section">
      <div className="container-page max-w-3xl">
        <div className="eyebrow">Legal</div>
        <h1 className="h-section">Privacy Policy</h1>
        <p className="mt-2 text-sm text-dim">
          Last updated: {new Date().toLocaleDateString('en-AU')}
        </p>

        <div className="mt-12 space-y-8 text-[15px] leading-[1.75] text-fg/85">
          <Section title="1. What we collect">
            We collect the information you give us directly: your name, email,
            company (optional), and message body when you submit the contact
            form. We also receive standard server logs (IP address, user
            agent, request path) for security and rate-limiting.
          </Section>
          <Section title="2. Why we collect it">
            Contact-form data is used solely to respond to your enquiry.
            Server logs are used to prevent abuse and diagnose outages. We do
            not sell, rent, or share your personal information with third
            parties for marketing.
          </Section>
          <Section title="3. How long we keep it">
            Contact-form submissions are kept for as long as needed to resolve
            your enquiry and a reasonable audit window afterwards, then
            deleted. Server logs are rotated every 30 days.
          </Section>
          <Section title="4. Your rights">
            You can request a copy of, correction of, or deletion of any
            personal data we hold about you. Email{' '}
            <a href="mailto:privacy@123automateme.com" className="text-accent hover:underline">
              privacy@123automateme.com
            </a>{' '}
            and we will action your request within 30 days.
          </Section>
          <Section title="5. Cookies">
            This site does not use marketing or analytics cookies. We may set
            a single first-party cookie for rate-limiting and security; it
            expires after one hour and contains no personal data.
          </Section>
          <Section title="6. Hosting and data location">
            The site is hosted on infrastructure that may be located in
            Australia, the United States, or the European Union depending on
            traffic origin and capacity. The hosting provider may process
            personal data on our behalf under standard data-processing terms.
          </Section>
          <Section title="7. Contact">
            Questions about this policy? Email{' '}
            <a href="mailto:privacy@123automateme.com" className="text-accent hover:underline">
              privacy@123automateme.com
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
