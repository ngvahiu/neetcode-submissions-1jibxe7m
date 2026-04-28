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
    isValidBST(root) {
        function checkValidBST(node, maxVal, minVal) {
            if (!node) return true;
            if (node.val >= maxVal || node.val <= minVal) {
                return false;
            }

            const isLeftBST = checkValidBST(node.left, node.val, minVal);
            const isRightBST = checkValidBST(node.right, maxVal, node.val);

            return isLeftBST && isRightBST;
        }

        return checkValidBST(root, Infinity, -Infinity);
    }
}
