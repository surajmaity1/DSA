package LeetCode;

import java.util.LinkedList;
import java.util.Queue;

public class ST {
    //ITERATIVE
    public boolean isSameTree(TreeNode p, TreeNode q) {
        Queue<TreeNode> qu = new LinkedList<>();
        qu.add(p);
        qu.add(q);

        while(!qu.isEmpty()){
            p = qu.poll();
            q = qu.poll();

            if (p == null && q == null) continue;
            if (p == null || q == null || p.val != q.val) return false;

            qu.add(p.left);
            qu.add(q.left);
            qu.add(p.right);
            qu.add(q.right);
        }
        return true;
    }
    // RECURSIVE
    public boolean isSameTree2(TreeNode p, TreeNode q) {
        if (p == null && q == null) return true;
        if(p == null || q == null) return false;
        if (p.val != q.val) return false;
        return isSameTree2(p.left , q.left) && isSameTree2(p.right, q.right);
    }

}
