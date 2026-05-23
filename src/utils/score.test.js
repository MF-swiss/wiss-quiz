import { describe, it, expect } from "vitest";
import { isPerfectScore } from "./score";

describe("isPerfectScore", () => {
  it("ist true, wenn alle Fragen richtig beantwortet sind", () => {
    expect(isPerfectScore(5, 5)).toBe(true);
  });

  it("ist false, wenn nicht alle Fragen richtig sind", () => {
    expect(isPerfectScore(3, 5)).toBe(false);
  });
});