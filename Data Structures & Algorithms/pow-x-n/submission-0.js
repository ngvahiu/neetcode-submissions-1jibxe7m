class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        const dp = {};

        dp[0] = 1;
        dp[1] = x;
        function calPow(n) {
            if (n in dp) return dp[n];

            if (n % 2 === 1) {
                dp[n] = calPow(Math.floor(n / 2)) * calPow(Math.floor(n / 2)) * x;
                return dp[n];
            } else {
                dp[n] = calPow(Math.floor(n / 2)) * calPow(Math.floor(n / 2));
                return dp[n];
            }
        }

        return n >= 0 ? calPow(n) : 1 / calPow(-n);
    }
}
