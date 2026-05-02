class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];

        function backtracking(start, subSet) {
            res.push([...subSet]);
            for (let i = start; i < nums.length; i++) {
                subSet.push(nums[i]);
                backtracking(i + 1, subSet);
                subSet.pop();
            }
        }

        backtracking(0, []);

        return res;
    }
}
