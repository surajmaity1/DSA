package LeetCode;

import java.util.ArrayList;
import java.util.List;

public class ITLL {
    //https://leetcode.com/problems/intersection-of-two-linked-lists/


    public static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) {
            val = x;
            next = null;
        }
    }

    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) return null;
        ListNode h1 = headA;
        ListNode h2 = headB;

        while (h1 != h2){
            h1 = (h1 != null) ? h1.next:headB;
            h2 = (h2 != null) ? h2.next:headA;
        }
        return h1;
    }
}
