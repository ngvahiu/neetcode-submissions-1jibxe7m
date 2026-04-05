class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);

        let longest = 0;
        for(let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if(set.has(num - 1)) continue;

            let nextNum = num;
            let length = 0;
            while(set.has(nextNum)) {
                length++;
                nextNum++;
            }

            longest = Math.max(longest, length);
        }

        return longest; 
    }
}
