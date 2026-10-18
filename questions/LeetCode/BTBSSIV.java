package LeetCode;

import java.util.Arrays;

public class BTBSSIV {
    //  https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
    //TODO: COMPLETE IT
    public static void main(String[] args) {
        int[] a = {3,2,6,5,0,3};
        int k = 2;
        System.out.println(maxProfit(k,a));
    }
    static int maxProfit(int k, int[] prices) {
        int max = 0;
        int[] arr = new int[1000];
        int index = 0;
        int n = prices.length;

        for(int i = 0; i < n; i++){
            int temp = 0;
            for(int j = i +1; j < n; j++){
                if( prices[j]-prices[i] > temp){
                    temp = prices[j]-prices[i];
                }
            }
            arr[index++] = temp;
        }
        Arrays.sort(arr);
        int l = 999;
        while(k-->0){
            max += arr[l--];
        }
        return max;
    }
}
