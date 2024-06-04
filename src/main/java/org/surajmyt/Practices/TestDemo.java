package org.surajmyt.Practices;

import java.util.Arrays;

public class TestDemo {
    public static void main(String[] args) {
        int[] array = {10, 20, 30, 40, 60, 110, 120, 130, 170};
        int[] array2 = {10, 20, 30, 40, 50};
        int[] array3 = new int[array2.length];

        int n = array2.length - 1;

        for (int i = n, j = 0; i >= 0 && j < array3.length; i--, j++) {
            array3[j] = array2[i];
        }

        System.out.println(Arrays.toString(array3));
    }
}