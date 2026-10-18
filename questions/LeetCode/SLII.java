package LeetCode;

import java.util.Arrays;

public class SLII {
    public static void main(String[] args) {
        System.out.println(shiftingLetters("dztz", new int[][]{
                {0,0,0},{1,1,1}
        }));
    }
    static String shiftingLetters(String s, int[][] shifts) {
        int row = shifts.length;
        if(row == 0){return s;}

        char[] arr = s.toCharArray();

        for (int[] shift : shifts) {
            int si = shift[0];
            int ei = shift[1];
            int di = shift[2];

            change(arr, si, ei, di);
        }


        return new String(arr);
    }
    static void change(char[] arr, int s, int e, int d){
        if(d==1){
            while(s <= e){
                int temp = arr[s];
                temp = (temp % 122 == 0) ? 97 : temp+1;
                arr[s] = (char) temp;
                s++;
            }
        }
        else if(d==0){
            while(s <= e){
                int temp = arr[s];
                temp = (temp % 97 == 0) ? 122 : temp-1;
                arr[s] = (char) temp;
                s++;
            }
        }
    }
}
