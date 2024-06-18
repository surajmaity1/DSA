package org.surajmyt.QueueImplementation;

import java.util.Scanner;

class QueueSinglePointerDS {

    private int rear = -1;
    private int[] array;

    QueueSinglePointerDS() {

    }

    QueueSinglePointerDS(int size) {
        this.array = new int[size];
    }

    public int enqueue(int value) {

        if (isFull()) {
            return -1;
        }

        this.rear++;
        this.array[this.rear] = value;

        return value;
    }

    public int dequeue() {
        if (isEmpty()) {
            return -1;
        }

        int deletedValue = this.array[0];

        for (int index = 1; index < this.rear + 1; index++) {
            this.array[index - 1] = this.array[index];
        }

        this.array[this.rear] = 0;
        this.rear--;

        return deletedValue;
    }

    private boolean isEmpty() {
        return this.array == null || this.array.length == 0 || this.rear == -1;
    }

    private boolean isFull() {
        return this.array == null || this.rear == this.array.length - 1;
    }

    public int getFirstElement() {
        if (isEmpty()) {
            return -1;
        }

        return this.array[0];
    }

    public int getLastElement() {

        if (isEmpty()) {
            return -1;
        }

        return this.array[this.rear];
    }

    public void display() {
        System.out.print("Queue: ");
        if (isEmpty()) {
            System.out.print("Empty");
        } else {
            for (int index = 0; index <= this.rear; index++) {
                System.out.print(this.array[index] + " ");
            }
        }
        System.out.println();
    }
}

public class QueueSinglePointer {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int size;

        do {
            System.out.print("Enter queue size: ");
            size = scanner.nextInt();
        }while (size <= 0);

        QueueSinglePointerDS queue = new QueueSinglePointerDS(size);
        int choice;

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

                if (queue.enqueue(value) == -1 ) {
                    System.out.println("Queue Overflow");
                }
                else {
                    System.out.println("Inserted Value: " + queue.getLastElement());
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
                if (queue.getFirstElement() == -1) {
                    queue.display();
                }
                else {
                    System.out.println("First Element: " + queue.getFirstElement());
                }
            }
            else if (choice == 4) {
                if (queue.getLastElement() == -1) {
                    queue.display();
                }
                else{
                    System.out.println("Last Element: " + queue.getLastElement());
                }
            }
            else {
                queue.display();
            }
        }while (choice >= 1 && choice <=5);


        /*
        QueueSinglePointerDS queue = new QueueSinglePointerDS(5);

        System.out.println("First Element: " + queue.getFirstElement());
        System.out.println("Last Element: " + queue.getLastElement());

        queue.display();
        System.out.println("Deleted Value: " + queue.dequeue());
        queue.display();

        System.out.println("Inserted Value: " + queue.enqueue(1));
        System.out.println("Inserted Value: " + queue.enqueue(2));
        System.out.println("Inserted Value: " + queue.enqueue(3));
        System.out.println("Inserted Value: " + queue.enqueue(4));
        System.out.println("Inserted Value: " + queue.enqueue(5));
        System.out.println("Inserted Value: " + queue.enqueue(6));


        System.out.println("First Element: " + queue.getFirstElement());
        System.out.println("Last Element: " + queue.getLastElement());


        queue.display();
        System.out.println("Deleted Value: " + queue.dequeue());
        queue.display();
        System.out.println("Deleted Value: " + queue.dequeue());
        queue.display();
        System.out.println("Deleted Value: " + queue.dequeue());
        queue.display();
        System.out.println("Deleted Value: " + queue.dequeue());
        queue.display();
        System.out.println("Deleted Value: " + queue.dequeue());
        queue.display();
        System.out.println("Deleted Value: " + queue.dequeue());

         */
    }
}
