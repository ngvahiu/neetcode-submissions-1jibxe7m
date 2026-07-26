class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let count = 0;
        let l = 0,
            r = 0;
        let lastNum = -200;

        while (r < nums.length) {
            if (r === 0 || nums[r] !== lastNum) {
                count++;
                nums[l] = nums[r];
                lastNum = nums[r];
                l++;
            }

            r++;
        }

        return count;
    }
}
