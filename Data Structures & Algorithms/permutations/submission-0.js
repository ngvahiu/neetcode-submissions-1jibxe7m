class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        const curSet = new Set();

        function backtracking() {
            if(curSet.size === nums.length) {
                res.push([...curSet]);
                return;
            }

            for(let i = 0; i < nums.length; i++) {
                if(curSet.has(nums[i])) {
                    continue;
                }
                curSet.add(nums[i]);
                backtracking();
                curSet.delete(nums[i]);
            }
        }

        backtracking();
        return res;
    }
}
