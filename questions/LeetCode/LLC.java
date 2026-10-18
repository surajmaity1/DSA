package LeetCode;

public class LLC {
    //https://leetcode.com/problems/linked-list-cycle/
    public boolean hasCycle(ListNode head) {
        if(head == null) return false;

        ListNode fast = head;
        ListNode slow = head;

        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;

            if(fast == slow) return true;
        }

        return false;
    }

    public static class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }
}
