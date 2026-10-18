package LeetCode;

public class MTSL {
    //https://leetcode.com/problems/merge-two-sorted-lists/
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if(list1 == null) return list2;
        if(list2 == null) return list1;


        if(list1.val > list2.val){
            ListNode tmp = list1;
            list1 = list2;
            list2 = tmp;
        }
        ListNode res = list1;

        while(list1!= null && list2 != null){
            ListNode temp = null;

            while(list1 != null && list1.val <= list2.val){
                temp = list1;
                list1 = list1.next;
            }

            temp.next = list2;

            ListNode dummy = list2;
            list2 = list1;
            list1 = dummy;
        }
        return res;
    }
    public ListNode mergeTwoLists2(ListNode list1, ListNode list2) {

        ListNode ans = new ListNode();
        ListNode head = ans;

        while(list1!= null && list2!= null){
            if(list1.val < list2.val){
                head.next = list1;
                list1 = list1.next;
            }
            else{
                head.next = list2;
                list2 = list2.next;
            }
            head = head.next;
        }


        head.next = (list1!= null)?list1:list2;
        return ans.next;
    }

    static class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }
}
