package SB;

public class ThirdLargest {
    public static void main(String[] args) {
        int[] arr = {53,2,234,4,343,5};
        System.out.println(thirdLargest(arr));
    }

    static int thirdLargest(int[] arr) {
        if (arr == null || arr.length == 0) return -1;

        int firstLargest = arr[0], secondLargest = Integer.MIN_VALUE, thirdLargest = Integer.MIN_VALUE;
        int n = arr.length;

        for (int i = 1; i < n; i++) {

            /* If current element is greater than first
           then update first , second and third */
            if(firstLargest < arr[i]){
                thirdLargest = secondLargest;
                secondLargest = firstLargest;
                firstLargest = arr[i];
            }

            /* If arr[i] is in between first and second */
            else if (secondLargest < arr[i]){
                thirdLargest = secondLargest;
                secondLargest = arr[i];
            }

            /* If arr[i] is in between second and third */
            else if (thirdLargest < arr[i]){
                thirdLargest = arr[i];
            }
        }
        return thirdLargest;
    }
}
