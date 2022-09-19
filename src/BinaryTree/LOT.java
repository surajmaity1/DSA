package BinaryTree;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class LOT {
    //Level Order Traversal of Binary Tree
    //https://leetcode.com/problems/binary-tree-level-order-traversal/
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> ans = new ArrayList<>();

        if(root == null){
            return ans;
        }

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);

        while(!queue.isEmpty()){

            List<Integer> list = new ArrayList<>();
            int size = queue.size();

            for(int i = 0; i < size; i++){
                TreeNode currentNode = queue.peek();

                if(currentNode.left != null){
                    queue.add(currentNode.left);
                }
                if(currentNode.right != null){
                    queue.add(currentNode.right);
                }

                list.add(queue.poll().val);
            }

            ans.add(list);
        }

        return ans;
    }

    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode() {}
        TreeNode(int val) { this.val = val; }
        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }
}
