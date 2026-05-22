class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        const m = matrix.length;
        const n = matrix[0].length;
        const dp = Array.from({ length: m }, () => Array(n).fill(0));

        function dfs(i, j) {
            if (dp[i][j] !== 0) return dp[i][j];

            let res = 1;
            if (i - 1 >= 0 && matrix[i][j] < matrix[i - 1][j]) {
                res = Math.max(res, 1 + dfs(i - 1, j));
            }
            if (i + 1 < m && matrix[i][j] < matrix[i + 1][j]) {
                res = Math.max(res, 1 + dfs(i + 1, j));
            }
            if (j - 1 >= 0 && matrix[i][j] < matrix[i][j - 1]) {
                res = Math.max(res, 1 + dfs(i, j - 1));
            }
            if (j + 1 < n && matrix[i][j] < matrix[i][j + 1]) {
                res = Math.max(res, 1 + dfs(i, j + 1));
            }

            dp[i][j] = res;
            return dp[i][j];
        }

        let longest = 1;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                longest = Math.max(longest, dfs(i, j));
            }
        }

        return longest;
    }
}
