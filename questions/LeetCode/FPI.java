package LeetCode;

import java.util.Arrays;

public class FPI {
    //https://leetcode.com/problems/find-pivot-index/
    public int pivotIndex(int[] nums) {
        if(nums == null || nums.length == 0) return -1;

        int n = nums.length;
        int leftSum = 0;
        int total = 0;

        for(int a: nums) total += a;
        for (int i = 0; i < n; leftSum += nums[i++]) {
            if (leftSum * 2 == total - nums[i]) return i;
        }

        return -1;
    }
}
