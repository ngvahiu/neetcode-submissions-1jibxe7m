class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        let leftProds = new Array(n).fill(1); 
        let rightProds = new Array(n).fill(1); 
        const res = [];

        let prod = 1;
        for(let i = 0; i < nums.length; i++) {
            leftProds[i] = prod;
            prod *= nums[i];
        }

        prod = 1;
        for(let i = nums.length - 1; i >= 0; i--) {
            rightProds[i] = prod;
            prod *= nums[i];
        }        

        for(let i = 0; i < nums.length; i++) {
            res.push(rightProds[i] * leftProds[i]);
        }

        return res;
    }
}
