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
     * @return {number[]}
     */
    rightSideView(root) {
        const q = new Queue();
        const res = [];

        if(root) q.push(root);
        while(!q.isEmpty()) {
            const levelSize = q.size();

            for(let i = 0; i < levelSize; i++) {
                const node = q.pop();

                if(i === levelSize - 1) res.push(node.val);
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }
        }

        return res;
    }
}
