package LeetCode;

public class PTHREE {
    //https://leetcode.com/problems/power-of-three/

    public boolean isPowerOfThree3(int n) {
        return n > 0 && ((Math.log10(n) / Math.log10(3))%1 == 0);
    }

    public boolean isPowerOfThree2(int n) {
        return n > 0 && (1162261467 % n == 0);
    }

    public boolean isPowerOfThree1(int n) {
        if(n==0){
            return false;
        }
        while(n!=1 && (n%3==0)){
            n/=3;
        }
        if(n==1){return true;}
        return false;

    }
}
