class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let curSum = 0;
        let maxSum = -Infinity;

        for(let i = 0; i < nums.length; i++) {
            curSum = Math.max(nums[i], nums[i] + curSum);
            maxSum = Math.max(curSum, maxSum);
        }

        return maxSum;
    }
}
