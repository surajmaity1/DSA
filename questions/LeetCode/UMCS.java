package LeetCode;

import java.util.HashSet;

public class UMCS {
    //https://leetcode.com/problems/unique-morse-code-words/
    public int uniqueMorseRepresentations(String[] words) {
        if(words.length == 1){return 1;}
        String[] morse ={ ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."};

        HashSet<String> set = new HashSet<>();
        for(String s : words){
            StringBuilder sb = new StringBuilder();

            for(int i = 0; i<s.length(); i++){
                sb.append(morse[s.charAt(i) - 'a']);
            }

            set.add(sb.toString());
        }
        return set.size();
    }
}
