class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const q = new MaxPriorityQueue();

        for (let num of nums) {
            q.enqueue(num);
        }

        let res = 0;
        while (k > 0) {
            res = q.dequeue();
            k--;
        }

        return res;
    }
}
