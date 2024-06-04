package org.surajmyt.BinarySearch;

public class BinarySearch {

    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 60, 110, 120, 130, 170};
        //System.out.println(binarySearchIteration(arr, 65));
        System.out.println(binarySearchRecursion(arr,  0,arr.length -1, 60));
    }

    static boolean binarySearchRecursion(int[] array, int low, int high, int target){
        if (array == null || array.length == 0 || low > high) {
            return false;
        }

        int mid = low + (high - low) / 2;

        if (array[mid] == target) {
            return true;
        } else if (array[mid] > target) {
            return binarySearchRecursion(array, low, mid - 1, target);
        } else if (array[mid] < target) {
            return binarySearchRecursion(array, mid + 1, high, target);
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
