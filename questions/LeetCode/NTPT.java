package LeetCode;



import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class NTPT {
    // Iterative
    public List<Integer> preorder(Node root) {
        List<Integer> ans = new ArrayList<>();
        if (root == null) return ans;

        Stack<Node> s = new Stack<>();
        s.push(root);

        while (!s.isEmpty()){
            Node curr = s.pop();
            ans.add(curr.val);
            // insert current's node children in reverse order
            for(int i = curr.children.size() -1; i >=0 ; i--){
                s.push(curr.children.get(i));
            }
        }
        return ans;
    }
    // RECURSIVE
    public List<Integer> preorder1(Node root) {
        List<Integer> preOrder = new ArrayList<>();
        preOrderTraversal(root, preOrder);
        return preOrder;
    }
    public void preOrderTraversal(Node root , List<Integer> list){
        if (root == null) return;
        list.add(root.val);

        for(Node child: root.children){
            preOrderTraversal(child, list);
        }
    }

}

class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
}