package org.surajmyt.BinaryTree;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class PIP_In_One {
    // PIP - PRE ORDER, IN ORDER AND POST ORDER TRAVERSAL IN SINGLE ITERATION
    public void pipAll(TreeNode root){
        if (root == null) return;

        List<Integer> pre = new ArrayList<>();
        List<Integer> in = new ArrayList<>();
        List<Integer> post = new ArrayList<>();

        Stack<Pair> stack = new Stack<>();
        stack.push(new Pair(root, 1));

        while(!stack.isEmpty()){
            Pair it = stack.pop();

            // it is a pre-order
            if(it.num == 1){
                pre.add(it.node.val);
                it.num++;
                stack.push(it);

                if(it.node.left != null){
                    stack.push(new Pair(it.node.left, 1));
                }
            }

            // it is a in-order
            else if (it.num == 2){
                in.add(it.node.val);
                it.num++;

                if(it.node.right != null) stack.push(new Pair(it.node.right, 1));
            }

            // it is a post-order
            else{
                post.add(it.node.val);
            }
        }

    }

    public class Pair{
        TreeNode node;
        int num;
        Pair(){}
        Pair(TreeNode node, int num){
            this.node = node;
            this.num =num;
        }
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
