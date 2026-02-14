package org.surajmyt.MergeSort;

import java.util.Arrays;

public class MergeSort {

    public static void main(String[] args) {
        int[] arr = { 120, -10, 110,  40, 60,20, -30,130, -170};
        mergeSortInPlace(arr, 0, arr.length);
        System.out.println(Arrays.toString(arr));
    }

    //IN-PLACE
    static void mergeSortInPlace(int[] arr, int start, int end){
        if (end - start == 1){return;}

        int mid = start + (end-start)/2;

        mergeSortInPlace(arr, start, mid);
        mergeSortInPlace(arr, mid, end);

        mergeInPlace(arr, start, mid, end);
    }

    private static void mergeInPlace(int[] arr, int start, int mid, int end) {
        int[] mix = new int[end-start];
        int i = start;
        int j = mid;
        int k = 0;
        
        while (i<mid && j < end){
            if (arr[i] < arr[j]){
                mix[k] = arr[i++];
            }
            else{
                mix[k] = arr[j++];
            }
            k++;
        }
        while (i<mid){
            mix[k++] = arr[i++];
        }
        while (j < end){
            mix[k++] = arr[j++];
        }
        int mixL = mix.length;

        for (int index = 0; index < mixL; index++) {
            arr[start+index] = mix[index];
        }
    }


    // USING EXTRA SPACE
    private static int[] mergeSort(int[] arr) {
        int n = arr.length;

        if (n == 1){return arr;}

        int mid = n/2;
        int[] left = mergeSort(Arrays.copyOfRange(arr, 0, mid));
        int[] right = mergeSort(Arrays.copyOfRange(arr, mid, n));

        return merge(left, right);
    }

    private static int[] merge(int[] first, int[] second) {
        int i = 0;
        int j = 0;
        int k = 0;

        int fl = first.length;
        int sl = second.length;
        int[] mix = new int[fl + sl];

        while (i < fl && j < sl){
            if (first[i] < second[j]){
                mix[k] = first[i++];
            }
            else {
                mix[k] = second[j++];
            }
            k++;
        }

        while (i < fl){
            mix[k++] = first[i++];
        }
        while (j < sl){
            mix[k++] = second[j++];
        }

        return mix;
    }

}
