package org.surajmyt.SelectionSort;

import java.util.Arrays;

public class SelectionSort {
    public static void main(String[] args) {
        int[] arr = { 120, -10, 110,  40, 60,20, -30,130, -170};
        selectionSort(arr);
        System.out.println(Arrays.toString(arr));
    }

    private static void selectionSort(int[] arr) {
        if (arr == null || arr.length == 0){
            return;
        }
        int n = arr.length;

        for (int i = 0; i < n; i++) {
            int lastIndex = n - i - 1;
            int maxIndex = max(arr, lastIndex);
            swap(arr, maxIndex, lastIndex);
        }
    }

    private static int max(int[] arr, int lastIndex) {
        int maxIndex = 0;

        for (int i = 1; i <= lastIndex; i++) {
            if(arr[maxIndex] < arr[i]){
                maxIndex = i;
            }
        }
        return maxIndex;
    }

    static void swap(int[] arr, int s, int e){
        int temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
    }
}
