# https://leetcode.com/problems/add-two-numbers

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1: ListNode | None, l2: ListNode | None) -> ListNode | None:
        traverse_l1 = l1
        traverse_l2 = l2
        carry = 0
        temp_node = ListNode(-1)
        current_node = temp_node
        
        while traverse_l1 or traverse_l2:
            total = carry
            
            if traverse_l1:
                total = total + traverse_l1.val
            
            if traverse_l2:
                total = total + traverse_l2.val
            
            current_node.next = ListNode(val=total % 10)
            current_node = current_node.next
            
            carry = total // 10
            
            if traverse_l1:
                traverse_l1 = traverse_l1.next
            
            if traverse_l2:
                traverse_l2 = traverse_l2.next
        
        if carry:
            current_node.next = ListNode(val=carry)
            current_node = current_node.next
        
        return temp_node.next
