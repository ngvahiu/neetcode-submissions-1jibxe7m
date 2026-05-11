class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
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
        function cycleDetection(node, parent) {
            if (visited.has(node)) {
                return true;
            }

            visited.add(node);
            for (let neighbor of neighborMap.get(node) || []) {
                if (neighbor !== parent && cycleDetection(neighbor, node)) return true;
            }

            return false;
        }

        if (cycleDetection(0, -1)) {
            return false;
        }

        return visited.size === n;
    }
}
