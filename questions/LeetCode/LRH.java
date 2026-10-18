package LeetCode;

import java.util.Stack;

public class LRH {
    //https://leetcode.com/problems/largest-rectangle-in-histogram/
    public int largestRectangleArea(int[] heights) {
        Stack<Integer> stack = new Stack<>();
        int n = heights.length;
        int maxRect = 0;

        stack.push(0);

        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && heights[i] < heights[stack.peek()]){
                maxRect = getMax(i, maxRect, stack, heights);
            }
            stack.push(i);
        }
        while (!stack.isEmpty()){
            maxRect = getMax(n, maxRect, stack, heights);
        }

        return maxRect;
    }
    private static int getMax(int i, int maxRect, Stack<Integer> stack, int[] heights){
        int calculateArea;
        if (stack.isEmpty()) calculateArea = heights[stack.pop()] * i;
        else calculateArea = heights[stack.pop()] * ((i - 1) - stack.peek());
        return Math.max(maxRect, calculateArea);
    }
}
