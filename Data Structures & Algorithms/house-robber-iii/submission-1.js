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
    rob(root) {
        function dfs(root) {
            if (!root) return [0, 0];

            const leftPair = dfs(root.left);
            const rightPair = dfs(root.right);

            const withRoot = root.val + leftPair[1] + rightPair[1];
            const withoutRoot = Math.max(...leftPair) + Math.max(...rightPair);

            return [withRoot, withoutRoot];
        }

        return Math.max(...dfs(root));
    }
}
