package org.surajmyt.Heap;

import java.util.Arrays;

public class HeapSort {
    static void heapify(int[] arr, int n, int currIdx){
        int largest = currIdx;
        int left = 2 * currIdx + 1;
        int right = 2 * currIdx + 2;

        // If left child is larger than root
        if(left < n && arr[largest] < arr[left]){
            largest = left;
        }

        // If right child is larger than root
        if(right < n && arr[largest] < arr[right])
            largest = right;

        if (largest != currIdx){   // means it largest is updated
            swap(arr, largest, currIdx);

            heapify(arr, n, largest);
        }
    }
    static void buildHeap(int[] arr, int n){
        /* Note: we have to skip leaf node
           as they don't have child,
            so they are already heap
            Note: if no. of node is n
            then leaf nodes are present from
            n/2 to n-1   [for 0 INDEXED ARRAY]
         */

        // so we have to search from 0 to n/2-1

        int startIndex = (n/2) -1;
        for(int node = startIndex; node >= 0; node--){
            heapify(arr,n,node);
        }
    }
    static void swap(int[] a, int f, int l){
        int temp = a[f];
        a[f] = a[l];
        a[l] = temp;
    }
    static void heapSort(int[] arr){
        int n = arr.length - 1;

        while (n > 0){
            swap(arr, n, 0);
            n--;
            heapify(arr, n, 0);
        }
    }
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17};
        int n = arr.length;
        buildHeap(arr, n);
        System.out.println(Arrays.toString(arr));
        heapSort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
