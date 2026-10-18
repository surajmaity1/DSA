package LeetCode;

import java.util.Stack;

public class VBST {
    //https://leetcode.com/problems/validate-binary-search-tree/
    public boolean isValidBST(TreeNode root) {
        if (root == null) return true;
        Stack<TreeNode> stack = new Stack<>();
        TreeNode pre = null;

        while (root != null || !stack.isEmpty()) {

            while (root != null) {
                stack.push(root);
                root = root.left;
            }

            root = stack.pop();

            if(pre != null && root.val <= pre.val)
                return false;


            pre = root;
            root = root.right;
        }
        return true;
    }
}
