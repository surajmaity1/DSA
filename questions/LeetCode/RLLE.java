package LeetCode;
class ListNode {
    int val;
    ListNode next;
    ListNode(int x) {
        val = x;
        next = null;
    }
}
public class RLLE {
    //https://leetcode.com/problems/remove-linked-list-elements/description/



    public ListNode removeElements(ListNode head, int val) {
        if (head == null) return null;

        ListNode prev = null;
        ListNode pres = head;
        ListNode next = pres.next;

        while(pres != null){
            if(pres != head && pres.val == val){
                if(prev != null) prev.next = next;
                pres = next;
            }
            else if (pres == head && pres.val == val){
                head = head.next;
                pres = head;
            }
            else{
                prev = pres;
                pres = next;
            }
            if (next != null) next = next.next;
        }
        return head;
    }

    public ListNode removeElements1(ListNode head, int val) {
        if (head == null) return null;
        head.next = removeElements(head.next, val);
        return (head.val != val)? head : head.next;
    }
}
