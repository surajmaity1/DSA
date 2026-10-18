package LeetCode;

import java.util.ArrayList;
import java.util.Stack;

public class SMAND {
    //https://leetcode.com/problems/steps-to-make-array-non-decreasing/



    /*
    public int totalSteps(int[] nums) {
        int n = nums.length;
        Stack<Pair<Integer, Integer>> stack = new Stack<>();
        int ans = 0;

        stack.push(new Pair<>(nums[n-1], 0));

        for(int i = n - 2; i >= 0 ; i--){
            int count = 0;

            while(!stack.isEmpty() && nums[i] > stack.peek().getKey()){
                count = Math.max(count + 1, stack.peek().getValue());
                stack.pop();
            }
            ans = Math.max(count, ans);
            stack.push(new Pair<>(nums[i], count));
        }

        return ans;
    }

     */
}
