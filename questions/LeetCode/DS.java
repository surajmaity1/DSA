package LeetCode;

import java.util.Objects;
import java.util.Stack;

public class DS {
    // https://leetcode.com/problems/decode-string/description/
    public String decodeString(String s) {
        if(s.length()==0) return "";
        Stack<String> stack = new Stack<>();

        int numberOfTimes = 0;
        for(int i=0; i<s.length(); i++)
        {
            char c = s.charAt(i);
            if(c>='0'&&c<='9') numberOfTimes = numberOfTimes*10 + c-'0';
            else if(c=='[')
            {
                stack.push(numberOfTimes + "");
                stack.push("[");
                numberOfTimes = 0;
            }
            else if(c==']')
            {
                StringBuilder str = new StringBuilder();
                //keep pop until meet '['
                while(!Objects.equals(stack.peek(), "["))
                {
                    str.insert(0, stack.pop());
                }
                stack.pop(); //pop '['
                int repeat = Integer.parseInt(stack.pop());
                stack.push(String.valueOf(str).repeat(Math.max(0, repeat)));
            }
            else stack.push(c+"");
        }
        StringBuilder ans = new StringBuilder();
        while(!stack.isEmpty()) ans.insert(0, stack.pop());
        return ans.toString();
    }
}
