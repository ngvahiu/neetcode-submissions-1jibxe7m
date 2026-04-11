class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === ')') {
                let openBracket = stack.pop();
                if (openBracket !== '(') return false;
            } else if (s[i] === '}') {
                let openBracket = stack.pop();
                if (openBracket !== '{') return false;
            } else if (s[i] === ']') {
                let openBracket = stack.pop();
                if (openBracket !== '[') return false;
            } else {
                stack.push(s[i]);
            }
        }

        return stack.length === 0;
    }
}
