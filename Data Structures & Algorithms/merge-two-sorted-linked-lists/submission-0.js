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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1) return list2;
        if (!list2) return list1;
        let cur1 = list1, cur2 = list2;

        let head = null;
        let cur = head;
        while (cur1 && cur2) {
            if (cur1.val < cur2.val) {
                if(!cur) {
                    cur = cur1;
                    head = cur1;
                } else {
                    cur.next = cur1;
                    cur = cur.next;
                }
                cur1 = cur1.next;
            } else {
                if(!cur) {
                    cur = cur2;
                    head = cur2;
                } else {
                    cur.next = cur2;
                    cur = cur.next;
                }
                cur2 = cur2.next;
            }
        }

        if(cur1) cur.next = cur1;
        else cur.next = cur2;

        return head;
    }
}
