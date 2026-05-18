class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = nums[0];
        let curMin = nums[0];
        let curMax = nums[0];

        for (let i = 1; i < nums.length; i++) {
            let n = nums[i];
            if (n < 0) {
                [curMax, curMin] = [curMin, curMax];
            }

            curMax = Math.max(curMax * n, n);
            curMin = Math.min(curMin * n, n);

            res = Math.max(curMax, res);
        }

        return res;
    }
}
