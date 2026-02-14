package org.surajmyt.StackImplementation;

class StackDSLL {

    static StackDSLL head;
    int value;
    StackDSLL nextNode;

    public StackDSLL() {
    }

    public StackDSLL(int value) {
        this.value = value;
    }

    public int push(int value) {
        StackDSLL newNode = new StackDSLL(value);

        if (checkOverflow(newNode)) {
            System.out.println("Linked List Full | Try to delete element before inserting: " + value);
            return -1;
        }

        if (head != null) {
            newNode.nextNode = head;
        }
        head = newNode;

        return value;
    }

    public int pop() {

        if (checkUnderflow()) {
            System.out.println("Linked List Empty | Try to insert element before delete something");
            return -1;
        }

        StackDSLL deletedNode = head;
        int value = deletedNode.value;

        if (head.nextNode != null) {
            head = head.nextNode;
        }
        else {
            head = null;
        }

        // node deleted
        deletedNode = null;

        return value;
    }

    public int peek() {

        if (checkUnderflow()) {
            System.out.println("Linked List Empty | Try to insert element before delete something");
            return -1;
        }

        return head.value;
    }

    private boolean checkOverflow (StackDSLL isNodeCreated) {
        // that means heap is full
        return isNodeCreated == null;
    }

    private boolean checkUnderflow () {
        return head == null;
    }

}

public class StackUsingLinkedList {
    public static void main(String[] args) {
        StackDSLL stackDS = new StackDSLL();
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
        System.out.println("Peek element: " + stackDS.peek());
        System.out.println("Deleted value:" + stackDS.pop());
    }
}
