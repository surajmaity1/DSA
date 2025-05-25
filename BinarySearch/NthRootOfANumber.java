package org.surajmyt.BinarySearch;

import java.util.Scanner;

public class NthRootOfANumber {
    //Nth Root of a Number Using Binary Search
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int number = sc.nextInt();

        System.out.println(calculateBinarySearch(n, number));
    }
    static double calculateBinarySearch(int n, int number){
        double s = 1;
        double e = number;
        double eps = 1e-6;

        while(e-s > eps){
            double mid = (s+e)/2.0;
            if (multiply(mid, n) < number)
                s = mid;
            else
                e = mid;
        }
        System.out.println(s + " " + e);
        System.out.println("using fn: " + Math.pow(number, (1.0/ (double)n)));
        return s;
    }

    static double multiply(double number, int n){
        double res = 1.0;
        for (int i = 0; i < n; i++) {
            res *= number;
        }
        return res;
    }
}
