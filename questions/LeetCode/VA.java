package LeetCode;

public class VA {
    // https://leetcode.com/problems/valid-anagram/description/
    public boolean isAnagram(String s, String t) {
        int[] arr = new int[26];
        int sl = s.length();
        int tl = t.length();
        int i = 0;
        while(i< sl && i < tl) {
            char c = s.charAt(i);
            arr[c-'a']++;
            c = t.charAt(i);
            arr[c-'a']--;
            i++;
        }

        while(i < sl) {
            char c = s.charAt(i);
            arr[c-'a']++;
            i++;
        }
        while(i < tl) {
            char c = t.charAt(i);
            arr[c-'a']--;
            i++;
        }

        for(int val: arr){
            if (val != 0) return false;
        }
        return true;
    }
}
