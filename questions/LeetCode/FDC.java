package LeetCode;

public class FDC {
    //https://leetcode.com/problems/fair-distribution-of-cookies/
    int res = Integer.MAX_VALUE;

    public int distributeCookies(int[] cookies, int k) {
        solve(cookies, k, new int[k], 0);
        return res;
    }

    public void solve(int[] cks, int k, int[] child, int present) {
        if (present == cks.length) {
            int max = 0;
            for (int i : child) max = Math.max(max, i);
            res = Math.min(res, max);
            return;
        }
        for (int i = 0; i < k; i++) {
            child[i] += cks[present];
            solve(cks, k, child, present + 1);
            child[i] -= cks[present];
        }
    }
}
