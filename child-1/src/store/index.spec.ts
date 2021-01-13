import {setupVuex} from "@/store";

describe("store", () => {
  it("setup correctly", () => {
    const store = setupVuex();
    expect(store).toBeDefined();
  });
});
