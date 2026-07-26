class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] !== "]") {
                stack.push(s[i]);
            } else {
                let subStr = "";
                while (stack[stack.length - 1] !== "[") {
                    subStr = stack.pop() + subStr;
                }
                stack.pop();

                let k = "";
                while (!isNaN(stack[stack.length - 1])) {
                    k = stack.pop() + k;
                }

                stack.push(subStr.repeat(Number(k)));
            }
        }

        return stack.join("");
    }
}
