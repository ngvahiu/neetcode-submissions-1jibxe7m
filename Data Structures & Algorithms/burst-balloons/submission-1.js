class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        nums = [1, ...nums, 1];
        const N = nums.length;
        const dp = Array.from({ length: N }, () => Array(N).fill(0));

        function dfs(l, r) {
            if (r < l) return 0;
            if (dp[l][r] !== 0) return dp[l][r];

            let max = 0;
            for (let i = l; i <= r; i++) {
                const sum = dfs(l, i - 1) + nums[l - 1] * nums[i] * nums[r + 1] + dfs(i + 1, r);
                max = Math.max(max, sum);
            }

            dp[l][r] = max;
            return dp[l][r];
        }

        return dfs(1, N - 2);
    }
}
