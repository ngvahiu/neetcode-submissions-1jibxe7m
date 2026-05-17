class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;

        if (n === 1) {
            return nums[0];
        }

        function robLine(arr) {
            let rob1 = 0;
            let rob2 = 0;

            for (const num of arr) {
                const newRob = Math.max(
                    rob2,
                    rob1 + num
                );

                rob1 = rob2;
                rob2 = newRob;
            }

            return rob2;
        }

        return Math.max(
            robLine(nums.slice(0, n - 1)),
            robLine(nums.slice(1))
        );
    }
}