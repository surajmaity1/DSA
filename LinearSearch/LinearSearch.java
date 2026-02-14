package org.surajmyt.LinearSearch;

public class LinearSearch {
    public static void main(String[] args) {
        int[] arr = { 120, 10, 110,  40, 60,20, 30,130, 170};
        System.out.println(linearSearchRecursion(arr, arr.length-1, 1130));
    }

    private static boolean linearSearchRecursion(int[] arr,int e, int target) {
        if(e < 0){
            return false;
        }
        else if(arr[e] == target){
            return true;
        }
        return linearSearchRecursion(arr,  e-1, target);
    }
    private static boolean linearSearchIteration(int[] arr, int target) {
        if (arr == null || arr.length == 0){
            return false;
        }

        int n = arr.length;
        for (int j : arr) {
            if (j == target) {
                return true;
            }
        }
        return false;
    }
}
