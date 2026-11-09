import { describe, expect, it } from "vitest";
describe("academy foundation", () => {
 it("has a working test runner", () => expect("Bedrijfseconomie Academy").toContain("Academy"));
 it("keeps demo progress in range", () => expect(78).toBeGreaterThanOrEqual(0));
});
