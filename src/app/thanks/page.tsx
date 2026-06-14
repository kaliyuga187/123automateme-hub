import Link from 'next/link';
import { Check, ArrowLeft } from 'lucide-react';

export const metadata = { title: 'Thanks for reaching out' };

export default function ThanksPage() {
  return (
    <section className="section">
      <div className="container-page max-w-2xl text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-success/30 bg-success/10">
          <Check className="h-7 w-7 text-success" />
        </div>
        <h1 className="h-section mt-6">Thanks — we&apos;ll be in touch.</h1>
        <p className="lede mt-4">
          We reply to every message within one business day. If it&apos;s
          urgent, you can email us directly at{' '}
          <a href="mailto:hello@123automateme.com" className="text-accent hover:underline">
            hello@123automateme.com
          </a>
          .
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-ghost">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
