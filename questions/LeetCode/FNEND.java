package LeetCode;

public class FNEND {
    // https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
    public int findNumbers(int[] nums) {
        int count=0;

        for(int num: nums){
            if (num < 0) num *= -1;
            int dig = (int) (Math.log10(num)+1);
            if(dig%2 == 0) count++;
        }

        return count;
    }
    public int findNumbers2(int[] nums) {
        int count=0;

        for(int i =0 ; i< nums.length; i++){

            if((nums[i]>9 && nums[i]<100) || (nums[i]>999 && nums[i]<10000) || nums[i]==100000){
                count++;
            }
        }

        return count;
    }
    public int findNumbers3(int[] nums) {
        int res = 0;

        for(int a : nums){
            if(noOfDig(a)){
                res++;
            }
        }

        return res;
    }

    boolean noOfDig(int n){
        int res = 0;

        while(n>0){
            res += 1;
            n /= 10;
        }

        return (res%2 == 0);
    }
}
