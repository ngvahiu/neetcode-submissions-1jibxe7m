class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let res = 0,
            count = 0;

        for (let num of nums) {
            if (count === 0) {
                res = num;
            }

            if (num === res) {
                count++;
            } else {
                count--;
            }
        }

        return res;
    }
}
