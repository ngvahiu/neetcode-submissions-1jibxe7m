class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftProds = [], rightProds = [], res = [];

        let prod = 1;
        for(let i = 0; i < nums.length; i++) {
            leftProds.push(prod);
            prod *= nums[i];
        }

        prod = 1;
        for(let i = nums.length - 1; i >= 0; i--) {
            rightProds.unshift(prod);
            prod *= nums[i];
        }        

        for(let i = 0; i < nums.length; i++) {
            res.push(rightProds[i] * leftProds[i]);
        }

        return res;
    }
}
