package LeetCode;

import java.util.HashMap;
import java.util.Map;

public class TSII {
    //https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

    // USING BINARY SEARCH
    public int[] twoSum(int[] numbers, int target) {
        int n = numbers.length;
        for (int i = 0; i < n; i++) {
            int l = i+1;
            int r = n - 1;
            int temp = target - numbers[i];

            while (l <= r){
                int mid = l + (r-l)/2;
                int val = numbers[mid];
                if (val == temp) return new int[]{i+1, mid+1};
                else if (val < temp) l = mid + 1;
                else r = mid - 1;
            }
        }
        return new int[]{-1, -1};
    }

    // BRUTE-FORCE USING HASHMAP
    public int[] twoSum2(int[] numbers, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        int n = numbers.length;
        for(int i = 0; i < n; i++){
            int val = numbers[i];
            if(map.containsKey(target - val)){
                return new int[]{map.get(target-val)+1, i + 1};
            }
            map.put(val, i);
        }
        return new int[]{-1, -1};
    }

    //TWO POINTER METHOD
    public int[] twoSum3(int[] numbers, int target) {


        int s = 0;
        int e = numbers.length - 1;
        while(s<=e){
            int ans = numbers[s] + numbers[e];

            if(ans > target){
                e--;
            }
            else if(ans < target){
                s++;
            }
            else{
                return new int[] {s+1,e+1};
            }
        }
        return new int[] {s+1,e+1};
    }
}
