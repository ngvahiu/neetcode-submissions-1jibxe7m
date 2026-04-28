/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const stack = [];
        let cur = root;

        while (stack.length || cur) {
            while (cur) {
                stack.push(cur);
                cur = cur.left;
            }

            cur = stack.pop();
            k--;
            if (k === 0) {
                return cur.val;
            }

            cur = cur.right;
        }

        return -1;
    }
}
