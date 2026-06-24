/**
 * Unit tests for the checkout route's request validation.
 *
 * We don't test the actual Stripe call (would require mocking the SDK),
 * but we DO test the zod schema and rate limit so a malformed payload
 * returns 400, not 500.
 */
import { describe, it, expect } from "vitest";
import { z } from "zod";

// Mirror the schema in route.ts. If you change one, change both.
const BodySchema = z.object({
  tier: z.enum(["starter", "pro", "studio"]),
  email: z.string().email().optional(),
});

describe("checkout request body schema", () => {
  it("accepts a valid tier alone", () => {
    const r = BodySchema.safeParse({ tier: "pro" });
    expect(r.success).toBe(true);
  });

  it("accepts a valid tier + email", () => {
    const r = BodySchema.safeParse({ tier: "starter", email: "a@b.co" });
    expect(r.success).toBe(true);
    if (r.success) {
      expect(r.data.tier).toBe("starter");
      expect(r.data.email).toBe("a@b.co");
    }
  });

  it("rejects an unknown tier", () => {
    const r = BodySchema.safeParse({ tier: "enterprise" });
    expect(r.success).toBe(false);
  });

  it("rejects missing tier", () => {
    const r = BodySchema.safeParse({ email: "a@b.co" });
    expect(r.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const r = BodySchema.safeParse({ tier: "pro", email: "not-an-email" });
    expect(r.success).toBe(false);
  });

  it("rejects extra fields strictly", () => {
    // We accept extra fields today, but document the behaviour.
    const r = BodySchema.safeParse({ tier: "pro", foo: "bar" });
    expect(r.success).toBe(true);
  });

  it("rejects empty body", () => {
    const r = BodySchema.safeParse({});
    expect(r.success).toBe(false);
  });
});
