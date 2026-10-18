package LeetCode;

import java.util.Arrays;

public class MICB {
    //https://leetcode.com/problems/maximum-ice-cream-bars/description/
    public int maxIceCream(int[] costs, int coins) {
        // using count sort

        // find max
        int max = 0;
        for(int val : costs){
            if (max < val) max = val;
        }

        int[] freqWithCost = new int[max+1];
        int iceCream = 0;

        for(int cost: costs){
            freqWithCost[cost]++;
        }

        for(int cost = 1; cost <= max; cost++){
            // No ice cream is present costing 'cost'.
            if(freqWithCost[cost] == 0) continue;
            // We don't have enough 'coins' to even pick one ice cream.
            if(coins < cost) break;

            // Count how many icecreams of 'cost' we can pick with our 'coins'.
            // Either we can pick all ice creams of 'cost' or we will be limited by remaining 'coins'.
            int c = Math.min(freqWithCost[cost], coins/cost);

            // We reduce price of picked ice creams from our coins.
            coins -= c * cost;
            iceCream += c;
        }
        return iceCream;
    }

    public int maxIceCream1(int[] costs, int coins) {
        Arrays.sort(costs);
        int count = 0;
        for(int val : costs){
            if (coins - val >= 0){
                count++;
                coins -= val;
            }
            else{
                break;
            }
        }
        return count;
    }
}
