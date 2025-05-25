package org.surajmyt.LinkedList;

class DoublyLinkedListNode {

    static DoublyLinkedListNode head;

    DoublyLinkedListNode previousNode;
    int value;
    DoublyLinkedListNode nextNode;

    DoublyLinkedListNode() {

    }

    DoublyLinkedListNode(int value) {
        this.value = value;
    }

    public static void display() {
        if (head != null) {
            DoublyLinkedListNode pointer = head;
            while (pointer != null) {
                System.out.print(pointer.value + " <-> ");
                pointer = pointer.nextNode;
            }
        }
        System.out.println("null");
    }

    public static void insertFirst(int val) {
        DoublyLinkedListNode newNode = new DoublyLinkedListNode(val);

        if (head == null) {
            head = newNode;
        }
        else {
            newNode.nextNode = head;
            head.previousNode = newNode;
            head = newNode;
        }
    }

    public static void insertLast(int val) {

        DoublyLinkedListNode newNode = new DoublyLinkedListNode(val);

        if (head == null) {
            head = newNode;
        }
        else {
            DoublyLinkedListNode current = head;

            while (current.nextNode != null) {
                current = current.nextNode;
            }

            current.nextNode = newNode;
            newNode.previousNode = current;
        }
    }

}

public class DoublyLinkedList {
    public static void main(String[] args) {

        DoublyLinkedListNode.insertLast(1);
        DoublyLinkedListNode.insertFirst(90);
        DoublyLinkedListNode.insertLast(2);
        DoublyLinkedListNode.insertLast(3);
        DoublyLinkedListNode.insertFirst(0);
        DoublyLinkedListNode.display();
    }
}
