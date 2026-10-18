package LeetCode;

public class IGCDLL {

    // https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/description/

    /*
    public ListNode insertGreatestCommonDivisors(ListNode head) {
        ListNode trav = head;
        while(trav.next != null) {
            int insVal = gcd(trav.val, trav.next.val);
            ListNode insNode = new ListNode(insVal, trav.next);
            trav.next = insNode;
            trav = insNode.next;
        }
        return head;
    }
    public int gcd(int a, int b) {
        if (a == 0) return b;
        return gcd(b%a, a);
    }

     */
}
