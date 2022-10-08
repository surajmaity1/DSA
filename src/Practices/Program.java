package Practices;

import java.util.Scanner;
import java.util.Stack;

public class Program {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        System.out.println(notChanged(str));
    }
    static int notChanged(String str){
        StringBuilder sb = new StringBuilder(str);
        sb.reverse();
        String res = new String(sb);
        int n = str.length();
        int count = 0;
        for (int i = 0; i < n; i++) {
            if (str.charAt(i) == res.charAt(i)){
                count++;
            }
        }
        return count;
    }
}
