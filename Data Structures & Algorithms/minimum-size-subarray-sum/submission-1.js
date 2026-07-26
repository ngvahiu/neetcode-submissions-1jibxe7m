class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        const prefixSums = new Map();
        let prefixSum = 0;
        let min = Infinity;

        prefixSums.set(0, -1);
        for (let i = 0; i < nums.length; i++) {
            prefixSum += nums[i];

            const remain = prefixSum - target;
            for (let j = remain; j >= 0; j--) {
                if (prefixSums.has(j)) {
                    min = Math.min(i - prefixSums.get(j), min);
                    break;
                }
            }

            prefixSums.set(prefixSum, i);
        }

        return min === Infinity ? 0 : min;
    }
}
