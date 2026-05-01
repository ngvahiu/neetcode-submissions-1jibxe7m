class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const q = new MaxPriorityQueue();

        for (let stone of stones) {
            q.enqueue(stone);
        }

        while (q.size() > 1) {
            let largest = q.dequeue();
            let secondLargest = q.dequeue();

            if (largest > secondLargest) {
                q.enqueue(largest - secondLargest);
            }
        }

        return q.size() === 1 ? q.dequeue() : 0;
    }
}
