package LeetCode;

import java.lang.reflect.Array;
import java.util.Arrays;

public class RM {
    //https://leetcode.com/problems/reshape-the-matrix/
    public static void main(String[] args) {
        int[][] arr = {
                {1,2},{3,4}
        };
        for(int[] a : matrixReshape(arr, 1,4)){
            System.out.println(Arrays.toString(a));
        }
    }

    //BRUTE-FORCE
    static int[][] matrixReshape(int[][] mat, int r, int c) {
        int row = mat.length;
        int col = mat[0].length;

        if(row*col != r*c){
            return mat;
        }

        int[][] mat2 = new int[r][c];
        int i = 0, j = 0;

        for(int r1 = 0; r1 < row ; r1++){
            for(int c1 = 0; c1<col;c1++){
                if(j >= c ){
                    j=0;
                    if(i <= r-1) {
                        i++;
                    }
                    else{
                        break;
                    }
                }
                mat2[i][j] = mat[r1][c1];
                j++;
            }
        }
        return mat2;
    }
}
