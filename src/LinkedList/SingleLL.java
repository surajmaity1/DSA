package LinkedList;

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
