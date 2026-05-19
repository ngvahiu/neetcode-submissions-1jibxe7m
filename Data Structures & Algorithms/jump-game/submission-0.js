class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const canReach = new Array(nums.length).fill(false);
        canReach[0] = true;

        for (let i = 0; i < nums.length; i++) {
            if (i === nums.length - 1) return canReach[i];
            if (!canReach[i]) continue;

            for (let j = 1; j <= nums[i]; j++) {
                if (i + j >= nums.length) break;

                canReach[i + j] = true;
            }
        }

        return false;
    }
}
