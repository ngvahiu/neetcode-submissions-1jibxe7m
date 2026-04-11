class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i] === '/') {
                const firstNum = stack.pop();
                const secondNum = stack.pop();

                let calculation = 0;
                if (tokens[i] === '+') {
                    calculation = secondNum + firstNum;
                } else if (tokens[i] === '-') {
                    calculation = secondNum - firstNum;
                } else if (tokens[i] === '*') {
                    calculation = secondNum * firstNum;
                } else if (tokens[i] === '/') {
                    calculation = Math.trunc(secondNum / firstNum);
                }

                stack.push(calculation);
            } else {
                stack.push(Number(tokens[i]));
            }
        }

        return stack.pop();
    }
}
