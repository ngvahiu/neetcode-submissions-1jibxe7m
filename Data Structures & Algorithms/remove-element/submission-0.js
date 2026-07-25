class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0;
        const q = new Queue();

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === val) {
                q.enqueue(i);
            } else {
                if (!q.isEmpty()) {
                    const fillIdx = q.dequeue();
                    nums[fillIdx] = nums[i];
                    q.enqueue(i);
                }
                k++;
            }
        }

        return k;
    }
}
