package LeetCode;

public class RS1A {
    //https://leetcode.com/problems/running-sum-of-1d-array
    public int[] runningSum(int[] nums) {
        if (nums == null || nums.length == 0) return null;

        for(int i = 1; i < nums.length; i++){
            nums[i] += nums[i-1];
        }
        return nums;
    }
}
