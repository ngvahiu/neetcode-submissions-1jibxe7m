class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const edges = [];
        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                edges.push([
                    i,
                    j,
                    Math.abs(points[i][0] - points[j][[0]]) +
                        Math.abs(points[i][1] - points[j][[1]]),
                ]);
            }
        }
        const par = [];
        for (let i = 0; i < points.length; i++) {
            par.push(i);
        }
        const rank = new Array(points.length).fill(1);

        function find(i) {
            if (par[i] === i) return i;
            return find(par[i]);
        }

        function union(i, j) {
            const parI = find(i),
                parJ = find(j);

            if (rank[parI] > rank[parJ]) {
                par[parJ] = parI;
                rank[parI] += rank[parJ];
            } else {
                par[parI] = parJ;
                rank[parJ] += rank[parI];
            }
        }

        // Kruskal’s Minimum Spanning Tree (MST) Algorithm
        let cost = 0;
        let count = 0;
        edges.sort((a, b) => a[2] - b[2]);
        for (const [x, y, w] of edges) {
            if (find(x) !== find(y)) {
                union(x, y);
                cost += w;
                count++;
                if (count === points.length - 1) break;
            }
        }
        return cost;
    }
}
