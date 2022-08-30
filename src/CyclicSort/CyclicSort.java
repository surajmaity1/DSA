package CyclicSort;

import java.util.Arrays;

public class CyclicSort {
    public static void main(String[] args) {
        int[] arr = { 2,3,5,1,4};
        cyclicSort(arr);
        System.out.println(Arrays.toString(arr));
    }
    private static void cyclicSort(int[] arr) {
        if (arr == null || arr.length == 0) {
            return;
        }

        int n = arr.length;
        int i = 0;
        while (i<n){
            int correctIndex = arr[i] - 1;

            if (arr[correctIndex] != correctIndex+1){
                swap(arr,correctIndex, i);
            }
            else {
                i++;
            }
        }

    }

    static void swap(int[] arr, int s, int e){
        int temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
    }
}
