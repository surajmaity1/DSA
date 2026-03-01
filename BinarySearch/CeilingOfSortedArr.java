package org.surajmyt.BinarySearch;

public class CeilingOfSortedArr {
    public static void main(String[] args) {
        int[] arr = {2,3,5,7, 11, 14, 16, 98, 102};
        System.out.println(ceilingOfSortedArr(arr, 92));
    }
    static int ceilingOfSortedArr(int[] a, int t) {
        // if target is greater than the largest element in the array
        if (t > a[a.length - 1]) return -1;

        int s = 0;
        int e = a.length - 1;

        while (s <= e) {
            int m = s + (e - s) / 2;
            if (a[m] < t) s = m + 1;
            else if (a[m] > t) e = m - 1;
            else return m;
        }

        return s;
    }
}
