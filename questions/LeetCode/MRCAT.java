package LeetCode;

import java.util.HashMap;
import java.util.Map;

public class MRCAT {
    //https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/
    public int minimumRounds(int[] tasks) {
        int minPair = 0;

        Map<Integer, Integer> map = new HashMap<>();
        for(int task : tasks){
            map.put(task, map.getOrDefault(task,0)+1);
        }

        for(int freq : map.values()){
            if (freq == 1) return -1;
            else if(freq % 3 == 0) minPair += freq / 3;
            else minPair += freq / 3 + 1;
        }
        return minPair;
    }
}
