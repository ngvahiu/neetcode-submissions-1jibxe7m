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
     * @return {boolean}
     */
    isBalanced(root) {
        let isBalanced = true;
        function calculateHeight(node) {
            if (!node) return 0;

            let leftHeight = 1 + calculateHeight(node.left);
            let rightHeight = 1 + calculateHeight(node.right);

            if(Math.abs(leftHeight - rightHeight) > 1) {
                isBalanced = false;
            }

            return Math.max(leftHeight, rightHeight);
        }

        calculateHeight(root);

        return isBalanced;
    }
}
