package LeetCode;

public class SumZero {
    //https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
    public int[] sumZero(int n) {
        int[] ans = new int[n];
        int j = 0;
        int i = 1;

        while(i <= n/2){
            ans[j] = i;
            ans[j+1] = -i;

            j += 2;
            i++;
        }

        return ans;
    }
}
