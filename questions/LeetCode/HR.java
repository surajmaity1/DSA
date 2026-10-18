package LeetCode;

import java.util.Arrays;

public class HR {
    //https://leetcode.com/problems/house-robber/


    //BEST SOLUTION
    public int rob(int[] nums){
        if (nums == null || nums.length == 0) return 0;
        int rob1 = 0;
        int rob2 = 0;

        for(int val : nums){
            int temp = Math.max(val + rob1, rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2;
    }


    //using DP
    int[] memo;
    public int rob1(int[] nums) {
        memo = new int[nums.length + 1];
        Arrays.fill(memo, -1);
        return rob1(nums, nums.length - 1);
    }

    private int rob1(int[] nums, int i) {
        if (i < 0) {
            return 0;
        }
        if (memo[i] >= 0) {
            return memo[i];
        }
        int result = Math.max(rob1(nums, i - 2) + nums[i], rob1(nums, i - 1));
        memo[i] = result;
        return result;
    }
}
