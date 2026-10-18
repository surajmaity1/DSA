package LeetCode;

public class Pow {
    //https://leetcode.com/problems/powx-n/

    // T.C: O(log(n))
    public double myPow(double x, int n) {
        double res = 1.0;
        long n1 = n;

        if(n1 < 0){n1 *= -1;}

        while(n1 >0){
            if(n1%2 == 0){
                x = x * x;
                n1 /= 2;
            }
            else{
                res *= x;
                n1--;
            }
        }

        if(n < 0){res = (double) 1.0/ res;}

        return res;
    }

    //brute-force
    public double myPow2(double x, int n) {
        if(n==0){
            return 1;
        }

        double res = x;
        int n1 = n;

        if(n1<0){
            n1 = n * -1;
        }

        for(int i = 0; i <n1-1; i++){
            res *= x;
        }

        if(n < 0){
            double d = 1;
            res = d / res;
        }

        return res;
    }
}
