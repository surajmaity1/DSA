package BinarySearch;

public class FloorOfSortedArr {
    public static void main(String[] args) {
        int[] arr = {2,3,5,7, 11, 14, 16, 98, 102};
        System.out.println(floorOfSortedArr(arr, 11));
    }
    static int floorOfSortedArr(int[] a, int t) {
        /*
        Note:
        // if target is smaller than the smallest element in the array
        here, end will automatically point to -1
         */
        int s = 0;
        int e = a.length - 1;

        while (s <= e) {
            int m = s + (e - s) / 2;
            if (a[m] < t) s = m + 1;
            else if (a[m] > t) e = m - 1;
            else return m;
        }

        return e;
    }
}
