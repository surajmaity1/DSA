package LeetCode;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SCAW {
    //https://leetcode.com/problems/substring-with-concatenation-of-all-words/

    //brute-force
    public List<Integer> findSubstring(String s, String[] words) {
        List<Integer> list = new ArrayList<Integer>();
        Map<String, Integer> map = new HashMap<>();

        int wordLen = words.length;
        int eachWordLen = words[0].length();
        int loop = s.length() - (wordLen * eachWordLen) + 1;

        for(String word : words){
            map.put(word, map.getOrDefault(word, 0) + 1);
        }

        for(int i = 0; i < loop; i++){
            Map<String, Integer> temp = new HashMap<>();
            for(int j = 0; j < wordLen; j++){
                int index = i + j * eachWordLen;
                String subS = s.substring(index, index+eachWordLen);

                if(!map.containsKey(subS)){
                    break;
                }

                temp.put(subS, temp.getOrDefault(subS, 0) + 1);

                if(temp.get(subS) > map.getOrDefault(subS, 0)){
                    break;
                }

                if(j + 1 == wordLen){
                    list.add(i);
                }
            }
        }

        return list;
    }
}
