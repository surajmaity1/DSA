package LeetCode;

import java.util.LinkedList;
import java.util.Queue;

public class MDBT {
    //https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

    public int maxDepthUsingIteration(TreeNode root) {
        if (root == null) return 0;

        int maxDepth = 0;
        Queue<TreeNode> queue = new LinkedList<>();

        queue.add(root);
        while (!queue.isEmpty()){
            int size = queue.size();
            maxDepth++;

            while(size-->0){
                TreeNode node = queue.poll();

                if (node.left != null) queue.add(node.left);
                if (node.right != null) queue.add(node.right);
            }
        }

        return maxDepth;
    }

    public int maxDepthUsingRecursion(TreeNode root) {
        if (root == null) return 0;

        return 1 + Math.max(maxDepthUsingRecursion(root.left) ,
                maxDepthUsingRecursion(root.right));
    }



}
