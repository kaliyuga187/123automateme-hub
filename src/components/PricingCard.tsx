/**
 * Reusable pricing card. Server-component friendly — no client-only deps.
 */
"use client";

import type { ReactNode } from "react";

export interface PricingTier {
  id: "starter" | "pro" | "studio";
  name: string;
  price: number;
  interval: "month" | "year";
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
}

interface Props {
  tier: PricingTier;
  loading: boolean;
  onSubscribe: () => void;
}

export default function PricingCard({
  tier,
  loading,
  onSubscribe,
}: Props): ReactNode {
  const isHighlight = Boolean(tier.highlight);

  return (
    <article
      style={{
        background: isHighlight ? "rgba(16, 185, 129, 0.04)" : "#16161f",
        border: isHighlight
          ? "1px solid rgba(16, 185, 129, 0.4)"
          : "1px solid #1e293b",
        borderRadius: 12,
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        transition: "transform 0.15s, border-color 0.15s",
      }}
    >
      {tier.badge && (
        <span
          style={{
            position: "absolute",
            top: -12,
            left: 28,
            background: "#10b981",
            color: "#000",
            padding: "4px 10px",
            borderRadius: 6,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 0.6,
            textTransform: "uppercase",
          }}
        >
          {tier.badge}
        </span>
      )}

      <h2
        style={{
          margin: "0 0 4px",
          fontSize: 22,
          fontWeight: 700,
          color: "#f1f5f9",
        }}
      >
        {tier.name}
      </h2>
      <p
        style={{
          color: "#94a3b8",
          fontSize: 14,
          margin: "0 0 20px",
          minHeight: 40,
        }}
      >
        {tier.description}
      </p>

      <div style={{ marginBottom: 24 }}>
        <span
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: "#f1f5f9",
            letterSpacing: "-0.02em",
          }}
        >
          ${tier.price}
        </span>
        <span style={{ color: "#64748b", fontSize: 16, marginLeft: 4 }}>
          /{tier.interval}
        </span>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "0 0 28px",
          flexGrow: 1,
        }}
      >
        {tier.features.map((feature) => (
          <li
            key={feature}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              padding: "6px 0",
              color: "#cbd5e1",
              fontSize: 14,
              lineHeight: 1.5,
            }}
          >
            <span
              aria-hidden
              style={{
                color: "#10b981",
                fontWeight: 700,
                flexShrink: 0,
                marginTop: 1,
              }}
            >
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onSubscribe}
        disabled={loading}
        style={{
          width: "100%",
          padding: "12px 20px",
          background: loading
            ? "#1e293b"
            : isHighlight
              ? "#10b981"
              : "transparent",
          color: loading
            ? "#64748b"
            : isHighlight
              ? "#000"
              : "#10b981",
          border: isHighlight ? "none" : "1px solid #10b981",
          borderRadius: 8,
          fontSize: 15,
          fontWeight: 600,
          cursor: loading ? "wait" : "pointer",
          transition: "all 0.15s",
        }}
      >
        {loading ? "Redirecting to Stripe…" : tier.cta}
      </button>
    </article>
  );
}
