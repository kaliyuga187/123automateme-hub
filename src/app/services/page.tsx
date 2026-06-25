/**
 * /services — index of 6 service categories with 18 packages.
 *
 * Each service card links to /services/[slug] where the actual
 * Stripe checkout happens. This page is the catalog overview.
 */
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Bot,
  Code2,
  Globe,
  Hammer,
  LineChart,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SERVICES, formatPrice } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services — 123automateme.com",
  description:
    "Six productized services with concrete deliverables and prices. From MVP builds to mobile apps to AI agents.",
};

const ICONS: Record<string, LucideIcon> = {
  Code2,
  Bot,
  LineChart,
  Wrench,
  Globe,
  Hammer,
};

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen text-white font-raj" style={{ background: "var(--cv-bg)" }}>
      <header className="border-b" style={{ borderColor: "var(--cv-border)" }}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="font-cyber font-bold tracking-wider text-white hover:text-purple-300">
            ← 123AUTO<span className="text-purple-400">ME</span>
          </Link>
          <Link
            href="/hire"
            className="px-5 py-2 rounded-lg font-raj font-bold text-sm text-white"
            style={{ background: "linear-gradient(135deg,#ec4899,#d946ef)" }}
          >
            Hire Me Monthly →
          </Link>
        </div>
      </header>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
              style={{ background: "rgba(168,85,247,0.08)", borderColor: "rgba(168,85,247,0.2)" }}
            >
              <Wrench className="w-4 h-4 text-purple-400" />
              <span className="font-jb text-xs text-purple-300 tracking-wide">SERVICES</span>
            </div>
            <h1 className="font-cyber text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
              PRODUCTIZED OFFERS.
              <br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#ec4899,#d946ef)" }}>
                CONCRETE DELIVERABLES.
              </span>
            </h1>
            <p className="font-raj text-xl text-purple-300/60 max-w-3xl mx-auto">
              Six services. Three packages each. Real prices, real timelines, real deliverables.
              Pick what you need — Stripe checkout takes 60 seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = ICONS[service.icon] ?? Code2;
              const startingPrice = Math.min(
                ...service.packages.map((p) => p.priceCents),
              );
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "var(--cv-card)",
                    borderColor: "var(--cv-border)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: `${service.color}12`,
                      border: `1px solid ${service.color}25`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <div className="font-jb text-[10px] text-purple-500 tracking-widest mb-2">
                    {service.category}
                  </div>
                  <h2 className="font-cyber text-xl font-bold tracking-wide text-white mb-3">
                    {service.title}
                  </h2>
                  <p className="font-raj text-sm text-purple-300/70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--cv-border)" }}>
                    <div>
                      <div className="font-jb text-[10px] text-purple-500">STARTING AT</div>
                      <div className="font-cyber text-2xl font-bold text-white">
                        {formatPrice(startingPrice)}
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-2 font-raj font-bold text-sm transition-transform group-hover:translate-x-1"
                      style={{ color: service.color }}
                    >
                      VIEW PACKAGES
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div
            className="mt-16 rounded-2xl border p-8 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(236,72,153,0.08), rgba(168,85,247,0.08))",
              borderColor: "rgba(236,72,153,0.25)",
            }}
          >
            <h3 className="font-cyber text-2xl font-bold text-white mb-3">
              Need a dedicated engineer?
            </h3>
            <p className="font-raj text-purple-300/70 mb-6 max-w-2xl mx-auto">
              Monthly retainer. One client at a time. 40 hours/month of dedicated work,
              priority response, and first right of refusal on any project I take.
            </p>
            <Link
              href="/hire"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-raj font-bold text-white"
              style={{
                background: "linear-gradient(135deg,#ec4899,#d946ef)",
                boxShadow: "0 0 30px rgba(236,72,153,0.3)",
              }}
            >
              Hire Me Monthly — $5,000/mo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
