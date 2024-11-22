import { add } from "../module.utils/stringCalculatorUtils";

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    const numbers = ""
    expect(add(numbers)).toBe(0);
  });
});