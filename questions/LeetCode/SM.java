package LeetCode;

import java.util.ArrayList;
import java.util.List;

public class SM {
    //https://leetcode.com/problems/spiral-matrix/
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> ans = new ArrayList<>();
        int rowBeg = 0, rowEnd = matrix.length - 1, colBeg = 0, colEnd = matrix[0].length - 1;

        while(rowBeg<=rowEnd && colBeg<= colEnd){

            for(int i = colBeg; i<= colEnd; i++){
                ans.add(matrix[rowBeg][i]);
            }
            rowBeg++;

            for(int i = rowBeg; i <= rowEnd; i++){
                ans.add(matrix[i][colEnd]);
            }
            colEnd--;

            if(rowBeg <= rowEnd){
                for(int i = colEnd; i >= colBeg; i--){
                    ans.add(matrix[rowEnd][i]);
                }
                rowEnd--;
            }

            if(colBeg <= colEnd){
                for(int i = rowEnd; i >= rowBeg; i--){
                    ans.add(matrix[i][colBeg]);
                }
                colBeg++;
            }

        }

        return ans;
    }
}
