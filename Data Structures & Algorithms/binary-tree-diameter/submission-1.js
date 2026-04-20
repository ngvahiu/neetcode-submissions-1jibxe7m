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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let max = 0;
        function findMaxDiameter(node) {
            if(!node) return 0;
            let leftMax = findMaxDiameter(node.left);
            let rightMax = findMaxDiameter(node.right);

            max = Math.max(max, leftMax + rightMax);
            return 1 + Math.max(leftMax, rightMax);
        }

        findMaxDiameter(root);
        return max;
    }
}
