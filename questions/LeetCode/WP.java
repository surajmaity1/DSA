package LeetCode;

import java.util.HashMap;
import java.util.Map;

public class WP {
    public boolean wordPattern(String pattern, String s) {
        String[] words = s.split(" ");
        if (words.length != pattern.length())
            return false;
        Map index = new HashMap();
        for (Integer i=0; i<words.length; ++i)
            if (index.put(pattern.charAt(i), i) != index.put(words[i], i))
                return false;
        return true;
    }
    public boolean wordPattern2(String pattern, String s) {
        String[] words = s.split(" ");

        if (words.length != pattern.length()) return false;

        Map<Character, String> charToWord = new HashMap<>();
        Map<String, Character> wordToChar = new HashMap<>();

        for (int i = 0; i < pattern.length(); i++) {
            char c = pattern.charAt(i);
            String w = words[i];
            if (charToWord.containsKey(c) && !charToWord.get(c).equals(w))
                return false;
            if (wordToChar.containsKey(w) && wordToChar.get(w) != c)
                return false;
            charToWord.put(c, w);
            wordToChar.put(w, c);
        }
        return true;
    }
}
