package org.surajmyt.QueueImplementation;

import java.util.Scanner;

class QueueLLDS {
    private QueueLLDS front;
    private QueueLLDS rear;

    private int value;
    private QueueLLDS nextNode;

    public QueueLLDS() {
    }

    public QueueLLDS(int value) {
        this.value = value;
    }

    public boolean enqueue(int val) {

        QueueLLDS node = new QueueLLDS(val);

        if (isFull(node)) {
            return false;
        }

        if (isEmpty()) {
            this.front = node;
            this.rear = node;
        }
        else {
            this.rear.nextNode = node;
            this.rear = this.rear.nextNode;
        }

        return true;
    }

    public int dequeue() {
        if (isEmpty()) {
            return -1;
        }

        int deletedValue = this.front.value;

        if (this.front.nextNode == null) {
            this.front = null;
            this.rear = null;
        }
        else {
            this.front = this.front.nextNode;
        }

        return deletedValue;
    }

    public void display() {
        System.out.print("Queue: ");

        if (isEmpty()) {
            System.out.println("empty");
        }else {
            QueueLLDS traverse = this.front;

            while (traverse != this.rear) {
                System.out.print(traverse.value + " -> ");
                traverse = traverse.nextNode;
            }

            System.out.print(traverse.value +" -> null\n");
        }
    }

    private boolean isFull(QueueLLDS node) {
        if (node == null) {
            System.out.println("Queue full");
            return true;
        }

        return false;
    }
    private boolean isEmpty() {
        return this.front == null;
    }
}

public class QueueLinkedList {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int choice;
        QueueLLDS queue = new QueueLLDS();

        do {

            System.out.println("1. Enqueue");
            System.out.println("2. Dequeue");
            System.out.println("3. First Element");
            System.out.println("4. Last Element");
            System.out.println("5. Display");

            System.out.print("Enter Choice: ");

            choice = scanner.nextInt();

            if (choice == 1) {

                System.out.print("Enter value: ");
                int value = scanner.nextInt();

                if (!queue.enqueue(value)) {
                    System.out.println("Queue Overflow");
                }
                else {
                    System.out.println("Inserted Value: " + value);
                }
            } else if (choice == 2) {
                int deletedValue = queue.dequeue();

                if (deletedValue == -1) {
                    System.out.println("Queue Underflow");
                }
                else {
                    System.out.println("Deleted Value: " + deletedValue);
                }
            }
            else if (choice == 3) {

            }
            else if (choice == 4) {

            }
            else if (choice == 5){
                queue.display();
            }
        }while (choice >= 1 && choice <=5);
    }
}
