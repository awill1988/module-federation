import {setupRouter} from "@/router";

describe("router", () => {
  it("setup correctly", () => {
    const router = setupRouter();
    expect(router).toBeDefined();
  });
});
