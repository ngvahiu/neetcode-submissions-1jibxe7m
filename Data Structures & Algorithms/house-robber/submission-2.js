class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1]);
        const dp = new Array(nums.length).fill(0);

        dp[0] = nums[0];
        dp[1] = nums[1];
        dp[2] = nums[0] + nums[2];
        for (let i = 3; i < nums.length; i++) {
            dp[i] = nums[i] + Math.max(dp[i - 2], dp[i - 3]);
        }

        return Math.max(dp[nums.length - 2], dp[nums.length - 1]);
    }
}
