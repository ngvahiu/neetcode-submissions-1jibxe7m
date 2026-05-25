class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        const leftStack = [];
        const starStack = [];

        for (let i = 0; i < s.length; i++) {
            const c = s[i];
            if (c === "(") leftStack.push(i);
            else if (c === "*") starStack.push(i);
            else {
                if (leftStack.length === 0) {
                    if (starStack.length === 0) {
                        return false;
                    }
                    starStack.pop();
                } else {
                    leftStack.pop();
                }
            }
        }

        while (leftStack.length > 0 && starStack.length > 0) {
            if (leftStack.pop() > starStack.pop()) return false;
        }
        return leftStack.length === 0;
    }
}
