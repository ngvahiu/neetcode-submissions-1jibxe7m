class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];

        function backtrack(numOpens, numCloses, stack) {
            if (numOpens === 0 && numCloses === 0) {
                res.push(stack);
                return;
            }

            if (numOpens > 0) {
                backtrack(numOpens - 1, numCloses + 1, stack + '(');
            }
            if (numCloses > 0) {
                backtrack(numOpens, numCloses - 1, stack + ')');
            }
        }

        backtrack(n, 0, '');
        return res;
    }
}
