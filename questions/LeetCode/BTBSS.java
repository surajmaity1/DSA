package LeetCode;

public class BTBSS {
    //https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
    public int maxProfit(int[] prices) {
        int maxProfit = 0;
        int n = prices.length;
        int minBuyPrice = prices[0];

        for(int i = 1; i < n; i++){
            int currentProfit = prices[i] - minBuyPrice;
            maxProfit = Math.max(currentProfit, maxProfit);
            minBuyPrice = Math.min(minBuyPrice, prices[i]);
        }
        return maxProfit;
    }
    //BRUTE FORCE (BUT VERY BIG SIZE OF ARRAY IT WILL GIVE TLE)
    public int maxProfit1(int[] prices) {
        int n = prices.length;
        int max = 0;
        for(int i = 0; i < n; i++){
            int temp = 0;
            for(int j = i +1; j < n; j++){
                if( prices[j]-prices[i] > temp){
                    temp = prices[j]-prices[i];
                }
            }
            if(max < temp){
                max = temp;
            }
        }
        return max;
    }
}
