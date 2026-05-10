class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const preMap = new Map();

        for (let [a, b] of prerequisites) {
            if (!preMap.has(a)) {
                preMap.set(a, []);
            }
            preMap.get(a).push(b);
        }

        const visited = new Set(); // to track Vertex already added to output
        const curPath = new Set(); // to track current vertices in traversing path
        const output = [];

        function dfs(crs) {
            // cycle detected
            if (curPath.has(crs)) {
                return false;
            }
            // already added to output
            if (visited.has(crs)) {
                return true;
            }

            curPath.add(crs);
            for (let pre of preMap.get(crs) || []) {
                if (!dfs(pre)) return false;
            }

            curPath.delete(crs);
            visited.add(crs);
            output.push(crs);

            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return [];
        }
        return output;
    }
}
