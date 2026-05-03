class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        const curPer = [];
        const pick = new Array(nums.length).fill(false);

        function backtracking() {
            if(curPer.length === nums.length) {
                res.push([...curPer]);
                return;
            }

            for(let i = 0; i < nums.length; i++) {
                if(pick[i]) {
                    continue;
                }

                curPer.push(nums[i]);
                pick[i] = true;
                backtracking();
                curPer.pop();
                pick[i] = false;
            }
        }

        backtracking();
        return res;
    }
}
