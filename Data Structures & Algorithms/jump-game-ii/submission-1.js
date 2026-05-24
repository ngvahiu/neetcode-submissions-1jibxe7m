class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let l = 0,
            r = 0;
        let jumps = 0;

        while (r < nums.length - 1) {
            const maxIdx = Math.max(l + nums[l], r + nums[r]);
            l = r + 1;
            r = maxIdx;

            jumps++;
        }

        return jumps;
    }
}
