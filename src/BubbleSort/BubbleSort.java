package BubbleSort;

import java.util.Arrays;

public class BubbleSort {
    public static void main(String[] args) {
        int[] arr = { 120, -10, 110,  40, 60,20, -30,130, -170};
        bubbleSort(arr);
        System.out.println(Arrays.toString(arr));
    }
    private static void OptimizedBubbleSort(int[] arr) {
        if (arr == null || arr.length == 0){
            return;
        }

        boolean checked;
        int n = arr.length;

        for (int i = 0; i < n; i++) {

            checked = false;
            for (int j = 1; j < n-i; j++) {

                if (arr[j] < arr[j-1]){
                    checked = true;
                    swap(arr, j,j-1);
                }
            }
            if (!checked){
                break;
            }
        }
    }

    private static void bubbleSort(int[] arr) {

        if (arr == null || arr.length == 0){
            return;
        }

        int n = arr.length;
        for (int i = 0; i < n; i++) {
            for (int j = 1; j < n-i; j++) {
                if (arr[j] < arr[j-1]){
                    swap(arr, j,j-1);
                }
            }
        }
    }
    static void swap(int[] arr, int s, int e){
        int temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
    }

}
