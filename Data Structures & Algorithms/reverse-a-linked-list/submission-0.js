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
     * @return {ListNode}
     */
    reverseList(head) {
        if(!head) return null;

        let cur = head, next = head.next;
        cur.next = null;
        while(cur && next) {
            let temp = next.next;
            next.next = cur;
            cur = next;
            next = temp;
        }

        return cur;
    }
}
