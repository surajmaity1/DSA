package LeetCode;

import java.util.HashMap;
import java.util.Map;

public class LP {
    //https://leetcode.com/problems/longest-palindrome/

    public int longestPalindrome(String s) {
        int n = s.length();
        if (n == 1) return 1;

        Map<Character, Integer> map = new HashMap<>();
        for(int i = 0; i < n; i++){
            char c = s.charAt(i);
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        int res = 0;
        boolean oddFreqPresent = false;

        for (int freq: map.values()){
            if (freq % 2 == 0) res += freq;
            else{
                oddFreqPresent = true;
                res += freq - 1;
            }
        }
        return (oddFreqPresent)? res+1: res;
    }
}
