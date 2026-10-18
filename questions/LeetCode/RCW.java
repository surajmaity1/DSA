package LeetCode;

public class RCW {
    // https://leetcode.com/problems/richest-customer-wealth/description/
    public int maximumWealth(int[][] accounts) {
        int max = 0;
        for(int[] a: accounts) {
            int sum = 0;
            for(int val: a) sum += val;
            if(max < sum) max = sum;
        }
        return max;
    }
}
