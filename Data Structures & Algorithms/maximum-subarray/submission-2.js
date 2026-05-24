class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let curSum = 0, maxSum = -Infinity;

        for(const num of nums) {
            curSum = Math.max(num, curSum + num);
            maxSum = Math.max(maxSum, curSum);
        }

        return maxSum;
    }
}
