package Algorithms;

import java.util.Arrays;

public class CountSort {
    public static void main(String[] args) {
        int[] arr = {5,4,1,9,32,3,2,10,12};
        countSort(arr);
        System.out.println(Arrays.toString(arr));
    }

    private static void countSort(int[] arr) {
        int n = arr.length;
        int max = arr[0];

        for(int val : arr){
            max = Math.max(val, max);
        }

        int[] count = new int[max+1];
        for(int val: arr){
            count[val]++;
        }

        for (int i = 1; i <= max; i++) {
            count[i] += count[i-1];
        }

        int[] output = new int[n];

        for (int i = n-1; i >= 0; i--) {
            output[--count[arr[i]]] = arr[i];
        }
        System.arraycopy(output, 0, arr, 0, n);
    }
}
