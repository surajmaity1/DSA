package org.surajmyt.AVLTree;

class Node {
    int data;
    Node left;
    Node right;
    int height;

    Node(int data) {
        this.data = data;
    }
}

public class AVLTree {
    public static void main(String[] args) {

    }

    public static int height(Node root) {
        if (root == null) {
            return -1;
        }
        return root.height;
    }

    // LL ROTATION
    public static Node singleRotateLeft(Node previousRoot) {
        Node newRoot = previousRoot.left;
        previousRoot.left = newRoot.right;
        newRoot.right = previousRoot;

        previousRoot.height = Math.max(height(previousRoot.left), height(previousRoot.right)) + 1;
        newRoot.height = Math.max(height(newRoot.left), previousRoot.height) + 1;

        // new root
        return newRoot;
    }

    // RR ROTATION
    public static Node singleRotateRight(Node previousRoot) {
        Node newRoot = previousRoot.right;
        previousRoot.right = newRoot.left;
        newRoot.left = previousRoot;

        previousRoot.height = Math.max(height(previousRoot.right), height(previousRoot.left)) + 1;
        newRoot.height = Math.max(height(newRoot.right), previousRoot.height) + 1;

        return newRoot;
    }

    // LR ROTATION
    public static Node lrRotation(Node node) {
        node.left = singleRotateRight(node.left);
        return singleRotateLeft(node);
    }

    // RL ROTATION


    public static Node insertRecursive(Node root, int data, int height) {
        if (root == null) {
            Node newNode = new Node(data);
            newNode.height = 0;
            return newNode;
        }

        if (data < root.data) {
            root.left = insertRecursive(root.left, data, root.height);
        } else if (data > root.data) {
            root.right = insertRecursive(root.right, data, root.height);
        }

        return root;
    }

    public static Node insert(Node root, int data) {
        Node newNode = new Node(data);

        if (root == null) {
            newNode.height = 0;
            return newNode;
        }

        Node pointer = root;
        Node current = null;

        while (pointer != null) {
            current = pointer;
            if (data < pointer.data) {
                pointer = pointer.left;
            } else if (data > pointer.data) {
                pointer = pointer.right;
            } else {
                System.out.println(data + " already present");
                return root;
            }
        }

        if (data < current.data) {
            current.left = newNode;
        } else {
            current.right = newNode;
        }

        return root;
    }
}
