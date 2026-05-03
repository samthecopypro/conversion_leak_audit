import { describe, expect, it, beforeEach, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

describe("leads.submitEmail", () => {
  it("accepts a valid email and returns success", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.submitEmail({
      email: "test@example.com",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects invalid email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.leads.submitEmail({
        email: "not-an-email",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("Invalid email");
    }
  });

  it("rejects empty email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.leads.submitEmail({
        email: "",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("Invalid email");
    }
  });
});

describe("leads.getAll", () => {
  it("returns an array of leads", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.getAll();

    expect(Array.isArray(result)).toBe(true);
  });
});
