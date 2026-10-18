package LeetCode;

import java.util.Arrays;
import java.util.Comparator;

public class TNWCG {
    //https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/
    public int numberOfWeakCharacters(int[][] properties) {
        int count = 0;
        Arrays.sort(properties, new Comparator<int[]>(){
            @Override
            public int compare(int[] a, int[] b){
                if(a[0] == b[0])
                    return (a[1] > b[1]) ? -1 : 1;
                return (a[0] > b[0]) ? 1 : -1;
            }
        });
        int max = Integer.MIN_VALUE;
        int n = properties.length-1;
        for(int i = n; i>=0;i--){
            if(properties[i][1] < max)
                count++;
            max = Math.max(max,properties[i][1]);
        }
        return count;
    }
}
