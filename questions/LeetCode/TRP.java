package LeetCode;

public class TRP {
    //https://leetcode.com/problems/trapping-rain-water/


    public static void main(String[] args) {
        int[] a = {0,1,0,2,1,0,1,3,2,1,2,1};
        System.out.println(trap(a));
    }


    //best-approach
    static int trap(int[] height) {
        int high = height.length - 1;

        if(high < 2){
            return 0;
        }

        int result = 0;
        int leftMax = 0;
        int rightMax = 0;
        int low = 0;

        while(low <= high){
            if(height[low] < height[high]){

                if(height[low] >= leftMax){
                    leftMax = height[low];
                }
                else{
                    result += leftMax - height[low];
                }
                low++;
            }
            else{
                if(height[high] >= rightMax){
                    rightMax = height[high];
                }
                else{
                    result += rightMax - height[high];
                }
                high--;
            }
        }
        return result;
    }

    //brute-force
    static int trap2(int[] height) {
        int amount = 0;
        int n = height.length;

        for (int i = 0; i < n; i++) {

            int leftMax = leftMax(height, i);
            int rightMax = rightMax(height, i);

            int temp =Math.min(leftMax, rightMax);

            if(temp > height[i]){
                amount += (temp-height[i]);
            }
        }

        return amount;
    }

    static int rightMax(int[] height, int index){
        int rightMax = 0;
        int n = height.length;
        int nextMax = 0;

        for (int i = n-1; i >= index; i--) {
            nextMax = rightMax;
            rightMax = Math.max(rightMax, height[i]);
        }
        return nextMax;
    }

    static int leftMax(int[] height, int index){
        int leftMax = 0;
        int prevMax = 0;

        for (int i = 0; i <= index; i++) {
            prevMax = leftMax;
            leftMax = Math.max(height[i], leftMax);
        }

        return prevMax;
    }
}
