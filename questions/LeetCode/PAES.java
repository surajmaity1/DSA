package LeetCode;

public class PAES {
    //https://leetcode.com/problems/product-of-array-except-self/

    //EXTRA SPACE
    public int[] productExceptSelf2(int[] nums) {
        int n = nums.length, r=1;
        int[] ans = new int[n];

        ans[0] = 1;
        for(int i = 1; i < n; i++){
            ans[i] = nums[i-1] * ans[i-1];
        }

        for(int i = n-1; i>=0;i--){
            ans[i] *= r;
            r *= nums[i];
        }
        return ans;
    }

    //BRUTE-FORCE
    public int[] productExceptSelf1(int[] nums) {
        int n = nums.length, count = 0;
        int total = 1;

        for(int val : nums){
            if(val != 0){
                total *=val;
            }
            else{
                count++;
            }
        }

        for(int i = 0; i < n; i++){
            if(nums[i] == 0){
                nums[i] = total;
                if(count > 1){
                    nums[i] = 0;
                }
            }
            else{
                nums[i] = total / nums[i];
                if(count > 0) nums[i] = 0;
            }
        }
        return nums;
    }
}
