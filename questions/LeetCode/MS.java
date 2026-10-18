package LeetCode;

public class MS {
    //https://leetcode.com/problems/maximum-subarray/
    public static void main(String[] args) {
        System.out.println(twoNestedLoop(new int[]{-2,1,-3,4,-1,2,1,-5,4}));
    }


    /*
    Kadane's Algorithm:
     Complexity Analysis
    Time Complexity: O(n)
    Space Complexity: O(1)
     */
    public static int maxSubArray(int[] nums) {
        int max = nums[0];
        int sum = 0;
        for (int num : nums) {
            sum += num;
            max = Math.max(sum, max);
            if (sum < 0) {
                sum = 0;
            }
        }
        return max;
    }
    /*twoNestedLoop:
     Complexity Analysis
    Time Complexity: O(n^2)
    Space Complexity: O(1)
     */
    private static int twoNestedLoop(int[] arr) {
        int n = arr.length;
        int max = 0;
        for (int i = 0; i < n; i++) {
            int sum = 0;
            for (int j = i; j < n; j++) {
                sum += arr[j];
                max = Math.max(max, sum);
            }
        }
        return max;
    }

    /* threeLoop:
    Time Complexity: O(n^3)
    Space Complexity: O(1)
     */
    public static int threeNestedLoop(int[] nums) {
        int n = nums.length;
        int max = 0;
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                int sum = 0;
                for (int k = i; k < j+1; k++) {
                    sum += nums[k];
                }
                max = Math.max(max, sum);
            }
        }
        return max;
    }
}
