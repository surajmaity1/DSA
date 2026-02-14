import { expect } from "chai";
import { longestSequenceConsecutiveIntegers } from "../DSAQuestions/longestSequenceConsecutiveIntegers.ts";

describe("longestSequenceConsecutiveIntegers", () => {
  it("should return 4 for a basic unsorted array", () => {
    const input = [100, 4, 200, 1, 3, 2];
    expect(longestSequenceConsecutiveIntegers(input)).to.equal(4);
  });

  it("should return 4 for mixed random numbers", () => {
    const input = [10, 5, 12, 3, 55, 30, 4, 11, 2];
    expect(longestSequenceConsecutiveIntegers(input)).to.equal(4);
  });

  it("should return 4 for another unsorted array", () => {
    const input = [1, 9, 3, 10, 4, 20, 2];
    expect(longestSequenceConsecutiveIntegers(input)).to.equal(4);
  });

  it("should return 5 for a longer consecutive sequence", () => {
    const input = [8, 20, 7, 30, 6, 5, 4];
    expect(longestSequenceConsecutiveIntegers(input)).to.equal(5);
  });

  it("should return 5 for reverse ordered consecutive numbers", () => {
    const input = [15, 14, 13, 12, 11];
    expect(longestSequenceConsecutiveIntegers(input)).to.equal(5);
  });

  it("should return 1 for a single element array", () => {
    const input = [7];
    expect(longestSequenceConsecutiveIntegers(input)).to.equal(1);
  });

  it("should return 1 when no consecutive numbers exist", () => {
    const input = [10, 20, 30, 40];
    expect(longestSequenceConsecutiveIntegers(input)).to.equal(1);
  });

  it("should handle negative consecutive numbers", () => {
    const input = [-3, -2, -1, 10];
    expect(longestSequenceConsecutiveIntegers(input)).to.equal(3);
  });
  
  it("should handle mixed negative and positive numbers", () => {
    const input = [-1, 0, 1, 2, 50];
    expect(longestSequenceConsecutiveIntegers(input)).to.equal(4);
  });

  it("should return longest sequence when multiple sequences exist", () => {
    const input = [1, 2, 3, 10, 11, 12, 13];
    expect(longestSequenceConsecutiveIntegers(input)).to.equal(4);
  });

  it("should work with already sorted consecutive numbers", () => {
    const input = [1, 2, 3, 4, 5, 6];
    expect(longestSequenceConsecutiveIntegers(input)).to.equal(6);
  });

  it("should work with large gaps between numbers", () => {
    const input = [1, 100, 200, 300];
    expect(longestSequenceConsecutiveIntegers(input)).to.equal(1);
  });

  it("should return correct length when consecutive sequence is in the middle", () => {
    const input = [50, 3, 4, 5, 100];
    expect(longestSequenceConsecutiveIntegers(input)).to.equal(3);
  });

  it("should return 1 for all identical elements", () => {
    const input = [5, 5, 5, 5];
    expect(longestSequenceConsecutiveIntegers(input)).to.equal(1);
  });

  it("should handle empty array gracefully", () => {
    const input: number[] = [];
    expect(longestSequenceConsecutiveIntegers(input)).to.equal(0);
  });

  it("should handle array with zero included", () => {
    const input = [0, 1, 2, 10];
    expect(longestSequenceConsecutiveIntegers(input)).to.equal(3);
  });
});
