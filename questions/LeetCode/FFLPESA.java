package LeetCode;

public class FFLPESA {

    // https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

    public int[] searchRange(int[] nums, int target) {
        int[] ans = {-1, -1};
        ans[0] = binarySearch(nums, target, true);
        if (ans[0] != -1) ans[1] = binarySearch(nums, target, false);
        return ans;
    }
    public int binarySearch (int[] nums, int target, boolean isFirstStartIndex) {
        int s = 0;
        int e = nums.length - 1;
        int res = -1;

        while (s <= e) {
            int m = s + (e - s) / 2;
            if (nums[m] > target) e = m - 1;
            else if (nums[m] < target) s = m + 1;
            else {
                res = m;
                if (isFirstStartIndex) e = m - 1;
                else s = m + 1;
            }
        }

        return res;
    }
}
