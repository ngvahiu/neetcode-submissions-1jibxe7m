class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let heap = new MaxPriorityQueue((x) => x[0]);
        let output = [];

        for (let i = 0; i < nums.length; i++) {
            heap.enqueue([nums[i], i]);

            if (i >= k - 1) {
                while (heap.front()[1] <= i - k) {
                    heap.dequeue();
                }
                output.push(heap.front()[0]);
            }
        }

        return output;
    }
}
