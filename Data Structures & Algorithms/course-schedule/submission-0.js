class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const map = new Map();

        for (let [a, b] of prerequisites) {
            if (!map.has(a)) {
                map.set(a, []);
            }
            map.get(a).push(b);
        }

        const visited = new Set();
        const recStack = new Set();
        function isCyclicUntil(course) {
            // node is already in recursion stack cycle found
            if (recStack.has(course)) return true;

            // already processed no need to visit again
            if (visited.has(course)) return false;

            recStack.add(course);
            visited.add(course);
            for (let prerequisite of map.get(course) || []) {
                if (isCyclicUntil(prerequisite)) return true;
            }

            recStack.delete(course);
            return false;
        }

        for (const course of map.keys()) {
            if (!visited.has(course) && isCyclicUntil(course)) {
                return false;
            }
        }

        return true;
    }
}
