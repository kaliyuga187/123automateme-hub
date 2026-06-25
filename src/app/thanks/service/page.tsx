/**
 * /thanks/service — service-purchase success page.
 *
 * Looks up the Stripe Checkout Session by ID and shows a receipt-like
 * confirmation with the package purchased, price, and what happens next.
 * Falls back to a generic thank-you if the lookup fails.
 */
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, Sparkles } from "lucide-react";
import { getStripe, isStripeConfigured } from "@/lib/stripe";
import { getPackageById, formatPrice } from "@/lib/services";

interface PageProps {
  searchParams: Promise<{ session_id?: string }>;
}

export const dynamic = "force-dynamic";

export default async function ServiceThanksPage({ searchParams }: PageProps) {
  const { session_id: sessionId } = await searchParams;

  let receipt: {
    serviceTitle: string;
    packageName: string;
    priceLabel: string;
    customerEmail: string | null;
  } | null = null;

  if (sessionId && isStripeConfigured()) {
    try {
      const stripe = getStripe();
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      const serviceSlug = session.metadata?.serviceSlug;
      const packageId = session.metadata?.packageId;
      const match = serviceSlug && packageId ? getPackageById(serviceSlug, packageId) : null;
      if (match) {
        receipt = {
          serviceTitle: match.service.title,
          packageName: match.pkg.name,
          priceLabel: match.pkg.priceLabel,
          customerEmail: session.customer_details?.email ?? session.customer_email ?? null,
        };
      }
    } catch (err) {
      console.error("[thanks/service] failed to retrieve session:", err);
    }
  }

  return (
    <main
      className="min-h-screen text-white font-raj flex items-center justify-center p-6"
      style={{ background: "var(--cv-bg)" }}
    >
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 bg-gradient-to-br from-pink-500 to-purple-600 shadow-2xl shadow-pink-500/30">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white mb-3">
            {receipt ? "PAYMENT CONFIRMED." : "THANK YOU."}
          </h1>
          <p className="font-raj text-purple-300/70">
            {receipt
              ? `Your ${receipt.serviceTitle} project kickoff is queued.`
              : "We've received your payment. Stand by for next steps."}
          </p>
        </div>

        {receipt && (
          <div
            className="rounded-2xl border p-8 mb-8"
            style={{ background: "var(--cv-card)", borderColor: "var(--cv-border)" }}
          >
            <div className="font-jb text-[10px] text-purple-400 tracking-widest mb-4">
              ORDER DETAILS
            </div>
            <div className="space-y-3 font-raj">
              <Row label="Service" value={receipt.serviceTitle} />
              <Row label="Package" value={receipt.packageName} />
              <Row label="Amount" value={receipt.priceLabel} highlight />
              {receipt.customerEmail && (
                <Row label="Receipt sent to" value={receipt.customerEmail} />
              )}
            </div>
          </div>
        )}

        <div
          className="rounded-2xl border p-6 mb-8"
          style={{
            background: "rgba(168,85,247,0.05)",
            borderColor: "rgba(168,85,247,0.2)",
          }}
        >
          <div className="flex items-start gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-cyber text-sm font-bold text-white mb-1">
                WHAT HAPPENS NEXT
              </div>
              <ol className="font-raj text-sm text-purple-300/80 space-y-2 list-decimal list-inside">
                <li>You receive a Stripe receipt via email within 5 minutes.</li>
                <li>I'll email you within 24 hours to schedule a kickoff call.</li>
                <li>We agree on timeline + deliverables + acceptance criteria.</li>
                <li>Build starts. Weekly demos until shipped.</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="flex-1 px-6 py-3 rounded-xl font-raj font-bold text-center text-purple-300 hover:text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid var(--cv-border)" }}
          >
            <ArrowLeft className="w-4 h-4 inline mr-2" />
            BACK HOME
          </Link>
          <Link
            href="/services"
            className="flex-1 px-6 py-3 rounded-xl font-raj font-bold text-center text-white"
            style={{ background: "linear-gradient(135deg,#ec4899,#d946ef)" }}
          >
            BROWSE MORE SERVICES
            <ArrowRight className="w-4 h-4 inline ml-2" />
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-purple-300/50">
          <Mail className="w-3 h-3" />
          Questions? Reply to the receipt email or message hello@123automateme.com
        </div>
      </div>
    </main>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-baseline py-2 border-b" style={{ borderColor: "rgba(168,85,247,0.1)" }}>
      <span className="font-jb text-xs text-purple-500 tracking-wide">{label}</span>
      <span className={highlight ? "font-cyber text-2xl font-bold text-white" : "font-raj text-base text-white"}>
        {value}
      </span>
    </div>
  );
}
