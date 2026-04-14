class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let maxArea = 0;

        for(let i = 0; i < heights.length; i++) {
            let start = i;
            while(stack.length && stack[stack.length - 1][1] > heights[i]) {
                const [idx, height] = stack.pop();
                maxArea = Math.max(maxArea, height * (i - idx));
                start = idx;
            }
            stack.push([start, heights[i]]);
        }

        for(let [idx, height] of stack) {
            maxArea = Math.max(maxArea, height * (heights.length - idx));
        }

        return maxArea;
    }
}
