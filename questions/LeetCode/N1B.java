package LeetCode;

public class N1B {
    //https://leetcode.com/problems/number-of-1-bits/
    // you need to treat n as an unsigned value
    public int hammingWeight3(int n) {
        int count = 0;

        while(n != 0){
            n -= (n & -n);
            count++;
        }
        return count;
    }
    public int hammingWeight2(int n) {
        int count = 0;

        while(n != 0){
            n &= (n-1);
            count++;
        }
        return count;
    }
    public int hammingWeight1(int n) {
        int ones = 0;
        while (n != 0){
            ones += (n&1);
            n >>>=1;
        }
        return ones;
    }
}
