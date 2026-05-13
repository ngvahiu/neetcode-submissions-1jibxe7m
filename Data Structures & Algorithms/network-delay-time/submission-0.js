class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const adjencyMap = new Map();
        for (let [u, v, t] of times) {
            if (!adjencyMap.has(u)) {
                adjencyMap.set(u, []);
            }
            adjencyMap.get(u).push([v, t]);
        }

        const minHeap = new MinPriorityQueue((entry) => entry[0]);
        minHeap.enqueue([0, k]);

        const visit = new Set();
        let res = 0;
        while (!minHeap.isEmpty()) {
            const [t, u] = minHeap.dequeue();

            if (visit.has(u)) {
                continue;
            }

            res = t;
            visit.add(u);
            for (let [v, tv] of adjencyMap.get(u) || []) {
                if(!visit.has(v)) minHeap.enqueue([t + tv, v]);
            }
        }

        return visit.size !== n ? -1 : res;
    }
}
