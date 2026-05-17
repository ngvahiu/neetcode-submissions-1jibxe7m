class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const N = nums.length;
        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1]);
        const dp1 = new Array(N).fill(0);
        const dp2 = new Array(N).fill(0);

        for (let i = 0; i < N - 1; i++) {
            dp1[i] = Math.max(dp1[i - 1] || 0, nums[i] + (dp1[i - 2] || 0));
        }

        for (let i = 1; i < N; i++) {
            dp2[i] = Math.max(dp2[i - 1], nums[i] + (dp2[i - 2] || 0));
        }

        return Math.max(dp1[N - 2], dp2[N - 1]);
    }
}
