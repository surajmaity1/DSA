import { cartInfo } from "../../DSAQuestions/cartSystem.ts";

export const testCarts: cartInfo[] = [
  {
    baseAmount: 100,
    coupons: [
      {
        type: "percentage",
        value: 14,
      },
    ],
  },
  {
    baseAmount: 150,
    coupons: [
      {
        type: "value",
        value: 29,
      },
    ],
  },
  {
    baseAmount: 267,
    coupons: [
      {
        type: "value",
        value: 29,
      },
      {
        type: "value",
        value: 17,
      },
    ],
  },
  {
    baseAmount: 531,
    coupons: [
      {
        type: "percentage",
        value: 37,
      },
      {
        type: "percentage",
        value: 29,
      },
    ],
  },
  {
    baseAmount: 399,
    coupons: [
      {
        type: "percentage",
        value: 34,
      },
      {
        type: "value",
        value: 16,
      },
    ],
  },
  {
    baseAmount: 999,
    coupons: [
      {
        type: "percentage",
        value: 13,
      },
      {
        type: "percentage",
        value: 34,
      },
      {
        type: "value",
        value: 16,
      },
    ],
  },
];
