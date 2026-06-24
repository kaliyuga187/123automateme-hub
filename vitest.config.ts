/**
 * Vitest config — minimal, matches the project's needs.
 *
 * Tests live next to source as *.test.ts. We exclude node_modules, the
 * Next.js build, and the public assets dir.
 */
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
