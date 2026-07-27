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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        const dummy = new ListNode(0, head);

        // 1. reach node at position "left"
        let leftPrev = dummy,
            cur = head;
        for (let i = 0; i < left - 1; i++) {
            leftPrev = cur;
            cur = cur.next;
        }

        // 2.reverse from left to right
        let prev = null;
        for (let i = left; i <= right; i++) {
            let tmp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = tmp;
        }

        // 3. update pointers
        leftPrev.next.next = cur;
        leftPrev.next = prev;

        return dummy.next;
    }
}
