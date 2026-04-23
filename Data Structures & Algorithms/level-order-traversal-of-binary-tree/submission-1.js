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
     * @return {number[][]}
     */
    levelOrder(root) {
        const q = [];
        const res = [];

        if(root) q.push(root);
        while (q.length) {
            const level = [];
            const levelVal = [];
            while (q.length) {
                const node = q.shift();
                level.push(node);
                levelVal.push(node.val);
            }
            res.push(levelVal);

            for (let node of level) {
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }
        }

        return res;
    }
}
