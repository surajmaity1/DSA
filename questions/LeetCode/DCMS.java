package LeetCode;

public class DCMS {
    //944. Delete Columns to Make Sorted
    //https://leetcode.com/problems/delete-columns-to-make-sorted/description/
    public int minDeletionSize(String[] strs) {
        int n = strs.length;
        if(n == 1) return 0;

        int l = strs[0].length();
        int c = 0;
        for(int i = 0; i < l; i++){
            for(int j = 1; j < n; j++){
                if(strs[j-1].charAt(i) > strs[j].charAt(i)){
                    c++;
                    break;
                }
            }
        }
        return c;
    }
}
