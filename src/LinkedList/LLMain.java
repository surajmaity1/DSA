package LinkedList;

public class LLMain {
    public static void main(String[] args) {
        SingleLL ll = new SingleLL();
        ll.insertFirst(3);
        ll.insertFirst(2);
        ll.insertFirst(1);
        ll.insertLast(4);
        ll.insertLast(5);
        ll.insertLast(8);
        ll.display();

        ll.reverseIteration();
        ll.display();

    }
}
