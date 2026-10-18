package LeetCode;

public class ROEMASI {
    //https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/description/
    public boolean canBeIncreasing(int[] nums) {
        int n = nums.length;
        int count = 0;

        for(int i = 1; i < n; i++){
            //check current element <= prev element
            if (nums[i] <= nums[i-1]){
                count++;

                //check current element <= second prev element
                if (i > 1 && nums[i] <= nums[i-2]){
                    nums[i] = nums[i-1];
                }
            }
        }


        return count <= 1;
    }
}
