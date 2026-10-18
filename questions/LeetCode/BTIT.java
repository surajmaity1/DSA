package LeetCode;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class BTIT {
    //https://leetcode.com/problems/binary-tree-inorder-traversal/

    //Morris Traversal [INORDER] :  O(n) time and O(1) space
    public List<Integer> inorderTraversal(TreeNode root) {
        ArrayList<Integer> inOrder = new ArrayList<>();
        TreeNode current = root;

        while (current != null){

            // if current have no left child
            if(current.left == null){
                //add the value
                inOrder.add(current.val);
                current = current.right;
            }
            else{
                TreeNode prev = current.left;
                while (prev.right != null  && prev.right != current){
                    prev = prev.right;
                }

                if(prev.right == null){
                    // create thread for backup to come its root again
                    prev.right = current;

                    //and move current to its left
                    current = current.left;
                }
                else{
                    //as thread already pointing to current, first cut the thread
                    prev.right = null;

                    //add the value
                    inOrder.add(current.val);

                    //as already visited, now current will go to right
                    current = current.right;
                }
            }
        }

        return inOrder;
    }




    //Iterative: using stack: O(n) time and O(n) space;
    public List<Integer> inorderTraversal2(TreeNode root) {
        ArrayList<Integer> ans = new ArrayList<>();

        if(root == null){
            return ans;
        }
        TreeNode head = root;
        Stack<TreeNode> stack = new Stack<>();

        while(head != null || !stack.isEmpty()){
            while(head != null){
                stack.push(head);
                head = head.left;
            }

            head = stack.pop();
            ans.add(head.val);
            head = head.right;
        }

        return ans;

    }




    //Recursion: O(n) time and O(n) space ( because function call stack)
    static List<Integer> inorderTraversal3(TreeNode root) {
        ArrayList<Integer> list = new ArrayList<>();
        inOrder(root, list);
        return list;
    }

    static void inOrder(TreeNode root, ArrayList<Integer> list){
        if(root == null){
            return;
        }
        inOrder(root.left, list);
        list.add(root.val);
        inOrder(root.right, list);
    }

}


class TreeNode {
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