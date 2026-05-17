class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0;
        const n = s.length;
        const dp = Array.from({ length: n }, () => Array(n).fill(false));

        for (let i = s.length - 1; i >= 0; i--) {
            for (let j = i; j < s.length; j++) {
                if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
                    dp[i][j] = true;
                    res++;
                }
            }
        }

        return res;
    }
}
