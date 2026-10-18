package LeetCode;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GA {
    // https://leetcode.com/problems/group-anagrams/
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();

        for(String str: strs) {
            char[] carr = new char[26];
            int n = str.length();

            for(int i = 0; i < n; i++) carr[str.charAt(i) - 'a']++;
            String key = String.valueOf(carr);

            if (!map.containsKey(key)) map.put(key, new ArrayList<>());
            map.get(key).add(str);
        }

        return new ArrayList<>(map.values());
    }
}
