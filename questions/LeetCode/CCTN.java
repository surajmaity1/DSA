package LeetCode;

public class CCTN {
    //https://leetcode.com/problems/count-complete-tree-nodes/

    // BEST APPROACH
    // TC: O(log(n)^2)
    // SC: O(log(n))
    public int countNodes(TreeNode root) {
        if(root == null) return 0;

        int left = leftSubTreeHeight(root);
        int right = rightSubTreeHeight(root);

        if(left == right) return ((2<<(left)) -1);

        return 1 + countNodes(root.left) + countNodes(root.right);
    }

    public int leftSubTreeHeight(TreeNode root){
        int count = 0;

        while(root.left != null){
            count++;
            root = root.left;
        }

        return count;
    }
    public int rightSubTreeHeight(TreeNode root){
        int count = 0;

        while(root.right != null){
            count++;
            root = root.right;
        }

        return count;
    }

    public int countNodes1(TreeNode root) {
        if(root == null) return 0;

        return 1 + countNodes1(root.left) + countNodes1(root.right);
    }
}
