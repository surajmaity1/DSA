package LeetCode;

public class FBV {
    //https://leetcode.com/problems/first-bad-version/description/
    int firstBad;
    public int firstBadVersion(int n) {
        int s = 1;
        int e = n;
        int ans = -1;
        while(s <= e){
            int m = s + (e-s)/2;
            boolean check = isBadVersion(m);

            if(check){
                ans = m;
                e = m - 1;
            }
            else{
                s = m + 1;
            }
        }
        return ans;
    }
    public boolean isBadVersion(int num){
        return num == firstBad;
    }
}
