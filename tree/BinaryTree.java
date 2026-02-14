package org.surajmyt.tree;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

class Node {
    int data;
    Node left;
    Node right;

    Node(int data) {
        this.data = data;
    }
}

public class BinaryTree {
    public static void main(String[] args) {

        /*
                1
               / \
              2   3
             / \  / \
            4   5 6  7

         */

        Node root = new Node(1);

        root.left = new Node(2);
        root.left.left = new Node(4);
        root.left.right = new Node(5);

        root.right = new Node(3);
        root.right.left = new Node(6);
        root.right.right = new Node(7);

        /*
        System.out.print("Pre order: ");
        preorderIterative(root);
        System.out.println();
        preorderRecursive(root);
        System.out.println();

        System.out.print("In order: ");
        inorderRecursive(root);
        System.out.println();
        inorderIterative(root);
        System.out.println();

        System.out.print("Post order: ");
        postorderRecursive(root);
        System.out.println();
        postorderIterative(root);
        System.out.println();

         */

        System.out.print("Level order: ");
        leverOrderTraversal(root);
        System.out.println();

        System.out.print("Delete binary tree: ");
        deleteBinaryTree(root);
        System.out.println();

        System.out.print("Level order: ");
        leverOrderTraversal(root);
        System.out.println();

    }

    private static void deleteBinaryTree(Node root) {
        if (root == null) {
            return;
        }

        deleteBinaryTree(root.left);
        deleteBinaryTree(root.right);

        System.out.print(root.data + " ");
        root.left = null;
        root.right = null;
        root = null;
    }

    private static void preorderRecursive(Node root) {
        if (root != null) {
            System.out.print(root.data + " ");
            preorderRecursive(root.left);
            preorderRecursive(root.right);
        }
    }

    private static void preorderIterative(Node root) {

        Stack<Node> stack = new Stack<>();
        while (true) {

            while (root != null) {
                System.out.print(root.data + " ");
                stack.push(root);
                root = root.left;
            }

            if (stack.isEmpty()) {
                break;
            }

            root = stack.pop();
            root = root.right;
        }

    }

    private static void inorderRecursive(Node root) {
        if (root != null) {
            inorderRecursive(root.left);
            System.out.print(root.data + " ");
            inorderRecursive(root.right);
        }
    }

    private static void inorderIterative(Node root) {
        Stack<Node> stack = new Stack<>();
        while (true) {

            while (root != null) {
                stack.push(root);
                root = root.left;
            }

            if (stack.isEmpty()) {
                break;
            }

            root = stack.pop();
            System.out.print(root.data + " ");
            root = root.right;
        }
    }

    private static void postorderRecursive(Node root) {
        if (root != null) {
            postorderRecursive(root.left);
            postorderRecursive(root.right);
            System.out.print(root.data + " ");
        }
    }

    private static void postorderIterative(Node root) {
        Stack<Node> stack = new Stack<>();
        Node previous = null;

        do {
            while (root != null) {
                stack.push(root);
                root = root.left;
            }
            while (root == null && !stack.isEmpty()) {
                root = stack.peek();
                if (root.right == null || root.right == previous) {
                    System.out.print(root.data + " ");
                    stack.pop();
                    previous = root;
                    root = null;
                } else {
                    root = root.right;
                }
            }
        } while (!stack.isEmpty());
    }

    private static void leverOrderTraversal(Node root) {
        if (root == null) {
            return;
        }

        Queue<Node> queue = new LinkedList<>();
        queue.add(root);

        while (!queue.isEmpty()) {
            root = queue.remove();
            System.out.print(root.data + " ");

            if (root.left != null) {
                queue.add(root.left);
            }
            if (root.right != null) {
                queue.add(root.right);
            }
        }
    }

}
