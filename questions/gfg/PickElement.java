package gfg;

public class PickElement {

    // Find a peak element
    // https://www.geeksforgeeks.org/find-a-peak-in-a-given-array/

    public static void main(String[] args) {
        int[] array = {2, 23, 998990, 115, 118, 9978, 44444};
        System.out.println(
                recursiveApproach(array, 0, array.length - 1, array.length)
        );
        System.out.println(
                iterativeApproach(array)
        );

    }

    private static int recursiveApproach(int[] array, int low, int hig, int length) {
        int mid = low + (hig - low) / 2;

        // Compare middle element with its
        // neighbours (if neighbours exist)
        if ((mid == 0 || array[mid - 1] <= array[mid]) && (mid == length - 1 || array[mid + 1] <= array[mid])) {
            return array[mid];
        }

        // If middle element is not peak
        // and its left neighbor is
        // greater than it, then left half
        // must have a peak element

        else if (mid > 0 && array[mid] < array[mid - 1]) {
            return recursiveApproach(array, low, mid - 1, length);
        }

        // If middle element is not peak
        // and its right neighbor
        // is greater than it, then right
        // half must have a peak
        // element

        else {
            return recursiveApproach(array, mid + 1, hig, length);
        }
    }

    private static int iterativeApproach(int[] array) {

        if (array == null || array.length == 0) {
            return -1;
        }

        int length = array.length;
        int low = 0;
        int hig = length - 1;

        while (low <= hig) {
            int mid = low + (hig - low) / 2;

            // first case if mid is the answer
            if ((mid == 0 || array[mid - 1] <= array[mid]) && (mid == length - 1 || array[mid + 1] <= array[mid])) {
                return array[mid];
            }
            // move the right pointer
            else if (mid > 0 && array[mid] < array[mid - 1]) {
                hig = mid - 1;
            }
            // move the left pointer
            else {
                low = mid + 1;
            }
        }

        return -1;
    }
}
