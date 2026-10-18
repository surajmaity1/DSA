package LeetCode;

public class PF {
    //https://leetcode.com/problems/power-of-four/

    //best
    static boolean isPowerOfFour(int n) {
        return n>0 && (n&(n-1)) == 0 && (n % 10 == 1 || n % 10 == 4 || n % 10 == 6);
    }

    //best
    boolean isPowerOfFour3(int n) {
        return n > 0 && (n&(n-1)) == 0 && (n - 1) % 3 == 0;
    }

    //best
    public boolean isPowerOfTwo(int n) {
        return n > 0 && (Math.floor(n) == Math.ceil(n));

    }

    //Note: log and exponential are inverse [means opposite]
    //logx(b) =  y.. => b^y = x
    static boolean isPowerOfFour4(int n) {
        return (Math.log(n) / Math.log(4)) % 1 == 0;
    }




    //TC: log(n)
    public boolean isPowerOfFour2(int n) {
        if(n==0){return false;}

        while (n != 1){
            if(n %4 != 0){return false;}
            n /=4;
        }
        return true;
    }

    //Brute-Force
    //Note: it will give TLE
    public boolean isPowerOfFour1(int n) {
        if(n==1){
            return true;
        }

        int i = 4;
        while(i< n){
            i *=4;
        }
        return i == n;
    }
}
