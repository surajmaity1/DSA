import { describe, expect, it } from "vitest";
import { calculateCartFinalAmount } from "../DSAQuestions/cartSystem.ts";
import { testCarts } from "./fixtures/cartSystem.ts";

describe("Cart System", () => {
  it("should return correct amount for given coupon based on percentage", () => {
    const finalAmount = calculateCartFinalAmount(testCarts[0]);
    expect(finalAmount).to.be.equal(101.48);
  });

  it("should return correct amount for given coupon based on value", () => {
    const finalAmount = calculateCartFinalAmount(testCarts[1]);
    expect(finalAmount).to.be.equal(142.78);
  });

  it("should return correct amount for two coupons based on value", () => {
    const finalAmount = calculateCartFinalAmount(testCarts[2]);
    expect(finalAmount).to.be.equal(260.78);
  });

  it("should return correct amount for two coupons based on percentage", () => {
    const finalAmount = calculateCartFinalAmount(testCarts[3]);
    expect(finalAmount).to.be.equal(280.269234);
  });

  it("should return correct amount for two different types of coupons", () => {
    const finalAmount = calculateCartFinalAmount(testCarts[4]);
    expect(finalAmount).to.be.equal(298.2804);
  });

  it("should return correct amount for different types of coupons", () => {
    const finalAmount = calculateCartFinalAmount(testCarts[5]);
    expect(Math.abs(666.037548 - finalAmount)).to.be.lessThan(1);
  });
});
