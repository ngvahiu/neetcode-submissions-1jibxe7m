class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res = [];
        nums.sort((a, b) => a - b);
        const curSet = [];

        function backtrack(i) {
            if (i === nums.length) {
                res.push([...curSet]);
                return;
            }

            curSet.push(nums[i]);
            backtrack(i + 1);
            curSet.pop();

            while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
                i++;
            }
            backtrack(i + 1);
        }

        backtrack(0);
        return res;
    }
}
