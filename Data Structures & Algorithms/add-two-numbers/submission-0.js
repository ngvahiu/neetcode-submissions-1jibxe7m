/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        let dummy = new ListNode(0);
        let cur = dummy;

        while(l1 || l2 || carry) {
            let val1 = l1 ? l1.val : 0;
            let val2 = l2 ? l2.val : 0;
            let sum = val1 + val2 + carry;

            let remainder = sum % 10;
            carry = Math.floor(sum / 10);

            let newNode = new ListNode(remainder);
            cur.next = newNode;
            cur = cur.next;

            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;            
        }

        return dummy.next;
    }
}
