package LeetCode;

public class LLCL {
    public int cycleLength(ListNode head){
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;

            if (fast == slow){
                ListNode cycleDetection = slow;
                int length = 0;
                do{
                    cycleDetection = cycleDetection.next;
                    length++;
                }while (cycleDetection != fast);
                return length;
            }
        }
        return 0;
    }


    public static class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }
}
