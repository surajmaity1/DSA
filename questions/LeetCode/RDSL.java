package LeetCode;

public class RDSL {

    //https://leetcode.com/problems/remove-duplicates-from-sorted-list/
    public ListNode deleteDuplicates(ListNode head) {
        if(head == null) {
            return head;
        }

        ListNode temp = head;

        while(temp.next != null){
            if(temp.val == temp.next.val){
                temp.next = temp.next.next;
            }
            else{
                temp = temp.next;
            }
        }

        return head;
    }

    public static class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }

}
