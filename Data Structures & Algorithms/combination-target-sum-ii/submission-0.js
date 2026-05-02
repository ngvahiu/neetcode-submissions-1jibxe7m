class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = [];
        candidates.sort((a, b) => a - b);
        const curSet = [];

        function backtracking(idx, sum) {
            if (sum === target) {
                res.push([...curSet]);
                return;
            }

            for (let i = idx; i < candidates.length; i++) {
                if (sum + candidates[i] > target) {
                    return;
                }
                curSet.push(candidates[i]);
                backtracking(i + 1, sum + candidates[i]);
                curSet.pop();

                while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
                    i++;
                }               
            }
        }

        backtracking(0, 0);

        return res;
    }
}
