package LeetCode;

import java.util.HashMap;

public class MFEE {
    //TODO:
    //https://leetcode.com/contest/weekly-contest-310/problems/most-frequent-even-element/
    public static void main(String[] args) {
        //8154,9139,8194,3346,5450,9190,133,8239,4606,8671,8412,6290
        //0,1,2,2,4,4,1
        System.out.println(mostFrequentEven(new int[]{0,1,2,2,4,4,1}));
    }
    static int mostFrequentEven(int[] nums) {
        int ans = -1;
        HashMap<Integer, Integer> map = new HashMap<>();
        for(int val : nums){
            if((val&1) == 0){
                map.put(val, map.getOrDefault(val,0)+1);
            }
        }
        int greatVal = 0, smallestKey = 100001;
        for (Integer key: map.keySet()) {
            int value = map.get(key);
            System.out.println(key + " " + value);
            if(smallestKey > key && greatVal <= value){
                greatVal = value;
                smallestKey = key;
                ans = key;
            }
        }
        return ans;
    }
}
