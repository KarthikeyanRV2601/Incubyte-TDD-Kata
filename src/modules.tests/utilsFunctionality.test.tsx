import { add } from "../module.utils/stringCalculatorUtils";

describe("String Calculator", () => {

  test("should return 0 for an empty string", () => {
    const numbers = ""
    expect(add(numbers)).toBe(0);
  });

  test("should return the number itself if only one number is provided", () => {
    const numbers = "5"
    expect(add(numbers)).toBe(5);
  });

  test("should return the sum of two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
  });

});