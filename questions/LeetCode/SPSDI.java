package LeetCode;

public class SPSDI {
    //https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
    public int subtractProductAndSum(int n) {

        int sum = 0, pod = 1;
        while(n != 0){
            int rem = n % 10;
            sum += rem;
            pod *= rem;
            n/=10;
        }

        return (pod-sum);
    }
}
