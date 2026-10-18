package LeetCode;

public class SEARCH2D {
    //https://leetcode.com/problems/search-a-2d-matrix/
    static boolean searchMatrix(int[][] matrix, int target) {
        int r = matrix.length;
        if(r == 0){return false;}
        int row = 0;
        int col = matrix[0].length-1;

        while(row < r && col >=0){
            if(matrix[row][col] == target){return true;}

            if(matrix[row][col] > target){

                col--;
                if(col >=0 &&matrix[row][col] < target){
                    return false;
                }
            }
            else{
                row++;
            }
        }
        return false;
    }
}
