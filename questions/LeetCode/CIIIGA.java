package LeetCode;

public class CIIIGA {
    //https://leetcode.com/problems/check-if-it-is-a-good-array/

    public boolean isGoodArray1(int[] nums) {
        int x = nums[0], y;
        for (int a: nums) {
            x = gcd(a, x);
        }
        return x == 1;
    }
    public int gcd(int a, int x){
        int y;
        while (a > 0){
            y = x % a;
            x = a;
            a = y;
        }
        return x;
    }

    public boolean isGoodArray2(int[] nums) {
        if(nums == null || nums.length == 0)
            return false;

        int n = nums.length;
        int gcd = nums[0];
        for(int i=1;i < n; i++){
            gcd = gcdRecursion(nums[i], gcd);
        }

        return gcd == 1;
    }

    public int gcdRecursion(int a, int b){
        if(a == 0)
            return b;
        return gcdRecursion(b%a, a);
    }
}
