package LeetCode;

public class LLW {

    // https://leetcode.com/problems/length-of-last-word/
    public int lengthOfLastWord1(String s) {
        int lastWordLength = 0;
        if (s == null || s.isEmpty()) return lastWordLength;

        int stringLength = s.length() - 1;

        while(stringLength >= 0 && s.charAt(stringLength) == ' ') stringLength--;
        while(stringLength >= 0 && s.charAt(stringLength) != ' ') {
            stringLength--;
            lastWordLength++;
        }

        return lastWordLength;
    }
    public int lengthOfLastWord2(String s) {
        int res = 0;

        if (s == null || s.isEmpty()) return res;
        int length = s.length();
        boolean firstSpace = false;

        for(int index = length - 1; index > -1; index--) {
            char eachChar = s.charAt(index);
            if (eachChar == ' '){
                if (!firstSpace)continue;
                else return res;
            }
            else {
                firstSpace = true;
                res++;
            }
        }

        return res;
    }
}
