class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res = [];
        nums.sort((a, b) => a - b);
        const curSet = [];

        function backtrack(i, canAddNewSet) {
            if(canAddNewSet) res.push([...curSet]);
            if (i === nums.length) {
                return;
            }

            curSet.push(nums[i]);
            backtrack(i + 1, true);
            curSet.pop();

            i++;
            while (i < nums.length && nums[i] === nums[i - 1]) {
                i++;
            }
            if(i < nums.length) {
                backtrack(i, false);
            }
        }

        backtrack(0, true);
        return res;
    }
}
