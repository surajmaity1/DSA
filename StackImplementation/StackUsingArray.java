package org.surajmyt.StackImplementation;

class StackDS {
    private int[] array;
    private int top = -1;

    StackDS() {
        this.array = new int[0];
    }

    StackDS(int size) {
        this.array = new int[size];
    }

    public int push(int value) {

        if (checkOverflow()) {
            System.out.println("Array Full | Try to delete element before inserting: " + value);
            return -1;
        }

        // inserting value
        this.top++;
        this.array[top] = value;
        return value;
    }

    public int pop() {

        if (checkUnderflow()) {
            System.out.println("Array Empty | Try to insert element before delete something");
            return -1;
        }

        int deletedValue = this.array[top];
        // deleting value
        this.array[top] = 0;
        this.top--;

        return deletedValue;
    }

    public int peek() {

        if (checkUnderflow()) {
            System.out.println("Array Empty | Try to insert element before checking");
            return -1;
        }

        return this.array[top];
    }

    private boolean checkOverflow () {
        return this.array.length == this.top + 1;
    }

    private boolean checkUnderflow () {
        return this.top == -1;
    }
}

public class StackUsingArray {
    public static void main(String[] args) {
        StackDS stackDS = new StackDS(5);
        System.out.println("Insert value:" + stackDS.push(5));
        System.out.println("Insert value:" + stackDS.push(4));
        System.out.println("Insert value:" + stackDS.push(3));
        System.out.println("Insert value:" + stackDS.push(2));
        System.out.println("Insert value:" + stackDS.push(1));
        System.out.println("Peek element: " + stackDS.peek());
        System.out.println("Deleted value:" + stackDS.pop());
        System.out.println("Peek element: " + stackDS.peek());
        System.out.println("Deleted value:" + stackDS.pop());
        System.out.println("Peek element: " + stackDS.peek());
        System.out.println("Deleted value:" + stackDS.pop());
        System.out.println("Peek element: " + stackDS.peek());
        System.out.println("Deleted value:" + stackDS.pop());
    }
}
