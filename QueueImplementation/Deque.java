package org.surajmyt.QueueImplementation;

// Deque implementation using circular array

import java.util.Scanner;

class DequeLLDS {
    private int front = -1;
    private int rear = -1;
    private int[] array = null;

    public DequeLLDS() {

    }

    public DequeLLDS(int size) {
        array = new int[size];
    }

    public int enqueueFront(int value) {

        // If array is null means no size have been given
        if (array == null) {
            return -1;
        }
        // If deque is full
        else if ((front == 0 && rear == array.length -1) || front == rear + 1) {
            return -1;
        }
        // If deque is empty
        else if (front == -1 && rear == -1) {
            front = rear = 0;
        }
        // If deque has one element
        else if (front == 0) {
            front = array.length - 1;
        }
        else {
            front--;
        }

        // Now insert the value
        array[front] = value;

        return value;
    }

    public int enqueueRear(int value) {

        // If array is null means no size have been given
        if (array == null) {
            return -1;
        }
        // If deque is full
        else if ((front == 0 && rear == array.length -1) || front == rear + 1) {
            return -1;
        }
        // If deque is empty
        else if (front == -1 && rear == -1) {
            front = rear = 0;
        }
        else {
            rear = (rear + 1) % array.length;
        }

        // Now insert the value
        array[rear] = value;

        return value;
    }

    public int dequeueFront() {

        int deletedValue = -1;

        // If array is null means no size have been given
        if (array == null) {
            return -1;
        }
        // If deque is empty
        else if (front == -1 && rear == -1) {
            return -1;
        }
        // If deque has only one element
        else if (front == rear) {
            deletedValue = array[front];
            front = rear = -1;
        }
        else {
            deletedValue = array[front];
            front = (front + 1) % array.length;
        }
        return deletedValue;
    }

    public int dequeueRear() {

        int deletedValue;

        // If array is null means no size have been given
        if (array == null) {
            return -1;
        }
        // If deque is empty
        else if (front == -1 && rear == -1) {
            return -1;
        }
        // If deque has only one element
        else if (front == rear) {
            deletedValue = array[rear];
            front = rear = -1;
        }
        else if (rear == 0){
            deletedValue = array[rear];
            rear = array.length - 1;
        }
        else {
            deletedValue = array[rear];
            rear--;
        }

        return deletedValue;
    }

    public void display() {
        System.out.print("Deque: ");

        if (array == null || front == -1) {
            System.out.println("Empty");
        } else {
            int index = front;
            while (index != rear){
                System.out.print(array[index] + " ");
                index = (index + 1) % array.length;
            }
            System.out.println(array[index]);
        }

    }
}

public class Deque {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int size;

        do {
            System.out.print("Enter queue size: ");
            size = scanner.nextInt();
        }while (size <= 0);

        DequeLLDS queue = new DequeLLDS(size);

        int choice;

        do {

            System.out.println("1. Enqueue Using Front");
            System.out.println("2. Enqueue Using Rear");
            System.out.println("3. Dequeue Using Front");
            System.out.println("4. Dequeue Using Rear");
            System.out.println("5. Display");

            System.out.print("Enter Choice: ");

            choice = scanner.nextInt();

            if (choice == 1) {
                System.out.print("Enter value: ");
                int value = scanner.nextInt();

                if (queue.enqueueFront(value) == -1 ) {
                    System.out.println("Queue Overflow");
                }
                else {
                    System.out.println("Inserted Value Using Front: " + value);
                }
            }
            else if (choice == 2) {

                System.out.print("Enter value: ");
                int value = scanner.nextInt();

                if (queue.enqueueRear(value) == -1 ) {
                    System.out.println("Queue Overflow");
                }
                else {
                    System.out.println("Inserted Value Using Rear: " + value);
                }
            } else if (choice == 3) {

                int deletedValue = queue.dequeueFront();

                if (deletedValue == -1) {
                    System.out.println("Queue Underflow");
                }
                else {
                    System.out.println("Deleted Value Using Front: " + deletedValue);
                }
            } else if (choice == 4) {

                int deletedValue = queue.dequeueRear();

                if (deletedValue == -1) {
                    System.out.println("Queue Underflow");
                }
                else {
                    System.out.println("Deleted Value Using Rear: " + deletedValue);
                }
            }
            else {
                queue.display();
            }
        }while (choice >= 1 && choice <=5);
    }
}
