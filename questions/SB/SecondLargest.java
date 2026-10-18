package SB;

public class SecondLargest {
    public static void main(String[] args) {
        int[] arr = {53,2,234,4,343,5};
        System.out.println(secondLargest(arr));
    }

    private static int secondLargest(int[] arr) {
        if (arr == null || arr.length == 0) return -1;

        int firstLargest = arr[0], secondLargest = Integer.MIN_VALUE;
        int n = arr.length;

        for (int i = 1; i < n; i++) {
            /* If current element is greater than first
           then update both first and second */
            if(firstLargest < arr[i]){
                secondLargest = firstLargest;
                firstLargest = arr[i];
            }
            /* If arr[i] is in between first and
           second then update second  */
            else if (secondLargest < arr[i] && firstLargest != arr[i]){
                secondLargest = arr[i];
            }
        }
        return secondLargest;
    }
}
