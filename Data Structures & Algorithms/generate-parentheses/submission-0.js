class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        const curParentheses = [];

        function backtrack(numOpens, numCloses) {
            if (numOpens === 0 && numCloses === 0) {
                res.push(curParentheses.join(""));
                return;
            }

            if (numOpens > 0) {
                curParentheses.push("(");
                backtrack(numOpens - 1, numCloses + 1);
                curParentheses.pop();
            }
            if (numCloses > 0) {
                curParentheses.push(")");
                backtrack(numOpens, numCloses - 1);
                curParentheses.pop();
            }
        }

        backtrack(n, 0);
        return res;
    }
}
