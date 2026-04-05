class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length - 1;

        let maxAmount = 0;
        while(l < r) {
            let minHeight = Math.min(heights[l], heights[r]);
            let curAmount = minHeight * (r - l);
            maxAmount = Math.max(curAmount, maxAmount);

            if(heights[l] > minHeight) {
                r--;
            } else if(heights[r] > minHeight) {
                l++;
            } else {
                l++;
                r--;
            }
        }

        return maxAmount;
    }
}
