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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) return 'null';
        const res = [];
        const queue = new Queue();
        queue.push(root);

        while (!queue.isEmpty()) {
            const node = queue.pop();
            if (!node) {
                res.push('null');
            } else {
                res.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        return res.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (data === 'null') return null;
        const arr = data.split(',');
        const root = new TreeNode(parseInt(arr[0]));
        const q = new Queue([root]);

        let idx = 1;
        while(idx < arr.length) {
            const curNode = q.pop();
            const leftNode = arr[idx] === 'null' ? null : new TreeNode(parseInt(arr[idx]));
            const rightNode = arr[idx + 1] === 'null' ? null : new TreeNode(parseInt(arr[idx + 1]));

            curNode.left = leftNode;
            curNode.right = rightNode;

            if(leftNode) q.push(leftNode);
            if(rightNode) q.push(rightNode);
            idx += 2;
        }

        return root;
    }
}
