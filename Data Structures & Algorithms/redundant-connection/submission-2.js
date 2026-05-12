class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const N = edges.length;
        const par = new Array(N + 1);
        const rank = new Array(N + 1).fill(1);
        for (let i = 1; i <= N; i++) {
            par[i] = i;
        }

        function find(n) {
            if (n === par[n]) return par[n];

            return find(par[n]);
        }

        function union(n1, n2) {
            let p1 = find(n1),
                p2 = find(n2);
            if (p1 === p2) return false;

            if (rank[p1] > rank[p2]) {
                par[p2] = par[p1];
                rank[p1] += rank[p2];
            } else {
                par[p1] = par[p2];
                rank[p2] += rank[p1];
            }

            return true;
        }

        for (let [n1, n2] of edges) {
            if (!union(n1, n2)) return [n1, n2];
        }
    }
}
