package org.surajmyt.QueueImplementation;

public class PriorityQueueLinkedList {

    static class Node {
        int value;
        int priority;
        Node nextNode;
    }

    static Node createNode(int value, int priority) {
        Node newNode = new Node();

        newNode.value = value;
        newNode.priority = priority;
        newNode.nextNode = null;

        return newNode;
    }

    static int peek(Node head) {
        return (head).value;
    }

    static Node dequeue(Node head) {
        Node temp = head;
        (head) = (head).nextNode;
        return head;
    }

    static Node enqueue(Node head, int value, int priority) {
        Node start = (head);

        Node newNode = createNode(value, priority);

        if ((head).priority < priority) {
            newNode.nextNode = head;
            (head) = newNode;
        } else {

            while (start.nextNode != null &&
                    start.nextNode.priority > priority) {
                start = start.nextNode;
            }

            newNode.nextNode = start.nextNode;
            start.nextNode = newNode;
        }
        return head;
    }

    static boolean isEmpty(Node head) {
        return (head) == null;
    }

    static void display(Node head) {
        if (head == null) {
            System.out.print("Empty");
        }
        else {
            Node start = head;
            while (start != null) {
                System.out.print(start.value + " ");
                start = start.nextNode;
            }
        }
        System.out.println();
    }

    public static void main(String[] args) {

        Node head = createNode(12, 1);
        head = enqueue(head, 45, 2);
        head = enqueue(head, 98, 3);
        head = enqueue(head, 32, 4);

        System.out.print("Display: ");
        display(head);

        while (!isEmpty(head)) {
            System.out.printf("Deleted %d \n", peek(head));
            head = dequeue(head);
            System.out.print("Display: ");
            display(head);
        }
    }
}
