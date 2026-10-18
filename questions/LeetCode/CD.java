package LeetCode;

import java.util.HashSet;
import java.util.Set;

public class CD {
    // https://leetcode.com/problems/contains-duplicate/description/
    public boolean containsDuplicate(int[] nums) {

        if (nums.length == 1) return false;
        Set<Integer> hashSet = new HashSet<>();

        for (int val: nums) {
            if (!hashSet.add(val)) return true;
        }

        return false;
    }
}
