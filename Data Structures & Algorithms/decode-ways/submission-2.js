class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const memo = {};

        function dp(i) {
            if (i === s.length) return 1;
            if (s[i] === "0") return 0;
            if (memo[i]) return memo[i];

            let res = 0;

            // take 1 char
            res += dp(i + 1);

            // take 2 char
            if (i < s.length - 1) {
                if (s[i] === "1" || (s[i] === "2" && s[i + 1] <= "6")) {
                    res += dp(i + 2);
                }
            }

            memo[i] = res;
            return res;
        }

        return dp(0);
    }
}
