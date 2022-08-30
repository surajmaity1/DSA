package QuickSort;

import java.util.Arrays;

public class QuickSort {
    public static void main(String[] args) {
        int[] arr = { 2,3,5,1,4};
        quickSort(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));
    }

    private static void quickSort(int[] arr, int low, int high) {

        if(low >= high){return;}

        int start = low;
        int end = high;

        int pivot = start+(end-start)/2;

        while (start <= end){
            while (arr[pivot] > arr[start]){
                start++;
            }
            while (arr[pivot] < arr[end]){
                end--;
            }

            if (start <= end){
                swap(arr, start, end);
                start++;
                end--;
            }
        }

        //now pivot is at correct index, now sort two halves
        quickSort(arr, low, end);
        quickSort(arr, start, high);
    }
    static void swap(int[] arr, int s, int e){
        int temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
    }
}
