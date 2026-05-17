class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        const adj = {};
        for (let [u, v, w] of flights) {
            if (!adj[u]) adj[u] = [];
            adj[u].push([v, w]);
        }

        const heap = new MinPriorityQueue((entry) => entry[0]); // [cost, vertice, numOfStops]
        const dist = Array.from({ length: n }, () => Array(k + 2).fill(Infinity));
        dist[src][0] = 0;
        heap.push([0, src, -1]);

        while (!heap.isEmpty()) {
            const [cost, u, numOfStops] = heap.pop();

            if (u === dst) return cost;
            if (numOfStops === k || cost > dist[u][numOfStops + 1]) continue;

            for (let [v, w] of adj[u] || []) {
                const nextCost = cost + w;
                const nextStops = numOfStops + 1;
                if (nextCost < dist[v][nextStops + 1]) {
                    dist[v][nextStops + 1] = nextCost;
                    heap.push([nextCost, v, nextStops]);
                }
            }
        }
        return -1;
    }
}
