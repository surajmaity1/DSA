package LeetCode;

public class BBT {
    //https://leetcode.com/problems/balanced-binary-tree/description/
    public boolean isBalanced(TreeNode root) {
        return height(root) != -1;
    }
    public int height(TreeNode root){
        if(root == null) return 0;

        int lh = height(root.left);
        if(lh == -1) return -1;
        int rh = height(root.right);
        if(rh == -1) return -1;

        if(Math.abs(lh-rh) > 1) return -1;
        return Math.max(lh, rh) + 1;
    }
}
