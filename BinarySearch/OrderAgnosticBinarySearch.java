package org.surajmyt.BinarySearch;

public class OrderAgnosticBinarySearch {
    public static void main(String[] args) {
        int[] arr1 = {1,2,3,4,5,6,7,8,9,23};
        int[] arr2 = {32323,2323,122,23,12,1};
        System.out.println(orderAgnosticBinSrch(arr2, 10));
    }
    static boolean orderAgnosticBinSrch(int[] arr, int target) {
        int s = 0;
        int e = arr.length - 1;

        boolean isAscending = arr[e] > arr[s];

        while (s <= e) {
            int m = s + (e-s)/2;
            if (arr[m] == target) return true;

            if (isAscending){
                if (arr[m] < target) s = m + 1;
                else e = m -1;
            }
            else {
                if (arr[m] > target) s = m + 1;
                else e = m -1;
            }
        }
        return false;
    }
}
