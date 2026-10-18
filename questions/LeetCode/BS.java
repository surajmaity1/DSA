package LeetCode;

import java.util.HashSet;
import java.util.Set;

public class BS {
    //https://leetcode.com/problems/buddy-strings/
    //859. Buddy Strings
    public boolean buddyStrings(String s, String goal) {
        if (s.length() != goal.length()) return false;

        int n = s.length();

        if (s.equals(goal)){
            Set<Character> set = new HashSet<>();
            for(char c : s.toCharArray()) set.add(c);
            return (set.size() < n);
        }

        int idx1 = -1, idx2 = -1;

        for(int i = 0; i < n; i++){
            if(s.charAt(i) != goal.charAt(i)){
                if (idx1 == -1) idx1 = i;
                else if (idx2 == -1) idx2 = i;
                else return false;
            }
        }

        return (idx2 != -1 && s.charAt(idx1) == goal.charAt(idx2) && s.charAt(idx2) == goal.charAt(idx1));
    }
}
