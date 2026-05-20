class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const sum = nums.reduce((acc, num) => acc + num, 0);
        if (sum % 2 !== 0) {
            return false;
        }

        let dp = new Set();
        dp.add(0);
        const target = sum / 2;

        for (let i = nums.length - 1; i >= 0; i--) {
            const nextDp = new Set();
            for (const t of dp) {
                if (t + nums[i] === target) return true;

                nextDp.add(t + nums[i]);
                nextDp.add(t);
            }
            dp = nextDp;
        }

        return false;
    }
}
