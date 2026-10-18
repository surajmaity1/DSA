package LeetCode;

public class DC {
    //https://leetcode.com/problems/detect-capital/description/
    public boolean detectCapitalUse1(String word) {
        int capCount = 0;
        int l = word.length();

        for(int i = 0; i < l; i++){
            char c = word.charAt(i);
            if(c >= 65 && c <= 90) capCount++;
        }

        if(capCount == 0 || capCount == l) return true;
        char c = word.charAt(0);
        return capCount == 1 && c <= 90 && c >= 65;
    }
}
