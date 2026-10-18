package LeetCode;

public class DBT {
    //https://leetcode.com/problems/diameter-of-binary-tree/

    public int diameterOfBinaryTree1(TreeNode root) {
        int[] max = new int[1];
        diameter(root, max);
        return max[0];
    }
    public int diameter(TreeNode root, int[] max){
        if(root == null) return 0;

        int left = diameter(root.left, max);
        int right = diameter(root.right, max);

        max[0] = Math.max(max[0], (left+right));
        return 1 + Math.max(left, right);
    }
}
