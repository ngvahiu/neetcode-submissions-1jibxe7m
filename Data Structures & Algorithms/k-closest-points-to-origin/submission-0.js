class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const q = new MaxPriorityQueue((entry) => entry.distance);

        for (let [x, y] of points) {
            const dist = x * x + y * y;
            q.enqueue({ point: [x, y], distance: dist });
            if (q.size() > k) {
                q.dequeue();
            }
        }

        return q.toArray().map(entry => entry.point);
    }
}
