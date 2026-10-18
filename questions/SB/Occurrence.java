package SB;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Occurrence {

    //find out occurrences of each character in a string
    public static void main(String[] args){
        String str = "suraj Sunday";
        usingMap(str);

    }

    //using set
    static void usingMap(String str){
        Map<Character, Integer> map = new HashMap<>();
        int len = str.length();

        for (int i = 0; i < len; i++) {
            char c = str.charAt(i);
            if (map.containsKey(c)){
                int count = map.get(c);
                map.put(c, ++count);
            }
            else{
                map.put(c, 1);
            }
        }

        for(Character key : map.keySet()){
            System.out.println(key+ " : "+map.get(key));
        }


    }

    //using array
    //TODO: THIS IS NOT RIGHT || FIX IT AS SOON AS POSSIBLE
    static void usingArray(String str){
        int strLen = str.length();
        int[] arr = new int[strLen];

        for(int i = 0; i < strLen; i++){
            char temp = str.charAt(i);
            arr[i] = 1;
            for(int j = i+1; j < strLen;j++){
                if(temp == str.charAt(j)){
                    arr[i]++;
                }
            }
        }

        System.out.println("All occurences are:");
        for(int i = 0; i < strLen; i++){
            System.out.println(str.charAt(i) + ":" + arr[i]);
        }
    }
}
