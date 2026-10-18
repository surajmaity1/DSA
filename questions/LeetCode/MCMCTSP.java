package LeetCode;

public class MCMCTSP {
    //https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/
    public int minCostToMoveChips(int[] arr) {
        if(arr == null || arr.length == 0){
            return 0;
        }
        int odd = 0, even = 0;
        for(int val : arr){
            if(val % 2 == 0){
                even++;
            }
            else{
                odd++;
            }
        }

        if(odd < even){
            return odd;
        }
        return even;
    }
}
