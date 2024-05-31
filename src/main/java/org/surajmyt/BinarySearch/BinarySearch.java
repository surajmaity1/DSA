package org.surajmyt.BinarySearch;

public class BinarySearch {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 60, 110, 120, 130, 170};
        //System.out.println(binarySearchIteration(arr, 65));
        System.out.println(binarySearchIteration(arr,  60));
    }
    static boolean binarySearchRecursion(int[] arr, int start, int end, int target){


        while (start<=end){
            int mid = start + (end - start)/2;


            if(arr[mid] > target){
                return binarySearchRecursion(arr, start, mid-1, target);
            }
            else if (arr[mid] < target){
                return binarySearchRecursion(arr, mid + 1, end, target);
            }
            else {
                return true;
            }
        }

        return false;
    }
    static boolean binarySearchIteration(int[] arr, int target){

        if (arr == null || arr.length == 0){
            return false;
        }

        int start = 0;
        int end = arr.length-1;

        while (start<=end){
            int mid = start + (end - start)/2;

            if(arr[mid] > target){
                end = mid - 1;
            }
            else if(arr[mid] < target){
                start = mid + 1;
            }
            else{
                return true;
            }
        }

        return false;
    }
}
