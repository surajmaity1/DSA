package org.surajmyt.LinkedList;

class DoublyCircularLinkedListNode {

    static DoublyCircularLinkedListNode head;

    DoublyCircularLinkedListNode previousNode;
    int value;
    DoublyCircularLinkedListNode nextNode;

    DoublyCircularLinkedListNode() {

    }

    DoublyCircularLinkedListNode(int value) {
        this.value = value;
    }

    public static void display() {
        if (head != null) {

            DoublyCircularLinkedListNode pointer = head;

            do {
                System.out.print(pointer.value + " <-> ");
                pointer = pointer.nextNode;
            }while (pointer != head);
        }
        else {
            System.out.println("null");
        }
    }

    public static void insertLast(int val) {
        DoublyCircularLinkedListNode newNode = new DoublyCircularLinkedListNode(val);

        if (head == null) {
            head = newNode;
        }
        else {
            DoublyCircularLinkedListNode current = head;

            while (current.nextNode != head) {
                current = current.nextNode;
            }

            current.nextNode = newNode;
            newNode.previousNode = current;
        }

        newNode.nextNode = head;
        head.previousNode = newNode;
    }
}

public class DoublyCircularLinkedList {
    public static void main(String[] args) {
        DoublyCircularLinkedListNode.insertLast(1);
        DoublyCircularLinkedListNode.insertLast(2);
        DoublyCircularLinkedListNode.insertLast(3);
        DoublyCircularLinkedListNode.display();

    }
}
