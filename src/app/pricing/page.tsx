/**
 * Pricing page — 3 tiers, "Subscribe" CTA per tier.
 *
 * The Subscribe button POSTs to /api/stripe/checkout and redirects to
 * the returned Stripe Checkout URL. Loading state + error state handled
 * client-side.
 *
 * No marketing copy in this file — copy is in <PricingCard />.
 */
"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PricingCard, { type PricingTier } from "@/components/PricingCard";

const TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: 19,
    interval: "month",
    description: "Get notified. Get one thing per month.",
    features: [
      "Monthly newsletter with deep-dives",
      "1 paid template per month",
      "Public repo access",
      "Discord community read access",
    ],
    cta: "Start for $19",
    highlight: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: 49,
    interval: "month",
    description: "For builders shipping their own product.",
    features: [
      "Everything in Starter",
      "All current + future templates",
      "Private repos + early access drops",
      "Discord full access",
      "Monthly office hours (recorded)",
    ],
    cta: "Go Pro for $49",
    highlight: true,
    badge: "Most popular",
  },
  {
    id: "studio",
    name: "Studio",
    price: 199,
    interval: "month",
    description: "1-on-1 time when you need it.",
    features: [
      "Everything in Pro",
      "Monthly 1-on-1 call (60 min)",
      "Code review on your project",
      "Direct async support (24h SLA)",
      "Co-marketing on the portfolio",
    ],
    cta: "Talk to me about Studio",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <Suspense fallback={<PricingFallback />}>
      <PricingPageInner />
    </Suspense>
  );
}

function PricingFallback() {
  // Plain shell shown while useSearchParams hydrates (Next 15 requires this
  // boundary to make the page opt into dynamic rendering).
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "120px 24px 80px",
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#f1f5f9",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: 32, fontWeight: 800 }}>Loading pricing…</h1>
    </main>
  );
}

function PricingPageInner() {
  const router = useRouter();
  const params = useSearchParams();
  const canceled = params.get("canceled") === "1";
  const [loading, setLoading] = useState<PricingTier["id"] | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function subscribe(tier: PricingTier) {
    setLoading(tier.id);
    setError(null);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier: tier.id }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message ?? data.error ?? "Checkout failed");
      }
      if (!data.url) {
        throw new Error("Stripe did not return a checkout URL");
      }
      // Hard redirect — Stripe Checkout is a separate page entirely.
      window.location.href = data.url;
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      setError(msg);
      setLoading(null);
    }
  }

  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "120px 24px 80px",
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#f1f5f9",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: 56 }}>
        <p
          style={{
            color: "#10b981",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 13,
            letterSpacing: 1.2,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Pricing
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 800,
            margin: "0 0 16px",
            lineHeight: 1.1,
          }}
        >
          Subscribe to K187
        </h1>
        <p
          style={{
            color: "#94a3b8",
            fontSize: 18,
            maxWidth: 640,
            margin: "0 auto",
          }}
        >
          Templates, repos, and direct access. Cancel anytime. Powered by
          Stripe. Test mode is on — use card{" "}
          <code style={{ background: "#16161f", padding: "2px 6px", borderRadius: 4 }}>
            4242 4242 4242 4242
          </code>
          .
        </p>
        {canceled && (
          <p
            style={{
              marginTop: 24,
              padding: "12px 16px",
              background: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              borderRadius: 8,
              color: "#fca5a5",
              fontSize: 14,
            }}
          >
            Checkout canceled. You weren&apos;t charged.
          </p>
        )}
        {error && (
          <p
            role="alert"
            style={{
              marginTop: 24,
              padding: "12px 16px",
              background: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              borderRadius: 8,
              color: "#fca5a5",
              fontSize: 14,
            }}
          >
            Error: {error}
          </p>
        )}
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          alignItems: "stretch",
        }}
      >
        {TIERS.map((tier) => (
          <PricingCard
            key={tier.id}
            tier={tier}
            loading={loading === tier.id}
            onSubscribe={() => subscribe(tier)}
          />
        ))}
      </section>

      <footer
        style={{
          marginTop: 64,
          textAlign: "center",
          color: "#64748b",
          fontSize: 14,
        }}
      >
        <p>
          Questions?{" "}
          <a
            href="/#contact"
            style={{ color: "#10b981", textDecoration: "underline" }}
            onClick={(e) => {
              e.preventDefault();
              router.push("/?scroll=contact#contact");
            }}
          >
            Get in touch
          </a>
          . All plans billed monthly in USD. Subscriptions managed via the{" "}
          <a
            href="https://billing.stripe.com/p/login/test_YnQ1Ib"
            style={{ color: "#10b981", textDecoration: "underline" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Stripe Customer Portal
          </a>
          .
        </p>
      </footer>
    </main>
  );
}
