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
     * @param {number} target
     * @return {TreeNode}
     */
    removeLeafNodes(root, target) {
        function dfs(root, par) {
            if (!root) return;

            dfs(root.left, root);
            dfs(root.right, root);

            if (!root.left && !root.right && root.val === target && par) {
                if (par.left === root) par.left = null;
                else par.right = null;
            }
        }

        dfs(root, null);
        if (!root.left && !root.right && root.val === target) {
            root = null;
        }
        return root;
    }
}
