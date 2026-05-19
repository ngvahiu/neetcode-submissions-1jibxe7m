class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const totalSum = nums.reduce((acc, curr) => acc + curr, 0);
        if(totalSum % 2 === 1) return false;
        
        const halfSum = totalSum / 2;

        const memo = Array.from({ length: nums.length }, () => Array.from({ length: halfSum + 1 }, () => null));
        function dp(i, remain) {
            if(i < 0) return false;
            const n = nums[i];

            if(n === remain) return true;
            if(memo[i][remain] !== null) return memo[i][remain];
            if(n > remain) return dp(i - 1, remain);

            // choose n
            if(dp(i - 1, remain - n)) {
                memo[i][remain] = true;
                return true;
            } else {
                memo[i][remain] = false;
            }

            // without choosing n
            return  dp(i - 1, remain);
        }

        return dp(nums.length - 1, halfSum);
    }
}
