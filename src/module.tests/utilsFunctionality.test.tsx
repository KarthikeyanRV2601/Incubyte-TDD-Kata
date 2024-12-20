import { StringCalculatorUtils } from "../module.utils";

describe("String Calculator", () => {

  test("should return 0 for an empty string", () => {
    const numbers = ""
    expect(StringCalculatorUtils.add(numbers).result).toBe(0);
  });

  test("should return the number itself if only one number is provided", () => {
    const numbers = "5"
    expect(StringCalculatorUtils.add(numbers).result).toBe(5);
  });

  test("should return the sum of two comma-separated numbers", () => {
    expect(StringCalculatorUtils.add("1,2").result).toBe(3);
  });

  test("should return the sum of more than two comma-separated numbers", () => {
    expect(StringCalculatorUtils.add("1,2,4,5").result).toBe(12);
  });

  test("should handle newlines as delimiters", () => {
    expect(StringCalculatorUtils.add("1\n2,3").result).toBe(6);
  });

  test("should handle custom delimiters", () => {
    expect(StringCalculatorUtils.add("//;\n1;2").result).toBe(3);
  });

  test("should throw an error for negative numbers", () => {
    expect(() => StringCalculatorUtils.add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
  });
});