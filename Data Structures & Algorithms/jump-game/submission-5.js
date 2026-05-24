class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const canReach = Array(nums.length).fill(false);

        canReach[0] = true;
        for (let i = 0; i < nums.length; i++) {
            if (!canReach[i]) continue;
            for (let j = 1; j <= nums[i]; j++) {
                if (i + j >= nums.length - 1) return true;
                canReach[i + j] = true;
            }
        }

        return canReach[nums.length - 1];
    }
}
