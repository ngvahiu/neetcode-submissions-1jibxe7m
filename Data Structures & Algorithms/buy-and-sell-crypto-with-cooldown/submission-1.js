class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let N = prices.length;
        const dp = {}; // key=(i, canBuy) val=maxProfit

        function dfs(idx, canBuy) {
            if (idx >= N) {
                return 0;
            }
            let key = `${idx}-${canBuy}`;
            if (key in dp) {
                return dp[key];
            }

            let cooldown = dfs(idx + 1, canBuy);
            if (canBuy) {
                const buy = dfs(idx + 1, false) - prices[idx];
                dp[key] = buy;
            } else {
                const sell = dfs(idx + 2, true) + prices[idx];
                dp[key] = sell;
            }

            dp[key] = Math.max(dp[key], cooldown);
            return dp[key];
        }

        return dfs(0, true);
    }
}
