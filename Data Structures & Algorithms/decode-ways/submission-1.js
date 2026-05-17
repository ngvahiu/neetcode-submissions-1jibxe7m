class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const memo = {};

        function dfs(i) {
            // decoded entire string
            if (i === s.length) {
                return 1;
            }

            // invalid
            if (s[i] === "0") {
                return 0;
            }

            if (i in memo) {
                return memo[i];
            }

            // take 1 digit
            let res = dfs(i + 1);

            // take 2 digits
            if (
                i + 1 < s.length &&
                (
                    s[i] === "1" ||
                    (s[i] === "2" && s[i + 1] <= "6")
                )
            ) {
                res += dfs(i + 2);
            }

            memo[i] = res;
            return res;
        }

        return dfs(0);
    }
}