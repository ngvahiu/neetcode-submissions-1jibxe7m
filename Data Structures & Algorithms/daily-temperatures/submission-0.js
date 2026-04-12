class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        let res = new Array(temperatures.length);

        for (let i = temperatures.length - 1; i >= 0; i--) {
            if (stack.length === 0) {
                res[i] = 0;
                stack.push([temperatures[i], i]);
            } else {
                while (stack.length > 0 && temperatures[i] >= stack[stack.length - 1][0]) {
                    stack.pop();
                }

                if (stack.length === 0) {
                    res[i] = 0;
                    stack.push([temperatures[i], i]);
                } else {
                    let warmerIdx = stack[stack.length - 1][1];
                    res[i] = warmerIdx - i;
                    stack.push([temperatures[i], i]);
                }
            }
        }

        return res;
    }
}
