package org.surajmyt.LinearSearch;

import java.util.Arrays;

public class ImprovingLinearSearch {
    public static void main(String[] args) {
        int[] array = { 120, 10, 110,  40, 60,20, 30,130, 170};
        System.out.println(Arrays.toString(array));
        System.out.println(transpositionLinearSearch(array, 60));
        System.out.println(Arrays.toString(array));
        System.out.println(moveFrontOrHeadLinearSearch(array, 30));
        System.out.println(Arrays.toString(array));
    }

    public static boolean transpositionLinearSearch(int[] array, int target) {

        if (array == null || array.length == 0) {
            return false;
        }

        for (int i = 0; i < array.length; i++) {
            if (target == array[i]) {
                if (i > 0) {
                    swap(array, i, i-1);
                }
                return true;
            }
        }
        return false;
    }

    public static boolean moveFrontOrHeadLinearSearch(int[] array, int target) {
        if (array == null || array.length == 0) {
            return false;
        }
        for (int i = 0; i < array.length; i++) {
            if (target == array[i]) {
                if (i != 0) {
                    swap(array, i, 0);
                }
                return true;
            }
        }
        return false;
    }

    private static void swap(int[] array, int firstIndex, int secondIndex) {
        int temporaryVariable = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temporaryVariable;
    }
}
