class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const neighborMap = new Map();
        for (let [a, b] of edges) {
            if (!neighborMap.has(a)) {
                neighborMap.set(a, []);
            }
            if (!neighborMap.has(b)) {
                neighborMap.set(b, []);
            }

            neighborMap.get(a).push(b);
            neighborMap.get(b).push(a);
        }

        const visited = new Set();
        function dfs(node, prev) {
            if (visited.has(node)) {
                return;
            }

            visited.add(node);
            for (let neighbor of neighborMap.get(node) || []) {
                if (neighbor !== prev) {
                    dfs(neighbor, node);
                }
            }
        }

        let components = 0;
        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                dfs(i, -1);
                components++;
            }
        }

        return components;
    }
}
