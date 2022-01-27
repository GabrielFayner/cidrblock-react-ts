import { getValueForRange } from "./getValueForRange";

describe("getValueForRange", () => {
  it("should respect lower limit", () => {
    expect(getValueForRange(-10, -5, 10)).toBe(-5);
    expect(getValueForRange(0, 0, 10)).toBe(0);
    expect(getValueForRange(10, 200, 300)).toBe(200);
  });
  it("should respect hippier limit", () => {
    expect(getValueForRange(-10, -20, -15)).toBe(-15);
    expect(getValueForRange(0, 0, 0)).toBe(0);
    expect(getValueForRange(200, 0, 1)).toBe(1);
  });
});
