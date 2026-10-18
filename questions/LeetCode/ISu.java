package LeetCode;

public class ISu {
    //https://leetcode.com/problems/is-subsequence/description/
    public boolean isSubsequence(String s, String t) {
        int sl = s.length();
        int tl = t.length();

        if(sl > tl) return false;
        int si = 0, ti = 0;

        while(si < sl && ti < tl){
            char sc = s.charAt(si);
            char tc = t.charAt(ti);

            if(sc == tc) si++;
            ti++;
        }

        return si == sl;
    }
}
