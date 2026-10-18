package Trees;

public class BinaryTree {
    static class Node{
        int val;
        Node left;
        Node right;

        Node(int val){
            this.val = val;
            this.left = null;
            this.right = null;
        }
    }
    static class BTree{
        static int index = -1;
        public static Node buildTree(int[] nodes){
            index++;
            if (nodes[index] == -1){
                return null;
            }
            Node newNode = new Node(nodes[index]);
            newNode.left = buildTree(nodes);
            newNode.right = buildTree(nodes);
            return newNode;
        }
    }
    public static void preOrder(Node root){
        if (root == null){
            return;
        }
        System.out.print(root.val + " ");
        preOrder(root.left);
        preOrder(root.right);
    }
    public static void inOrder(Node root){
        if (root == null){
            return;
        }
        inOrder(root.left);
        System.out.print(root.val + " ");
        inOrder(root.right);
    }
    public static void postOrder(Node root){
        if (root == null){
            return;
        }
        postOrder(root.left);
        postOrder(root.right);
        System.out.print(root.val + " ");
    }
    public static void main(String[] args) {
        int[] nodes = {1,2,4,-1,-1,5,-1,-1,3,-1,6,-1,-1};
        BTree bTree = new BTree();
        Node root =  bTree.buildTree(nodes);
        preOrder(root);
    }
}
