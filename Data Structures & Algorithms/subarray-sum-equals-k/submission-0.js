class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const map = new Map();
        let prefixSum = 0;
        let count = 0;

        for (let i = 0; i < nums.length; i++) {
            prefixSum += nums[i];
            if (prefixSum === k) count++;
            if (map.has(prefixSum - k)) {
                count += map.get(prefixSum - k);
            }

            map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
        }

        return count;
    }
}
