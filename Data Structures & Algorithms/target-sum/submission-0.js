class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        // const dp = Array.from({ length: nums.length }, () => Array(target + 1).fill(0));
        const dp = {};

        function dfs(i, curSum) {
            if (i >= nums.length) {
                return curSum === target ? 1 : 0;
            }
            let key = `${i}-${curSum}`;
            if (key in dp) {
                return dp[key];
            }

            let pos = dfs(i + 1, curSum + nums[i]);
            let neg = dfs(i + 1, curSum - nums[i]);
            dp[key] = pos + neg;
            return dp[key];
        }

        return dfs(0, 0);
    }
}
