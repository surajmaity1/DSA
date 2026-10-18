package LeetCode;

public class SAT {
    //https://leetcode.com/problems/subtree-of-another-tree/

    // TODO: 07-09-2022 DO BEST APPROACH
    //link https://leetcode.com/problems/subtree-of-another-tree/discuss/474425/JavaPython-2-solutions%3A-Naive-Serialize-in-Preorder-then-KMP-O(M%2BN)-Clean-and-Concise


    //BRUTE-FORCE
    public boolean isSubtree(TreeNode r, TreeNode s) {
        if(s == null){return true;}
        if(r == null){return false;}

        if(r.val == s.val){
            if(isSame(r, s)){return true;}
        }

        return isSubtree(r.left, s) || isSubtree(r.right, s);
    }

    public boolean isSame(TreeNode r, TreeNode s){
        if(r == null && s == null) return true;
        if(r == null || s == null) return false;

        if(r.val == s.val){
            return isSame(r.left, s.left) && isSame(r.right, s.right);
        }

        return false;
    }
}
