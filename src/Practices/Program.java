package Practices;

import java.util.HashMap;
import java.util.Map;

public class Program {
    public static void main(String[] args) {
        // few updates
        String input_from_question = "";


        String s = input_from_question;

        if (s == null || s.length() == 0) return;

        Map<Character, Integer> map = new HashMap<>();
        for (char c : s.toCharArray()){
            map.put(c, map.getOrDefault(c, 0) + 1);
        }

        for (char c : map.keySet()){
            int val = map.get(c);
            if (c == 2){
                System.out.print(c);
                return;
            }
        }
    }
}