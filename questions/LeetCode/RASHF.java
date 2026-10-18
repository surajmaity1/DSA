package LeetCode;

import java.util.*;

public class RASHF {
    //https://leetcode.com/problems/reduce-array-size-to-the-half/
    public static void main(String[] args) {
        int[] arr = {3,3,3,3,5,5,5,2,2,7};
        System.out.println(minSetSize(arr));
    }


    //Time: O(N)      Space: O(N)
    //hashmap and count sort
    public int minSetSize2(int[] arr) {
        int n = arr.length;
        HashMap<Integer, Integer> cnt = new HashMap<>();
        for (int x : arr) cnt.put(x, cnt.getOrDefault(x, 0) + 1);

        int[] counting = new int[n + 1];
        for (int freq : cnt.values()) ++counting[freq];

        int ans = 0, removed = 0, half = n / 2, freq = n;
        while (removed < half) {
            ans += 1;
            while (counting[freq] == 0) --freq;
            removed += freq;
            --counting[freq];
        }
        return ans;
    }
    //Time: O(NlogN)
    //Space: O(N)
    static int minSetSize(int[] arr) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int x : arr)
            map.put(x, map.getOrDefault(x, 0) + 1);

        int n = map.values().size();
        int[] freq = new int[n];
        int index = 0;

        for(int val : map.values()){
            freq[index++] = val;
        }

        Arrays.sort(freq);
        int minSize = 0, halfOfArr = arr.length/2, noOfRemovedElements = 0;
        index = n - 1;
        while(noOfRemovedElements < halfOfArr){
            minSize++;
            noOfRemovedElements += freq[index--];
        }
        return minSize;
    }
}
