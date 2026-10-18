package SB;

import java.util.Scanner;

public class AddTwoFraction {
    //Write a Program to Add two Fractions
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter numerator for first fraction : ");
        int num1 = sc.nextInt();
        System.out.print("Enter denominator for first fraction : ");
        int den1 = sc.nextInt();
        System.out.print("Enter numerator for second fraction : ");
        int num2 = sc.nextInt();
        System.out.print("Enter denominator for second fraction : ");
        int den2 = sc.nextInt();

        int oD = lcmUsingGcd(den1,den2);
        int oN = (num1*(oD / den1)) + (num2*(oD / den2));
        System.out.print("("+num1+" / "+den1+") + ("+num2+" / "+den2+") = ");
        System.out.println("("+oN+" / "+oD+")");

    }
    static int lcmUsingGcd(int a, int b){
        return (a*b)/gcdRecursive(a,b);
    }
    static int gcdRecursive(int a, int b){
        if (a == 0) {
            return b;
        }
        return gcdRecursive(b%a, a);
    }
}
