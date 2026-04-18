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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head) return null;
        if (!head.next) return head;
        let slow = head, fast = head;

        // find midpoint
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let l1 = head;  // 1st halve
        let l2 = slow;  // 2nd halve
        let cur = head;
        while (cur.next !== l2) {
            cur = cur.next;
        }
        cur.next = null;

        // reverse 2nd halve of list of nodes
        let cur2 = l2;
        let next2 = cur2.next;
        cur2.next = null;
        while (cur2 && next2) {
            let temp = next2.next;
            next2.next = cur2;
            cur2 = next2;
            next2 = temp;
        }
        l2 = cur2;

        // reorder by merging 1nd halve and reversed 2nd halve
        while (l1 && l2) {
            let temp1 = l1.next;
            let temp2 = l2.next;

            l1.next = l2;
            l2.next = temp1;

            l1 = temp1;
            l2 = temp2;
        }

        if (l2) {
            cur = head;
            while (cur.next) {
                cur = cur.next;
            }
            cur.next = l2;
        }

        return head;
    }
}
