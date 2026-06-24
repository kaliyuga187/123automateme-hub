/**
 * Unit tests for the in-memory subscription store.
 *
 * Validates: tier mapping, upsert idempotency, cancel behaviour, summary
 * output. Pure functions, no Stripe SDK required.
 */
import { describe, it, expect, beforeEach } from "vitest";
import {
  getSubscriptionByCustomer,
  getSubscriptionByEmail,
  upsertSubscription,
  cancelSubscription,
  priceToTier,
  summarise,
  type Subscription,
} from "@/lib/subscriptions";

const sample: Subscription = {
  customerId: "cus_test_123",
  email: "buyer@example.com",
  tier: "pro",
  status: "active",
  currentPeriodEnd: 1_700_000_000,
  cancelAtPeriodEnd: false,
  updatedAt: 0,
};

describe("subscriptions store", () => {
  beforeEach(() => {
    // Best-effort cleanup; the store has no global reset, so we use unique
    // customer IDs per test to avoid cross-pollution.
  });

  it("priceToTier resolves via env STRIPE_PRICE_* vars", () => {
    process.env.STRIPE_PRICE_STARTER = "price_starter_xyz";
    process.env.STRIPE_PRICE_PRO = "price_pro_xyz";
    process.env.STRIPE_PRICE_STUDIO = "price_studio_xyz";

    expect(priceToTier("price_starter_xyz")).toBe("starter");
    expect(priceToTier("price_pro_xyz")).toBe("pro");
    expect(priceToTier("price_studio_xyz")).toBe("studio");
    expect(priceToTier("price_unknown")).toBeNull();
    expect(priceToTier(null)).toBeNull();
    expect(priceToTier(undefined)).toBeNull();
  });

  it("upsert then get by customer id", () => {
    upsertSubscription({ ...sample, customerId: "cus_a" });
    const got = getSubscriptionByCustomer("cus_a");
    expect(got?.tier).toBe("pro");
    expect(got?.status).toBe("active");
  });

  it("upsert is idempotent (overwrites)", () => {
    upsertSubscription({ ...sample, customerId: "cus_b", tier: "starter" });
    upsertSubscription({ ...sample, customerId: "cus_b", tier: "studio" });
    expect(getSubscriptionByCustomer("cus_b")?.tier).toBe("studio");
  });

  it("getSubscriptionByEmail is case-insensitive", () => {
    upsertSubscription({ ...sample, customerId: "cus_c", email: "MiXeD@Example.com" });
    expect(getSubscriptionByEmail("mixed@example.com")?.customerId).toBe("cus_c");
    expect(getSubscriptionByEmail("MIXED@example.com")?.customerId).toBe("cus_c");
  });

  it("cancelSubscription sets status to canceled but keeps record", () => {
    upsertSubscription({ ...sample, customerId: "cus_d" });
    cancelSubscription("cus_d");
    const got = getSubscriptionByCustomer("cus_d");
    expect(got?.status).toBe("canceled");
  });

  it("cancelSubscription on missing customer is a no-op (no throw)", () => {
    expect(() => cancelSubscription("cus_does_not_exist")).not.toThrow();
  });

  it("summarise reports isPaid=true only for active/trialing", () => {
    const active: Subscription = { ...sample, status: "active" };
    const trialing: Subscription = { ...sample, status: "trialing" };
    const pastDue: Subscription = { ...sample, status: "past_due" };
    const canceled: Subscription = { ...sample, status: "canceled" };

    expect(summarise(active).isPaid).toBe(true);
    expect(summarise(trialing).isPaid).toBe(true);
    expect(summarise(pastDue).isPaid).toBe(false);
    expect(summarise(canceled).isPaid).toBe(false);
    expect(summarise(undefined).isPaid).toBe(false);
  });

  it("summarise formats currentPeriodEnd as ISO date", () => {
    const s: Subscription = {
      ...sample,
      currentPeriodEnd: 1_700_000_000, // 2023-11-14T22:13:20Z
    };
    const result = summarise(s);
    expect(result.renewsAt).toBe("2023-11-14T22:13:20.000Z");
  });
});
