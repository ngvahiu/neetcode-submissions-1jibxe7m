class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        nums.sort((a, b) => a - b);
        const curSet = [];

        function backtracking(idx, sum) {
            if(sum === target) {
                res.push([...curSet]);
                return;
            }

            for(let i = idx; i < nums.length; i++) {
                if (sum + nums[i] > target) {
                    return;
                }                
                curSet.push(nums[i]);
                backtracking(i, sum + nums[i]);
                curSet.pop();
            }
        }

        backtracking(0, 0);

        return res;
    }
}
