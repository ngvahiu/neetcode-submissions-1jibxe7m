class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const s = new Map();

        for(let i = 0; i < nums.length; i++) {
            const remain = target - nums[i];
            if(s.has(remain)) {
                return [s.get(remain), i];
            }
            s.set(nums[i], i);
        }

        return [-1, -1];
    }
}
