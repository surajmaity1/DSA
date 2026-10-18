package LeetCode;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class BTPT {
    // https://leetcode.com/problems/binary-tree-preorder-traversal/


    //Morris Traversal [PREORDER] :  O(n) time and O(1) space
    public List<Integer> preorderTraversal1(TreeNode root) {
        ArrayList<Integer> preOrder = new ArrayList<>();
        TreeNode current = root;

        while (current != null){

            // if current have no left child
            if(current.left == null){
                //add the value
                preOrder.add(current.val);
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

                    //add the value
                    preOrder.add(current.val);

                    //and move current to its left
                    current = current.left;
                }
                else{
                    //as thread already pointing to current, first cut the thread
                    prev.right = null;


                    //as already visited, now current will go to right
                    current = current.right;
                }
            }
        }

        return preOrder;
    }




    //Iterative: using stack: O(n) time and O(n) space;
    public List<Integer> preorderTraversal2(TreeNode root) {
        ArrayList<Integer> ans = new ArrayList<>();

        if(root == null){
            return ans;
        }

        TreeNode head = root;
        Stack<TreeNode> stack = new Stack<>();
        stack.push(head);

        while(!stack.isEmpty()){
            head = stack.pop();
            ans.add(head.val);

            if (head.right != null){
                stack.push(head.right);
            }
            if(head.left != null){
                stack.push(head.left);
            }

        }


        return ans;
    }




    //Recursion: O(n) time and O(n) space ( because function call stack)
    static List<Integer> preorderTraversal3(TreeNode root) {
        ArrayList<Integer> list = new ArrayList<>();
        preOrder(root, list);
        return list;
    }

    static void preOrder(TreeNode root, ArrayList<Integer> list){
        if(root == null){
            return;
        }
        list.add(root.val);
        preOrder(root.left, list);
        preOrder(root.right, list);
    }
}
