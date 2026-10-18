package LeetCode;

import java.util.ArrayList;
import java.util.Stack;

public class KSBST {

    //https://leetcode.com/problems/kth-smallest-element-in-a-bst/




    //time complexity: O(N) best  and  O(N^2) worst
    public int kthSmallest4(TreeNode root, int k) {
        int count = countNode(root.left);
        if(k <= count){
            return kthSmallest4(root.left, k);
        }
        else if( k > count + 1){
            return kthSmallest4(root.right, k -count - 1);
        }
        return root.val;
    }
    public int countNode(TreeNode root){
        if (root == null){return 0;}
        return 1 + countNode(root.left) + countNode(root.right);
    }

    //Morris Traversal [INORDER] :
    public int kthSmallest1(TreeNode root, int k) {
        ArrayList<Integer> inOrder = new ArrayList<>();
        TreeNode current = root;
        int ans = 0;
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
        if(inOrder.size() >= k){
            ans = inOrder.get(k-1);
        }
        return ans;
    }

    //Iterative:
    //hints: just like inOrder iteration approach
    public int kthSmallest2(TreeNode root, int k) {
        Stack<TreeNode> stack = new Stack<>();

        while(root != null || !stack.isEmpty()) {

            while(root != null) {
                stack.push(root);
                root = root.left;
            }

            root = stack.pop();
            if(--k == 0) break;
            root = root.right;
        }
        return root.val;
    }

    //recursion
    public int kthSmallest3(TreeNode root, int k) {
        int ans = 0;

        ArrayList<Integer> list = new ArrayList<>();
        inOrder(root, list);

        if(list.size() >= k){
            ans = list.get(k-1);
        }
        return ans;

    }
    public void inOrder(TreeNode root, ArrayList<Integer> list){
        if(root == null){
            return;
        }

        inOrder(root.left, list);
        list.add(root.val);
        inOrder(root.right, list);
    }
}
