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

        function dfs(node, par) {
            if (node) {
                if (node.val > val) dfs(node.left, node);
                else dfs(node.right, node);
                return;
            }

            if (par.val > val) {
                par.left = new TreeNode(val);
            } else if (par.val < val) {
                par.right = new TreeNode(val);
            }
        }

        dfs(root, null);
        return root;
    }
}
