// https://leetcode.com/problems/add-two-numbers

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const tempNode: ListNode | null = new ListNode(-1, null);
  let current = tempNode,
    traverseL1 = l1,
    traverseL2 = l2,
    carry = 0;

  while (traverseL1 || traverseL2) {
    let sum = carry;

    if (traverseL1) {
      sum += traverseL1.val;
    }

    if (traverseL2) {
      sum += traverseL2.val;
    }

    current.next = new ListNode(sum % 10);
    current = current.next;

    carry = Math.floor(sum / 10);

    if (traverseL1) {
      traverseL1 = traverseL1.next;
    }

    if (traverseL2) {
      traverseL2 = traverseL2.next;
    }
  }

  if (carry) {
    current.next = new ListNode(carry);
  }

  return tempNode.next;
}
