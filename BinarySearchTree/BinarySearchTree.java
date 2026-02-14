package org.surajmyt.BinarySearchTree;

import java.util.Scanner;

class Node {
    int data;
    Node left;
    Node right;

    Node(int data) {
        this.data = data;
    }
}

public class BinarySearchTree {
    public static void main(String[] args) {

        // construct bst by taking node inputs
        Node create = null;
        Scanner sc = new Scanner(System.in);
        int choice;

        do {
            System.out.println("\nEnter choice: ");
            choice = sc.nextInt();
            if (choice == 1) {

                // for user input

//                System.out.println("Enter node's value: ");
//                int value = sc.nextInt();
//                create = constructRecursive(create, value);

                /*
                            20
                          /    \
                        10      50
                       /       /   \
                      5      34    69
                            /   \
                          21    48
                               /   \
                             40     49
                            /  \
                          35   41
                * */

                int[] arr = {20, 10, 5, 50, 34, 69, 21, 48, 40, 49, 35, 41};
                for (int item : arr) {
//                    create = constructIterative(create, item);
                    create = constructRecursive(create, item);
                }

            } else if (choice == 2) {
                if (create != null) {
                    System.out.print("PreOrder: ");
                    preorderRecursive(create);
                } else {
                    System.out.println("Empty");
                }

            } else if (choice == 3) {

                // for user input

                System.out.println("Enter node's value: ");
                int value = sc.nextInt();
                // Node findNode = searchRecursive(create, value);
                Node findNode = searchIterative(create, value);
                if (findNode != null) {
                    System.out.println("Found: " + findNode.data);
                } else {
                    System.out.println("Not found");
                }
            } else {
                System.out.println("Wrong Input");
                break;
            }
        } while (true);
    }

    public static Node constructRecursive(Node root, int data) {
        if (root == null) {
            return new Node(data);
        }

        if (data < root.data) {
            root.left = constructRecursive(root.left,data);
        } else if (data > root.data) {
            root.right = constructRecursive(root.right,data);
        } else {
            // node with same value already present
            return null;
        }

        return root;
    }

    public static Node constructIterative(Node root, int data) {
        Node newNode = new Node(data);

        if (root == null) {
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

    // recursive search
    // Time Complexity: O(𝑛), in worst case (when BST is a skew tree). Space Complexity: O(𝑛), for recursive stack.
    public static Node searchRecursive(Node root, int data) {
        if (root == null) {
            return null;
        }

        if (data < root.data) {
            return searchRecursive(root.left, data);
        }
        if (data > root.data) {
            return searchRecursive(root.right, data);
        }

        return root;
    }

    // non-recursive search
    // Time Complexity: O(𝑛). Space Complexity: O(1).
    public static Node searchIterative(Node root, int data) {
        while (root != null) {
            if (data < root.data) {
                root = root.left;
            } else if (data > root.data) {
                root = root.right;
            } else {
                return root;
            }
        }

        return null;
    }

    // Finding Minimum Element in Binary Search Trees
    public static Node findMin(Node root) {
        if (root == null) {
            return null;
        }

        while (root.left != null) {
            root = root.left;
        }
        while (root.right != null) {

        }
        return null;
    }

    private static void preorderRecursive(Node root) {
        if (root != null) {
            preorderRecursive(root.left);
            System.out.print(root.data + " ");
            preorderRecursive(root.right);
        }
    }
}
