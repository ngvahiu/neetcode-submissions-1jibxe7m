class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const n = text1.length;
        const m = text2.length;
        const memo = Array.from({ length: n + 1 }, () => Array(m + 1).fill(null));

        function dp(i, j) {
            if (i >= text1.length || j >= text2.length) {
                memo[i][j] = "";
                return memo[i][j];
            }

            if (text1[i] === text2[j]) {
                memo[i][j] = text1[i] + (memo[i + 1][j + 1] ?? dp(i + 1, j + 1));
                return memo[i][j];
            } else {
                let firstPath = memo[i + 1][j] ?? dp(i + 1, j);
                let secondPath = memo[i][j + 1] ?? dp(i, j + 1);

                if (firstPath.length > secondPath.length) {
                    memo[i][j] = firstPath;
                } else {
                    memo[i][j] = secondPath;
                }

                return memo[i][j];
            }
        }

        return dp(0, 0).length;
    }
}
