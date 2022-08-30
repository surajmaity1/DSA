package InsertionSort;

import java.util.Arrays;

public class InsertionSort {
    public static void main(String[] args) {
        int[] arr = { 120, -10, 110,  40, 60,20, -30,130, -170};
        insertionSort(arr);
        System.out.println(Arrays.toString(arr));
    }
    private static void insertionSort(int[] arr) {
        if (arr == null || arr.length == 0) {
            return;
        }

        int n = arr.length;

        for (int i = 0; i < n-1; i++) {
            for(int j = i+1; j > 0; j--){
                if(arr[j] < arr[j-1]){
                    swap(arr,j,j-1);
                }
                else{
                    break;
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
