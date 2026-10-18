package SB;

import java.util.Scanner;

public class GCD {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(gcdRecursive(a,b));
    }

    static int gcdIterative(int a, int b){
        int gcd = -1;

        // if user enters negative number, sign of the number is changed to positive
        a = ( a > 0) ? a : -a;
        b = ( b > 0) ? b : -b;

        if(a == 0 && b == 0){return gcd;}
        if (a == 0){return b;}
        if(b == 0){return a;}

        for (int i = 1; i <= a && i <= b; i++) {
            if(a%i == 0 && b %i == 0){
                gcd = i;
            }
        }
        return gcd;
    }

    static int gcdRecursive(int a, int b){
        if (a == 0) {
            return b;
        }
        return gcdRecursive(b%a, a);
    }
}
