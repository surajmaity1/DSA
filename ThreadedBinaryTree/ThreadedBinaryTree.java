package org.surajmyt.ThreadedBinaryTree;

import java.util.Scanner;

class Node {
    int value;
    Node left;
    Node right;
    Boolean leftThread;
    Boolean rightThread;

    Node(int value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.leftThread = false;
        this.rightThread = false;
    }
}

public class ThreadedBinaryTree {

    private static Node insert(Node root, int key) {
        Node current = root;
        Node parent = null;
        boolean isFound = false;

        while (current != null) {

            // check same key is already present or not in the tree
            if (current.value == key) {
                isFound = true;
                System.out.println("Node already exist");
                break;
            }

            parent = current;

            if (key < current.value) {
                // check there is any node presents on left subtree
                if (current.leftThread) {
                    // left subtree nodes are present then traverse
                    current = current.left;
                } else {
                    break;
                }
            } else {
                // check there is any node presents on right subtree
                if (current.rightThread) {
                    // right subtree nodes are present then traverse
                    current = current.right;
                } else {
                    break;
                }
            }
        }

        if (!isFound) {
            Node newNode = new Node(key);
            newNode.leftThread = false;
            newNode.rightThread = false;

            if (parent == null) {
                root = newNode;
                newNode.left = null;
                newNode.right = null;
            } else if (key < parent.value) {
                newNode.left = parent.left;
                newNode.right = parent;
                parent.leftThread = true;
                parent.left = newNode;
            } else {
                newNode.left = parent;
                newNode.right = parent.right;
                parent.rightThread = true;
                parent.right = newNode;
            }
        }
        return root;
    }

    private static Node inorderSuccessor(Node current) {
        if (!current.rightThread) {
            return current.right;
        } else {
            current = current.right;
            while (current.leftThread) {
                current = current.left;
            }
            return current;
        }
    }

    private static void inorder(Node root) {
        if (root == null) {
            System.out.println("null");
            return;
        }

        Node current = root;
        while (current.leftThread) {
            current = current.left;
        }

        while (current != null) {
//            System.out.print(current.value + " ");
            System.out.print(current.value + " " + current.leftThread + " " + current.rightThread);
            System.out.println("\n-----------------");
            current = inorderSuccessor(current);
        }
    }

    private static Node preorderSuccessor(Node node) {
        if (node == null) {
            System.out.println("Invalid node");
            return null;
        }

        if (node.leftThread) {
            return node.left;
        }

        Node current = node;
        while (!current.rightThread) {
            current = current.right;
        }

        return current.right;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice;
        Node root = null;

        do {
            System.out.println("\nEnter choice: ");
            choice = sc.nextInt();
            if (choice == 1) {

                // for user input

//                System.out.println("Enter node's value: ");
//                int value = sc.nextInt();
//                root = insert(root, value);


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

                int[] arr = {20,10,5,50,34,69,21,48,40,49,35,41};
                for (int i = 0; i < arr.length; i++) {
                    root = insert(root, arr[i]);
                }
            } else if (choice == 2) {
                inorder(root);
            }
            else if(choice == 3) {
                Node node = root.right.left;
                Node store = inorderSuccessor(node);
                System.out.println("inorder successor of " + node.value + " is: " + store.value);
            } else if (choice == 4) {
                Node node = root.right.left.right.right;
                Node store = preorderSuccessor(node);
                if (store != null)
                    System.out.println("preorder successor of " + node.value + " is: " + store.value);
            } else {
                System.out.println("Wrong Input");
                break;
            }
        } while (true);
    }
}
