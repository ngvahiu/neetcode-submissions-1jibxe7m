class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n).fill(1);

        let prod = 1;
        for(let i = 0; i < n; i++) {
            res[i] = prod;
            prod *= nums[i];
        }

        prod = 1;
        for(let i = n - 1; i >= 0; i--) {
            res[i] *= prod;
            prod *= nums[i];
        }

        return res;
    }
}
