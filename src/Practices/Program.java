package Practices;

import java.util.Arrays;
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int n1 = n-1;
        for (int i = 1; i <= 2*n-1; i++) {
            if(i<=n){
                for (int j = 1; j <=i; j++) {
                    System.out.print(j);
                }
            }
            else{
                for (int j = 1; j <=n1; j++) {
                    System.out.print(j);
                }
                n1--;
            }
            System.out.println();
        }
    }
}
