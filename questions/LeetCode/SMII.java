package LeetCode;

public class SMII {
    //https://leetcode.com/problems/spiral-matrix-ii/



    //BRUTE-FORCE
    public int[][] generateMatrix(int n) {
        int[][] matrix = new int[n][n];
        int rowBeg = 0, rowEnd = n - 1, colBeg = 0, colEnd = n - 1;

        int val = 1;
        while(rowBeg<=rowEnd && colBeg<= colEnd){

            for(int i = colBeg; i<= colEnd; i++){
                matrix[rowBeg][i] = val++;
            }
            rowBeg++;

            for(int i = rowBeg; i <= rowEnd; i++){
                matrix[i][colEnd] = val++;
            }
            colEnd--;

            if(rowBeg <= rowEnd){
                for(int i = colEnd; i >= colBeg; i--){
                    matrix[rowEnd][i] = val++;
                }
                rowEnd--;
            }

            if(colBeg <= colEnd){
                for(int i = rowEnd; i >= rowBeg; i--){
                    matrix[i][colBeg] = val++;
                }
                colBeg++;
            }

        }

        return matrix;
    }
}
