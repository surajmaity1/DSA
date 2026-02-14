package org.surajmyt.Heap;

import java.util.Collections;
import java.util.PriorityQueue;

public class MaxHeapUsingPQ {
    // Max Heap Using PriorityQueue
    static void maxHeap(int[] arr){
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());

        //insert val in maxHeap

        for(int val : arr){
            maxHeap.add(val);
            // Insert value in priority queue, it will generate max heap
            //let's check root everytime
            System.out.print(maxHeap.peek() +" ");
        }

        System.out.println();
        
        //Now pop one by one 
        for (int i = 0; i < maxHeap.size(); i++) {
            System.out.print(maxHeap.peek() +" ");
            maxHeap.poll();
        }

        System.out.println();
    }
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17};
        maxHeap(arr);
    }
}
