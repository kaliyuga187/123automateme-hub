import Link from 'next/link';

export const metadata = { title: 'Thanks for reaching out' };

export default function ThanksPage() {
  return (
    <section className="section pt-32 text-center">
      <div className="mx-auto max-w-xl">
        <div className="eyebrow">Message received</div>
        <h1 className="h2">Thanks — we&apos;ll be in touch.</h1>
        <p className="lede mt-6 text-zinc-300">
          We reply to every message within one business day. If it&apos;s urgent, you can email us
          directly at{' '}
          <a href="mailto:hello@123automateme.com" className="text-accentLight hover:underline">
            hello@123automateme.com
          </a>
          .
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-ghost">← Back to home</Link>
        </div>
      </div>
    </section>
  );
}
