class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort((a, b) => a - b);
        const res = [];
        const quad = [];

        const kSum = (k, start, target) => {
            // base case, two sum problem
            if (k === 2) {
                let l = start,
                    r = nums.length - 1;
                while (l < r) {
                    const sum = nums[l] + nums[r];
                    if (sum < target) {
                        l++;
                    } else if (sum > target) {
                        r--;
                    } else {
                        res.push([...quad, nums[l], nums[r]]);
                        l++;
                        r--;
                        while (l < r && nums[l] === nums[l - 1]) l++;
                        while (l < r && nums[r] === nums[r + 1]) r--;
                    }
                }
                return;
            }

            for (let i = start; i < nums.length - k + 1; i++) {
                if (i > start && nums[i] === nums[i - 1]) continue;
                quad.push(nums[i]);
                kSum(k - 1, i + 1, target - nums[i]);
                quad.pop();
            }
        };

        kSum(4, 0, target);
        return res;
    }
}
