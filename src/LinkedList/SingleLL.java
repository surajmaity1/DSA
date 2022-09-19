package LinkedList;
//TODO: COMPLETE IT AS SOON AS POSSIBLE
public class SingleLL {
    private Node head;
    private Node tail;
    private int size;

    public SingleLL(){
        this.size = 0;
    }

    private class Node{
        int val;
        Node next;

        public Node(int val){
            this.val = val;
        }
        public Node(int val, Node next){
            this.val = val;
            this.next = next;
        }
    }

    public void insertFirst(int val){
        Node node = new Node(val);
        node.next = head;
        head = node;

        if(tail == null){
            tail = head;
        }
        size++;
    }

    public void insertLast(int val){
        if (tail == null){
            insertFirst(val);
            return;
        }
        Node node = new Node(val);
        tail.next = node;
        tail = node;
        size++;
    }

    public void insertAt(int index, int val){
        if (index == 1){
            insertFirst(val);
        }
        else if (index < 1 || index > size){
            System.out.println("Insertion Not Possible");
        }else{
            Node temp = head;
            while (index-- > 2){
                temp = temp.next;
            }
            temp.next = new Node(val, temp.next);
            size++;
        }

    }
    public void insertRec(int val, int index){
        head = insertRec(val, index, head);
    }
    private Node insertRec(int val, int index, Node node){
        if (index == 0){
            Node newNode = new Node(val, node);
            size++;
            return newNode;
        }

        node.next = insertRec(val,index-1, node.next);
        return node;
    }

    //reverse Linked List using Recursion
    public void reverseRecursion(Node node){
        if (node == head){
            head = tail;
            return;
        }

        reverseRecursion(node.next);
        tail.next = node;
        tail = node;
        tail.next = null;
    }

    //reverse Linked List using Iteration
    public void reverseIteration(){
        if (head == null|| size < 2) return;

        Node prev = null;
        Node present = head;
        Node nextPtr = present.next;

        while (present != null){
            present.next = prev;
            prev = present;
            present = nextPtr;

            if (nextPtr != null) nextPtr = nextPtr.next;

        }

        // present will point to null and
        // prev will point to the last node and it will be head;
        head = prev;
    }

    public void display(){
        System.out.print("Linked List: ");
        if (head == null){
            System.out.print("EMPTY");
        }
        else{
            Node temp = head;
            while (temp != null){
                System.out.print(temp.val + " ");
                temp = temp.next;
            }
        }
        System.out.println();
    }



}
