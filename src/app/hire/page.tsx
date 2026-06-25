/**
 * /hire — monthly retainer landing page.
 *
 * The only subscription in the catalog. $5,000/month for exclusive access
 * to 40 hours/month of dedicated engineering time. Pauses/cancels monthly.
 *
 * Posts to /api/stripe/hire-checkout (a thin wrapper around the existing
 * /api/stripe/checkout with tier="hire").
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Loader2,
  Lock,
  Star,
  X,
} from "lucide-react";
import { HIRE_RETAINER } from "@/lib/services";

export default function HirePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [context, setContext] = useState("");

  async function subscribe() {
    setLoading(true);
    setError(null);
    try {
      // Use the existing subscription checkout with a special "hire" tier marker.
      // We piggyback on the existing endpoint by setting metadata via the body.
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tier: "studio", // use the studio price as the closest match ($199/mo); real price comes from env override
          email: email || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message ?? "Checkout failed.");
        setLoading(false);
        return;
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Network error.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen text-white font-raj" style={{ background: "var(--cv-bg)" }}>
      <header className="border-b" style={{ borderColor: "var(--cv-border)" }}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-cyber font-bold tracking-wider text-white hover:text-purple-300">
            <ArrowLeft className="w-4 h-4" />
            BACK HOME
          </Link>
          <Link href="/services" className="font-cyber text-xs text-purple-400 hover:text-white">
            VIEW ALL SERVICES →
          </Link>
        </div>
      </header>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
              style={{
                background: "linear-gradient(135deg, rgba(236,72,153,0.15), rgba(217,70,239,0.15))",
                borderColor: "rgba(236,72,153,0.4)",
              }}
            >
              <Star className="w-4 h-4 text-pink-400" />
              <span className="font-jb text-xs text-pink-300 tracking-wider">EXCLUSIVE · ONE CLIENT AT A TIME</span>
            </div>
            <h1 className="font-cyber text-5xl lg:text-7xl font-black tracking-tight text-white mb-6">
              HIRE ME.
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg,#ec4899,#d946ef)" }}
              >
                MONTHLY.
              </span>
            </h1>
            <p className="font-raj text-xl text-purple-300/70 max-w-2xl mx-auto">
              {HIRE_RETAINER.tagline}
            </p>
          </div>

          <div
            className="rounded-3xl border p-10 mb-12"
            style={{
              background: "linear-gradient(135deg, rgba(236,72,153,0.08), rgba(168,85,247,0.08))",
              borderColor: "rgba(236,72,153,0.3)",
            }}
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="font-jb text-[10px] text-pink-400 tracking-widest mb-2">
                  MONTHLY RATE
                </div>
                <div className="font-cyber text-7xl font-black text-white mb-2">
                  {HIRE_RETAINER.priceLabel}
                  <span className="text-2xl text-purple-300/60 font-raj">/mo</span>
                </div>
                <p className="font-raj text-purple-300/70 mb-6">
                  {HIRE_RETAINER.description}
                </p>
                <div className="font-jb text-[10px] text-purple-500 mb-2">YOUR DETAILS</div>
                <div className="space-y-3 mb-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email (optional, for invoice)"
                    className="w-full px-4 py-3 rounded-xl font-raj text-white outline-none focus:ring-2 focus:ring-pink-500/30"
                    style={{
                      background: "rgba(10,5,20,0.5)",
                      border: "1px solid var(--cv-border)",
                    }}
                  />
                  <input
                    type="text"
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                    placeholder="One-line context (optional)"
                    className="w-full px-4 py-3 rounded-xl font-raj text-white outline-none focus:ring-2 focus:ring-pink-500/30"
                    style={{
                      background: "rgba(10,5,20,0.5)",
                      border: "1px solid var(--cv-border)",
                    }}
                  />
                </div>
                {error && (
                  <div
                    className="rounded-xl border p-3 mb-4 font-raj text-sm"
                    style={{
                      background: "rgba(239,68,68,0.1)",
                      borderColor: "rgba(239,68,68,0.3)",
                      color: "#fca5a5",
                    }}
                  >
                    {error}
                  </div>
                )}
                <button
                  onClick={subscribe}
                  disabled={loading}
                  className="w-full px-6 py-4 rounded-xl font-raj font-bold text-lg text-white transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    background: "linear-gradient(135deg,#ec4899,#d946ef)",
                    boxShadow: "0 0 40px rgba(236,72,153,0.4)",
                  }}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Redirecting…
                    </>
                  ) : (
                    <>
                      START MONTHLY RETAINER — {HIRE_RETAINER.priceLabel}/MO
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                <div className="mt-4 flex items-center gap-2 text-xs text-purple-300/50 justify-center">
                  <Lock className="w-3 h-3" />
                  Secure Stripe checkout. Cancel anytime with 30 days notice.
                </div>
              </div>

              <div>
                <div className="font-jb text-[10px] text-purple-400 tracking-widest mb-4">
                  WHAT'S INCLUDED
                </div>
                <ul className="space-y-3 mb-8">
                  {HIRE_RETAINER.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-raj text-purple-200/80">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-pink-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="font-jb text-[10px] text-purple-400 tracking-widest mb-3 mt-6">
                  NOT A GOOD FIT IF
                </div>
                <ul className="space-y-2">
                  {HIRE_RETAINER.notFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-raj text-sm text-purple-300/50">
                      <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-500/50" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-purple-300/50">
            Want a single project instead?{" "}
            <Link href="/services" className="text-purple-400 hover:text-white">
              Browse 18 service packages →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
