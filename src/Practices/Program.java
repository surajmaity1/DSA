package Practices;

import java.util.Arrays;

public class Program {
    public static void main(String[] args) {
        int[] arr = { 2,3,5,1,4};
        int n = arr.length;
        int mid = n/2;
        int[] left = Arrays.copyOfRange(arr, 0, mid);
        int[] right = Arrays.copyOfRange(arr, mid, n);
        System.out.println(Arrays.toString(left));
        System.out.println(Arrays.toString(right));
    }
}
