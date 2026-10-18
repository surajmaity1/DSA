package LeetCode;

public class SMIII {
    //https://leetcode.com/problems/spiral-matrix-iii/
    public int[][] spiralMatrixIII(int rows, int cols, int rStart, int cStart) {
        int total = rows * cols;
        int[][] matrix = new int[total][2];
        int i = 0, len = 0, d = 0;
        int[] directions = new int[]{0,1,0,-1,0};
        matrix[i++] = new int[]{rStart,cStart};

        while (i < total){
            if (d == 0 || d == 2){len++;}

            for(int k = 0; k < len; k++){
                rStart += directions[d];
                cStart += directions[d+1];

                if (rStart < rows && rStart >=0 && cStart < cols && cStart >= 0){
                    matrix[i++] = new int[]{rStart, cStart};
                }
            }
            d = (++d) % 4;
        }
        return matrix;
    }
}
