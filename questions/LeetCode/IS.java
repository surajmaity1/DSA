package LeetCode;

import java.util.HashMap;
import java.util.Map;

public class IS {
    //https://leetcode.com/problems/isomorphic-strings/
    public boolean isIsomorphic(String s, String t) {
        // both are matching or not
        String match1 = transform(s);
        String match2 = transform(t);

        return match1.equals(match2);
    }
    public String transform(String s){
        Map<Character, Integer> map = new HashMap<>();
        StringBuilder sb = new StringBuilder();
        int l = s.length();

        for (int i = 0; i < l; i++) {
            char c = s.charAt(i);

            if (!map.containsKey(c)){
                map.put(c, i);
            }
            sb.append(Integer.toString(map.get(c)));
            sb.append(" ");
        }

        return sb.toString();
    }
}
