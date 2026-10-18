package LeetCode;

import java.util.HashMap;
import java.util.Map;

public class ME {
    //https://leetcode.com/problems/majority-element/

    //Moore Voting Algorithm
    public int majorityElement(int[] nums) {
        int candidate = 0;
        int count = 0;

        for(int num : nums){
            if(count == 0){
                candidate = num;
            }

            if(candidate == num)count++;
            else count--;
        }

        return candidate;
    }

    //bit operation
    public int majorityElement1(int[] nums) {
        int[] bit = new int[32];
        for (int num: nums)
            for (int i=0; i<32; i++)
                if ((num>>(31-i) & 1) == 1)
                    bit[i]++;
        int ret=0;
        for (int i=0; i<32; i++) {
            bit[i]=bit[i]>nums.length/2?1:0;
            ret += bit[i]*(1<<(31-i));
        }
        return ret;
    }
    //Using Hash-map
    public int majorityElement3(int[] nums) {
        int n = nums.length;
        Map<Integer, Integer> map = new HashMap<>();

        for(int num : nums){

            /*
            below code is same as this => map.put(num, map.getOrDefault(num,0) +1);


            if(!map.containsKey(num)){
                map.put(num, 1);
            }
            else{
                map.put(num, map.get(num) + 1);
            }

             */
            map.put(num, map.getOrDefault(num,0) +1);
            if(map.get(num) > n/2){
                return num;
            }
        }

        return 0;
    }

    //BRUTE FORCE
    public int majorityElement2(int[] nums) {
        int n = nums.length;
        int ans = 0;

        for(int i = 0; i < n; i++){
            int res = 1;
            for(int j = 0; j < n; j++){
                if(i!=j){
                    if(nums[i] == nums[j]){
                        res++;
                    }
                }
            }

            if(res > n/2){
                ans = i;
            }
        }
        return nums[ans];
    }
}
