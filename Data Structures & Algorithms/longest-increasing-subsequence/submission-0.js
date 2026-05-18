class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const n = nums.length;
        const dp = new Array(n).fill(1);
        let res = 1;

        for (let i = n - 1; i >= 0; i--) {
            for (let j = i + 1; j < n; j++) {
                if (nums[j] > nums[i]) {
                    dp[i] = Math.max(dp[i], 1 + dp[j]);
                }
            }

            res = Math.max(res, dp[i]);
        }

        return res;
    }
}