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
            }

            if(sum > target) {
                return;
            }

            for(let i = idx; i < nums.length; i++) {
                curSet.push(nums[i]);
                sum += nums[i];

                backtracking(i, sum);

                curSet.pop();
                sum -= nums[i];                
            }
        }

        backtracking(0, 0);

        return res;
    }
}
