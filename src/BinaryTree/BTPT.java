package BinaryTree;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class BTPT {
    //https://leetcode.com/problems/binary-tree-postorder-traversal/
    //Binary Tree Postorder Traversal


    // Approach Using one Stack
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> list = new ArrayList<>();
        if(root == null) return list;

        Stack<TreeNode> stack = new Stack<>();
        TreeNode current = root;

        while(current != null || !stack.isEmpty()){
            if(current != null){
                stack.push(current);
                current = current.left;
            }
            else{
                TreeNode temp = stack.peek().right;

                if(temp == null){
                    temp = stack.pop();
                    list.add(temp.val);

                    while(!stack.isEmpty() && temp == stack.peek().right){
                        temp = stack.pop();
                        list.add(temp.val);
                    }
                }
                else{
                    current = temp;
                }
            }

        }
        return list;
    }


    // Approach Using Two Stacks
    public List<Integer> postorderTraversal1(TreeNode root) {
        List<Integer> list = new ArrayList<>();
        if(root == null) return list;

        Stack<TreeNode> st1 = new Stack<>();
        Stack<TreeNode> st2 = new Stack<>();

        st1.push(root);

        while(!st1.isEmpty()){
            TreeNode temp = st1.pop();
            st2.push(temp);

            if(temp.left != null) st1.push(temp.left);
            if(temp.right != null) st1.push(temp.right);

        }

        while(!st2.isEmpty()){
            list.add(st2.pop().val);
        }
        return list;
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
