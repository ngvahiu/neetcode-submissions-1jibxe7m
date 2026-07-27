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
        const stack = [root];
        const visit = new Set();
        const parents = new Map();
        parents.set(root, null);

        while (stack.length) {
            const node = stack.pop();
            if (!node.left && !node.right) {
                if (node.val === target) {
                    const parNode = parents.get(node);

                    if (!parNode) return null;

                    if (parNode.left === node) parNode.left = null;
                    else parNode.right = null;
                }
            } else if (!visit.has(node)) {
                visit.add(node);
                stack.push(node);

                if (node.left) {
                    stack.push(node.left);
                    parents.set(node.left, node);
                }
                if (node.right) {
                    stack.push(node.right);
                    parents.set(node.right, node);
                }
            }
        }

        return root;
    }
}
