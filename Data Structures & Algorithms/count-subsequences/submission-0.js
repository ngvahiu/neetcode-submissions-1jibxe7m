class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const dp = {};

        function dfs(i, j) {
            if (j >= t.length) return 1;
            if (i >= s.length) return 0;
            let key = `${i}-${j}`;
            if (key in dp) {
                return dp[key];
            }

            if (s[i] === t[j]) {
                dp[key] = dfs(i + 1, j + 1) + dfs(i + 1, j);
            } else {
                dp[key] = dfs(i + 1, j);
            }

            return dp[key];
        }

        return dfs(0, 0);
    }
}
