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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        if (!root) return new TreeNode(val);

        function dfs(node) {
            if (node.val > val) {
                if (!node.left) node.left = new TreeNode(val);
                else dfs(node.left, node);
            } else {
                if (!node.right) node.right = new TreeNode(val);
                else dfs(node.right, node);
            }
        }

        dfs(root);
        return root;
    }
}
