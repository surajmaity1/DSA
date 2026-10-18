package LeetCode;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TKFE {
    public int[] topKFrequent(int[] nums, int k) {
        List<Integer>[] bucket = new List[nums.length + 1];
        Map<Integer, Integer> freqMap = new HashMap<>();

        for(int n: nums) {
            freqMap.put(n,freqMap.getOrDefault(n,0)+1);
        }

        for(int key:freqMap.keySet()) {
            int freq = freqMap.get(key);

            if (bucket[freq] == null){
                bucket[freq] = new ArrayList<>();
            }
            bucket[freq].add(key);
        }

        int[] res = new int[k];
        int idx = 0;
        for(int i = bucket.length - 1; i >=0 && idx < k; i--) {
            if (bucket[i] != null){
                for(int val: bucket[i])
                    res[idx++] = val;
            }
        }

        return res;
    }
}
