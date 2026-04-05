class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        const res = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if(i > 0 && nums[i] === nums[i - 1]) continue;
            let remain = -nums[i];
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                let curSum = nums[left] + nums[right];

                if (curSum > remain) {
                    right--;
                } else if (curSum < remain) {
                    left++;
                } else {
                    res.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;

                    while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;
                }
            }
        }

        return res;
    }
}
