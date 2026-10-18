package LeetCode;

import java.util.Arrays;

public class LPT {
    //https://leetcode.com/problems/largest-perimeter-triangle/
    public int largestPerimeter(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length - 1;

        for(int i = n; i > 1; i--){
            if (nums[i] < nums[i-1] + nums[i-2])
                return nums[i] + nums[i-1] + nums[i-2];
        }

        return 0;
    }
}
