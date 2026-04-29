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
    maxPathSum(root) {
        let maxSum = -Infinity;

        function traverse(node) {
            if(!node) return 0;

            let leftMaxSum = traverse(node.left);
            let rightMaxSum = traverse(node.right);

            leftMaxSum = leftMaxSum < 0 ? 0 : leftMaxSum;
            rightMaxSum = rightMaxSum < 0 ? 0 : rightMaxSum;

            let sum = leftMaxSum + node.val + rightMaxSum;
            maxSum = Math.max(sum, maxSum);

            return Math.max(node.val + leftMaxSum, node.val, node.val + rightMaxSum);
        }

        traverse(root);
        return maxSum;
    }
}
