package SB;

import java.util.Arrays;
import java.util.Scanner;

public class ArrayReverse {
    public static void main(String[] args) {
        int[] arr = new int[4];
        Scanner sc = new Scanner(System.in);
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }

        arrRev2(arr);
        System.out.println(Arrays.toString(arr));
    }
    static void arrRev1(int[] arr) {
        int s = 0;
        int e = arr.length - 1;

        while (s < e){
            int temp = arr[s];
            arr[s] = arr[e];
            arr[e] = temp;
            s++;
            e--;
        }
    }
    static void arrRev2(int[] arr) {
        for (int i = 0; i < arr.length / 2; i++) {
            int temp = arr[i];
            arr[i] = arr[arr.length - i - 1];
            arr[arr.length - i - 1] = temp;
        }
    }
}
