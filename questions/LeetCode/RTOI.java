package LeetCode;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class RTOI {
    public static void main(String[] args) {
        String s= "III";
        System.out.println(romanToInt(s));
    }
    static int romanToInt(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int res=0;
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        int l = s.length();
        int i = 0;

        while(i<l){
            if(i+1 < l && map.get(s.charAt(i)) < map.get(s.charAt(i+1))){
                res -= map.get(s.charAt(i));
            }
            else{
                res += map.get(s.charAt(i));
            }
            i++;
        }

        return res;
    }
}
