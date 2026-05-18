class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const set = new Set(wordDict);
        let minLen = Infinity;
        for (const word of wordDict) {
            minLen = Math.min(word.length, minLen);
        }

        const memo = {};
        function dp(i) {
            if (i === s.length) return true;
            if (i in memo) {
                return memo[i];
            }

            for (let j = i + minLen; j <= s.length; j++) {
                const word = s.slice(i, j);
                if (!set.has(word)) continue;
                if (dp(j)) {
                    memo[i] = true;
                    return true;
                }
            }

            memo[i] = false;
            return false;
        }

        return dp(0);
    }
}
