package org.surajmyt.Heap;

import java.util.PriorityQueue;

public class MinHeapUsingPQ {
    // Min Heap Using PriorityQueue
    static void minHeap(int[] arr){
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();

        //insert val in maxHeap
        for(int val : arr){
            minHeap.add(val);
            // Insert value in priority queue, it will generate min heap
            //let's check root everytime
            System.out.print(minHeap.peek() +" ");
        }

        System.out.println();

        //Now pop one by one
        for (int i = 0; i < minHeap.size(); i++) {
            System.out.print(minHeap.peek() +" ");
            minHeap.poll();
        }

        System.out.println();
    }
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17};
        minHeap(arr);
    }
}
