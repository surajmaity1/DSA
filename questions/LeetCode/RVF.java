package LeetCode;

import java.util.HashSet;
import java.util.Set;

public class RVF {
    //Remove Vowels from a String
    public static void main(String[] args) {
        String input = "leetcodeisacommunityforcoders";
        System.out.println(removeVowels(input));
    }
    static String removeVowels(String str){
        if (str == null || str.length() == 0) return "";

        StringBuilder strBld = new StringBuilder();
        Set<Character> set = new HashSet<>();

        set.add('a');
        set.add('e');
        set.add('i');
        set.add('o');
        set.add('u');

        for(char c : str.toCharArray())
            if (!set.contains(c)) strBld.append(c);

        return strBld.toString();
    }
    static String removeVowels2(String str){
        if (str == null || str.length() == 0) return "";
        StringBuilder strBld = new StringBuilder();
        for(char c: str.toCharArray()) {
            if (c != 'a' && c != 'e' && c != 'i' && c != 'o' && c != 'u' ){
                strBld.append(c);
            }
        }
        return strBld.toString();
    }
}
