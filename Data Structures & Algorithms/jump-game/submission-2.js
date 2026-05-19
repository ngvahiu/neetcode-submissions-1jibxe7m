class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let target = nums.length - 1;

        for (let i = target - 1; i >= 0; i--) {
            if (i + nums[i] >= target) {
                target = i;
            }
        }

        return target === 0;
    }
}
