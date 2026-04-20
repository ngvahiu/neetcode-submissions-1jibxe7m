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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummy = new ListNode(0, head);
        let prevTail = dummy;

        while(true) {
            let kth = this.getKthNode(prevTail, k);
            if(!kth) {
                break;
            }

            let groupNext = kth.next;
            let prev = groupNext;
            let cur = prevTail.next;
            while(cur !== kth) {
                let tmp = cur.next;
                cur.next = prev;
                kth.next = cur;
                prev = cur;
                cur = tmp;
            }

            let tmp = prevTail.next;
            prevTail.next = kth;
            prevTail = tmp;
        }

        return dummy.next;
    }

    getKthNode(cur, k) {
        while(cur && k > 0) {
            cur = cur.next;
            k--;
        }

        return cur;
    }
}
