package LeetCode;

import java.util.Arrays;

public class LLVM {
    //https://leetcode.com/contest/weekly-contest-306/problems/largest-local-values-in-a-matrix/
    public static void main(String[] args) {
//        int[][] arr = {
//                {9,9,8,1},
//                {5,6,2,6},
//                {8,2,6,4},
//                {6,2,2,2}
//        };
        int[][] arr = {
                {1,1,1,1,1},
        {1,1,1,1,1},
            {1,1,2,1,1},
                {1,1,1,1,1},
                    {1,1,1,1,1}
        };
        for(int[] a : largestLocal(arr)){
            System.out.println(Arrays.toString(a));
        }
    }
    static int[][] largestLocal(int[][] grid) {
        int n = grid.length;
        int[][] ans = new int[n-2][n-2];

        for(int i = 0; i<n-2; i++){
            for(int j = 0; j<n-2; j++){
                ans[i][j] = max(grid, i+1,j+1);
            }
        }

        return ans;
    }
    static int max(int[][] grid, int i, int j){
        int s = i-1;
        int e = j-1;
        int max = grid[s][e];

        for(int k = s; k<= s+2; k++){
            for(int l = e; l <= e+2; l++){
                if(max < grid[k][l]){
                    max = grid[k][l];
                }
            }
        }

        return max;
    }
}
