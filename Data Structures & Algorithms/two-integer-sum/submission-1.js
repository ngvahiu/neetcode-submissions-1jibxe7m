class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indices = {};

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if (indices[diff] !== undefined) {
                return [i, indices[diff]];
            }
            indices[nums[i]] = i;
        }

        return [];
    }
}
