class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let l = 0,
            r = nums.length - 1;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (nums[m] === target) return true;

            if (nums[l] > nums[m]) {
                // right portion sorted
                if (nums[m] < target && target <= nums[r]) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            } else if (nums[l] < nums[m]) {
                // left portion sorted
                if (nums[l] <= target && target < nums[m]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else {
                l++;
            }
        }

        return false;
    }
}
