/**
 * /services/[slug] — service detail page with 3 packages + Stripe checkout.
 *
 * Each package has its own "Buy now" button that POSTs to
 * /api/stripe/service-checkout. On success, Stripe redirects to
 * /thanks/service?session_id=… and we look up the session to show the receipt.
 *
 * Optional projectNotes field captures the buyer's intent so I have
 * context when I follow up.
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  Code2,
  Globe,
  Hammer,
  LineChart,
  Loader2,
  Lock,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SERVICES, getServiceBySlug, type Service, type ServicePackage } from "@/lib/services";

const ICONS: Record<string, LucideIcon> = {
  Code2,
  Bot,
  LineChart,
  Wrench,
  Globe,
  Hammer,
};

interface CheckoutState {
  loadingPackageId: string | null;
  error: string | null;
  email: string;
  projectNotes: string;
}

export default function ServiceDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    notFound();
  }

  return <ServiceDetailInner service={service!} />;
}

function ServiceDetailInner({ service }: { service: Service }) {
  const Icon = ICONS[service.icon] ?? Code2;
  const [state, setState] = useState<CheckoutState>({
    loadingPackageId: null,
    error: null,
    email: "",
    projectNotes: "",
  });

  async function buyPackage(pkg: ServicePackage) {
    setState((s) => ({ ...s, loadingPackageId: pkg.id, error: null }));
    try {
      const res = await fetch("/api/stripe/service-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceSlug: service.slug,
          packageId: pkg.id,
          email: state.email || undefined,
          projectNotes: state.projectNotes || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setState((s) => ({
          ...s,
          loadingPackageId: null,
          error: data.message ?? "Checkout failed. Try again.",
        }));
        return;
      }
      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (err) {
      setState((s) => ({
        ...s,
        loadingPackageId: null,
        error: err instanceof Error ? err.message : "Network error.",
      }));
    }
  }

  return (
    <main className="min-h-screen text-white font-raj" style={{ background: "var(--cv-bg)" }}>
      <header className="border-b" style={{ borderColor: "var(--cv-border)" }}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/services" className="flex items-center gap-2 font-cyber font-bold tracking-wider text-white hover:text-purple-300">
            <ArrowLeft className="w-4 h-4" />
            ALL SERVICES
          </Link>
          <Link href="/" className="font-cyber text-xs text-purple-400 hover:text-white">
            123AUTO<span className="text-purple-400">ME</span>
          </Link>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
              style={{ background: `${service.color}10`, borderColor: `${service.color}30` }}
            >
              <Icon className="w-4 h-4" style={{ color: service.color }} />
              <span className="font-jb text-xs tracking-wide" style={{ color: service.color }}>
                {service.category}
              </span>
            </div>
            <h1 className="font-cyber text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
              {service.title}
            </h1>
            <p className="font-raj text-xl text-purple-300/70 max-w-3xl mb-6">
              {service.tagline}
            </p>
            <p className="font-raj text-purple-300/60 max-w-3xl leading-relaxed mb-6">
              {service.longDescription}
            </p>
            <div
              className="rounded-xl border p-5 max-w-3xl"
              style={{
                background: "rgba(168,85,247,0.05)",
                borderColor: "rgba(168,85,247,0.2)",
              }}
            >
              <div className="font-jb text-[10px] text-purple-400 tracking-widest mb-2">
                PROOF — RECENT WORK IN THIS AREA
              </div>
              <p className="font-raj text-sm text-purple-300/80 leading-relaxed">
                {service.proof}
              </p>
            </div>
          </div>

          {/* Optional buyer context fields */}
          <div
            className="rounded-2xl border p-6 mb-10"
            style={{ background: "var(--cv-card)", borderColor: "var(--cv-border)" }}
          >
            <h2 className="font-cyber text-lg font-bold tracking-wide text-white mb-1">
              Your details
            </h2>
            <p className="font-raj text-sm text-purple-300/60 mb-5">
              Email is optional. Project notes help me prep before our kickoff call.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="font-jb text-[10px] text-purple-500 block mb-2">
                  EMAIL (OPTIONAL)
                </label>
                <input
                  type="email"
                  value={state.email}
                  onChange={(e) =>
                    setState((s) => ({ ...s, email: e.target.value }))
                  }
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 rounded-xl font-raj text-white outline-none focus:ring-2 focus:ring-pink-500/30"
                  style={{
                    background: "rgba(10,5,20,0.5)",
                    border: "1px solid var(--cv-border)",
                  }}
                />
              </div>
              <div>
                <label className="font-jb text-[10px] text-purple-500 block mb-2">
                  PROJECT NOTES (OPTIONAL)
                </label>
                <input
                  type="text"
                  value={state.projectNotes}
                  onChange={(e) =>
                    setState((s) => ({ ...s, projectNotes: e.target.value }))
                  }
                  placeholder="e.g. 'MVP for X, 4-week timeline'"
                  className="w-full px-4 py-3 rounded-xl font-raj text-white outline-none focus:ring-2 focus:ring-pink-500/30"
                  style={{
                    background: "rgba(10,5,20,0.5)",
                    border: "1px solid var(--cv-border)",
                  }}
                />
              </div>
            </div>
          </div>

          {state.error && (
            <div
              className="rounded-xl border p-4 mb-8 font-raj text-sm"
              style={{
                background: "rgba(239,68,68,0.1)",
                borderColor: "rgba(239,68,68,0.3)",
                color: "#fca5a5",
              }}
            >
              {state.error}
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-6">
            {service.packages.map((pkg) => {
              const loading = state.loadingPackageId === pkg.id;
              return (
                <div
                  key={pkg.id}
                  className="relative rounded-2xl border p-7 flex flex-col"
                  style={{
                    background: "var(--cv-card)",
                    borderColor: pkg.popular ? service.color : "var(--cv-border)",
                    boxShadow: pkg.popular ? `0 0 40px ${service.color}20` : "none",
                  }}
                >
                  {pkg.popular && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full font-jb text-[10px] tracking-wider text-white"
                      style={{ background: service.color }}
                    >
                      MOST POPULAR
                    </div>
                  )}
                  <div
                    className="font-jb text-[10px] text-purple-500 tracking-widest mb-2"
                  >
                    {pkg.name.toUpperCase()}
                  </div>
                  <p className="font-raj text-sm text-purple-300/70 mb-5 min-h-[40px]">
                    {pkg.tagline}
                  </p>
                  <div className="mb-6">
                    <div className="font-cyber text-4xl font-black text-white">
                      {pkg.priceLabel}
                    </div>
                    <div className="font-jb text-[10px] text-purple-500 mt-1">
                      ONE-TIME · {pkg.duration}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-3 font-raj text-sm text-purple-200/80">
                        <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: service.color }} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => buyPackage(pkg)}
                    disabled={loading || state.loadingPackageId !== null}
                    className="w-full px-5 py-3.5 rounded-xl font-raj font-bold text-white transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{
                      background: pkg.popular
                        ? `linear-gradient(135deg, ${service.color}, ${service.color}dd)`
                        : "rgba(255,255,255,0.06)",
                      border: pkg.popular ? "none" : "1px solid var(--cv-border)",
                      boxShadow: pkg.popular ? `0 0 30px ${service.color}40` : "none",
                    }}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Redirecting…
                      </>
                    ) : (
                      <>
                        BUY {pkg.name.toUpperCase()} — {pkg.priceLabel}
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          <div
            className="mt-12 rounded-2xl border p-6 flex items-center gap-4 text-sm text-purple-300/60"
            style={{ background: "rgba(168,85,247,0.05)", borderColor: "rgba(168,85,247,0.2)" }}
          >
            <Lock className="w-5 h-5 flex-shrink-0 text-purple-400" />
            <span>
              Payment is processed by Stripe. You will be redirected to a secure Stripe-hosted checkout page.
              Test mode uses card <code className="font-jb text-purple-300">4242 4242 4242 4242</code>.
            </span>
          </div>

          <div className="mt-8 text-center text-sm text-purple-300/50">
            Need something custom? <Link href="/contact" className="text-purple-400 hover:text-white">Send a brief →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
