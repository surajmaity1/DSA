package org.surajmyt.LinkedList;

class Node {

    static Node head;
    int value;
    Node nextNode;

    Node() {

    }

    Node(int value) {
        this.value = value;
    }

    public static void insertLast(int val) {

        Node newNode = new Node(val);
        Node pointer = head;

        if (head == null) {
            head = newNode;
        } else {

            do {
                pointer = pointer.nextNode;
            } while (pointer.nextNode != head);

            pointer.nextNode = newNode;
        }

        newNode.nextNode = head;
    }

    public static void display() {

        if (head != null) {
            Node pointer = head;
            do {
                System.out.print(pointer.value + " -> ");
                pointer = pointer.nextNode;
            } while (pointer != head);
        }
        System.out.print("null");
    }
}


public class SingleCircularLinkedList {
    public static void main(String[] args) {

        Node.insertLast(1);
        Node.insertLast(2);
        Node.insertLast(3);
        Node.insertLast(4);
        Node.insertLast(5);
        Node.display();
    }
}
