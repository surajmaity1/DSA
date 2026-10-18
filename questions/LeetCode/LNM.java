package LeetCode;

import java.util.*;

public class LNM {
    //https://leetcode.com/problems/lucky-numbers-in-a-matrix/
    public static void main(String[] args) {
        int[][] arr = {{3,7,8},{9,11,13},{15,16,17}};
        System.out.println(luckyNumbers(arr));
    }

    static List<Integer> luckyNumbers (int[][] matrix) {
        Set<Integer> rowMinSet = new HashSet<>();
        Set<Integer> finalMaxSet = new HashSet<>();

        // find minimum in every row
        for(int[] row : matrix){
            int min = row[0];

            for(int a : row){
                min = Math.min(min, a);
            }
            rowMinSet.add(min);
        }

        int m = matrix.length, n = matrix[0].length;
        for (int col = 0; col < n; col++) {
            int max = matrix[0][col];

            for (int row = 0; row < m; row++) {
                max = Math.max(max, matrix[row][col]);
            }

            if(rowMinSet.contains(max)){
                finalMaxSet.add(max);
            }
        }

        return new ArrayList<>(finalMaxSet);
    }


    static List<Integer> luckyNumbers3 (int[][] matrix) {
        int m = matrix.length, n = matrix[0].length;
        int[] mi = new int[m], mx = new int[n];
        /*
        We need it because if we don't change every elements in array mi with max value,
        then we will be getting the min of the elements of the matrix against a mi[i] that is set to zero.
         So min will always be ZERO if we don't fill array mi with max value.
         For mx value we don't need Integer.MIN_VALUE because elements in mx are already 0,
         and elements within the matrix is guaranteed to be positive.
         */
        Arrays.fill(mi, Integer.MAX_VALUE);
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                mi[i] = Math.min(matrix[i][j], mi[i]);
                mx[j] = Math.max(matrix[i][j], mx[j]);
            }
        }
        List<Integer> res = new ArrayList<>();
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (mi[i] == mx[j])  {
                    res.add(mi[i]);
                    break;
                }
            }
        }
        return res;
    }

    //brute-force
    static List<Integer> luckyNumbers2 (int[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;
        List<Integer> ans = new ArrayList<>();

        for(int i = 0; i<m; i++){
            for(int j = 0; j<n; j++){
                if(rowMin(matrix, i,j) && colMax(matrix, i, j)){
                    ans.add(matrix[i][j]);
                }
            }
        }

        return ans;
    }
    static boolean rowMin(int[][] arr, int r, int c){
        int m = arr[0].length;
        int min = arr[r][c];

        for(int i = 0; i<m; i++){
            if(i!=c){
                if(min > arr[r][i]){
                    return false;
                }
            }
        }
        return true;
    }

    static boolean colMax(int[][] arr, int r, int c){
        int n = arr.length;
        int max = arr[r][c];

        for(int i = 0; i<n; i++){
            if(i!=r){
                if(max < arr[i][c]){
                    return false;
                }
            }
        }
        return true;
    }
}
