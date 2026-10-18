package LeetCode;

import java.util.*;

public class MEII {
    //https://leetcode.com/problems/majority-element-ii/


    //Boyer Moore Voting Algorithm
    public List<Integer> majorityElement(int[] nums) {
        int c1,c2,num1,num2;

        c1 = c2 = 0;
        num1 = num2 = Integer.MIN_VALUE;

        for(int val : nums){
            if(num1 == val) c1++;
            else if(num2 == val) c2++;
            else if(c1 == 0){
                num1 = val;
                c1 = 1;
            }
            else if(c2 == 0){
                num2 = val;
                c2 = 1;
            }
            else{
                c1--;
                c2--;
            }
        }
        List<Integer> list = new ArrayList<>();
        c1 = c2 = 0;
        for(int val : nums){
            if(val == num1){
                c1++;
            }
            if(val == num2){
                c2++;
            }
        }
        int n = nums.length;
        if(c1 > n/3)
            list.add(num1);
        if(c2 > n/3)
            list.add(num2);
        return list;
    }
    //BRUTE FORCE
    public List<Integer> majorityElement2(int[] nums) {
        List<Integer> list = new ArrayList<>();
        int n = nums.length;

        for(int i = 0; i < n; i++){
            int res = 1;
            for(int j = 0; j < n; j++){
                if(i!=j){
                    if(nums[i] == nums[j]){
                        res++;
                    }
                }
            }

            if(!list.contains(nums[i]) && res > n/3){
                list.add(nums[i]);
            }
        }
        return list;
    }

    //Using Hash-map
    //TC: O(n*long(n))
    //SC: O(n)
    public List<Integer> majorityElement1(int[] nums) {
        List<Integer> list = new ArrayList<>();
        int n = nums.length;
        Map<Integer, Integer> map = new HashMap<>();

        for(int num : nums){
            if(!map.containsKey(num)){
                map.put(num, 1);
            }
            else{
                map.put(num, map.get(num) + 1);
            }

            if(!list.contains(num) && map.get(num) > n/3){
                list.add(num);
            }
        }

        return list;
    }
}
