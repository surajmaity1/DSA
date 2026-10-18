package LeetCode;

import java.util.ArrayList;
import java.util.List;

public class SR {
    // https://leetcode.com/problems/summary-ranges

    public List<String> summaryRanges(int[] nums) {
        List<String> list = new ArrayList<>();
        if (nums == null || nums.length == 0) return list;

        int length = nums.length;
        if (length == 1) {
            list.add(nums[0] + "");
        }
        for (int index = 1; index < length; index++) {
            if (nums[index] - nums[index-1] == 1) {
                //list.get(nums[index-1]) +
            }
        }

        return list;
    }
}
