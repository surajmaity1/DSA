package LeetCode;


//https://leetcode.com/problems/design-a-stack-with-increment-operation/
import java.util.Stack;
class CustomStack {
    int maxSize;
    int[] refForInc;
    Stack<Integer> stack;
    public CustomStack(int maxSize) {
        stack = new Stack<>();
        this.maxSize = maxSize;
        refForInc = new int[this.maxSize];
    }

    public void push(int x) {
        if (stack.size() < maxSize)
            stack.push(x);
    }

    public int pop() {
        int i = stack.size() - 1;
        if (i < 0)
            return -1;
        if (i > 0)
            refForInc[i - 1] += refForInc[i];
        int res = stack.pop() + refForInc[i];
        refForInc[i] = 0;
        return res;
    }

    public void increment(int k, int val) {
        int i = Math.min(k, stack.size()) - 1;
        if (i >= 0)
            refForInc[i] += val;
    }
}