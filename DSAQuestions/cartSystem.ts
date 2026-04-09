/*

-------------
Cart System
-------------

INPUT:
-----------------------------------------------
1. Base amount (number)
2. apply coupnes (max 3)
for ex: 10%, 20% (either percentage or value)
3. GST (e.g. 18%) luxury goods (FIXED)
4. Build system.

-----------------------------------------------
Time to solve this question - 10 minutes
-----------------------------------------------

Question:

1. If we have 3 coupons (2 percentage and 1 value), which type of coupons calculated first?
ans: value.


*/

type couponType = {
  type: "value" | "percentage";
  value: number;
};

export type cartInfo = {
  baseAmount: number;
  coupons: couponType[];
};

const FIXED_GST = 18; // 18%

export function calculateCartFinalAmount(data: cartInfo) {
  let discountedAmount = data.baseAmount;
  const percentageQueue = [];

  for (let index = 0; index < data.coupons.length; index++) {
    const coupon = data.coupons[index];

    if (coupon.type === "value") {
      discountedAmount -= coupon.value;
    } else if (coupon.type === "percentage") {
      percentageQueue.push(coupon.value);
    }
  }

  while (percentageQueue.length > 0) {
    const couponPercentage = percentageQueue.shift();

    if (couponPercentage) {
      discountedAmount -= (discountedAmount * couponPercentage) / 100;
    }
  }

  const finalAmountWithGSD =
    discountedAmount + (discountedAmount * FIXED_GST) / 100;

  return finalAmountWithGSD;
}
