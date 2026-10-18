package LeetCode;

import java.util.Stack;

public class MAMPV {
    // https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/
    public int minAddToMakeValid(String s) {
        if (s == null || s.length() == 0) return -1;
        int needLft = 0, needRit = 0;
        int n = s.length();

        for (int i = 0; i < n; i++){
            if (s.charAt(i) == '(') needRit++;
            else if (needRit > 0) needRit--;
            else needLft++;
        }
        return needLft + needRit;
    }
    public int minAddToMakeValid2(String s) {
        if (s == null || s.length() == 0) return -1;
        int count = 0;
        int n = s.length();

        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < n; i++){
            char c = s.charAt(i);
            if (c == '(') stack.push(c);
            else if (!stack.isEmpty()) stack.pop();
            else count++;
        }
        return stack.size() + count;
    }
}
