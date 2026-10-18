package LeetCode;

public class RA {
    //https://leetcode.com/problems/rotate-array/

    //best approach
    void rotate(int[] arr, int k) {
        if (arr == null || arr.length == 0){return;}

        int n = arr.length;
        k %= n;
        reverse(arr, 0, n-1);
        reverse(arr, 0, k-1);
        reverse(arr, k, n-1);
    }
    void reverse(int[] arr, int s, int e){
        while (s < e){
            int temp = arr[s];
            arr[s++] = arr[e];
            arr[e--] = temp;

        }
    }


    //brute-force
    void rotate1(int[] arr, int k) {
        if (arr == null || arr.length == 0){return;}

        int n = arr.length;
        while (k--> 0){
            int temp = arr[n-1];

            for (int i = n-1; i > 0; i--) {
                arr[i] = arr[i-1];
            }
            arr[0] = temp;
        }
    }
}
