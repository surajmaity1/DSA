package LeetCode;

import java.util.HashSet;
import java.util.Set;

public class CDII {

    // https://leetcode.com/problems/contains-duplicate-ii

    public boolean containsNearbyDuplicate(int[] nums, int k) {
        int length = nums.length;
        if (length < 2) return false;

        Set<Integer> window = new HashSet<>();
        int left = 0;

        for (int right = 0; right < length; right++) {
            if (right-left > k) {
                window.remove(nums[left]);
                left++;
            }

            if (!window.add(nums[right])) return true;

            window.add(nums[right]);
        }

        return false;
    }
}
