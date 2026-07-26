class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        k = k % nums.length;

        let l = 0,
            r = nums.length - 1;
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }

        ((l = 0), (r = k - 1));
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }

        ((l = k), (r = nums.length - 1));
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }
}
