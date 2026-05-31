class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let res = 0;
        for (let i = 0; i <= nums.length; i++) {
            res ^= i;
        }

        res ^= nums.reduce((acc, cur) => acc ^ cur, 0);
        return res;
    }
}
