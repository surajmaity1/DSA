package LeetCode;

public class SC {
    //https://leetcode.com/problems/sort-colors/

    //USING THREE POINTERS
    // BEST SOLUTION : USING Dutch national flag problem
    public void sortColors(int[] nums) {
        if(nums == null || nums.length == 0) return;

        int left = 0;
        int right = nums.length - 1;
        int mid = 0;

        while(mid <= right){
            if(nums[mid] == 0){
                swap(nums, mid++, left++);
            }
            else if (nums[mid] == 1){
                mid++;
            }
            else{
                swap(nums, mid, right--);
            }
        }
    }

    //USING TWO POINTERS
    public void sortColors2(int[] nums) {
        if(nums == null || nums.length == 0) return;

        int left = 0;
        int right = nums.length - 1;

        for(int i = 0; i <= right;i++){
            if(nums[i] == 2){
                swap(nums, i--, right--);
            }
            else if (nums[i] == 0){
                swap(nums, i, left++);
            }

        }
    }

    public void swap(int[] arr, int a, int b){
        int temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
}
