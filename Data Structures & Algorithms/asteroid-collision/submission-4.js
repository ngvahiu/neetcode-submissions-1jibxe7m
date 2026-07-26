class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];

        for (const ast of asteroids) {
            if (ast > 0) {
                stack.push(ast);
                continue;
            }

            let isExploded = false;
            while (stack.length > 0) {
                const lastAst = stack[stack.length - 1];
                if (lastAst < 0) {
                    stack.push(ast);
                    break;
                }

                if (lastAst < Math.abs(ast)) {
                    stack.pop();
                } else if (lastAst === Math.abs(ast)) {
                    isExploded = true;
                    stack.pop();
                    break;
                } else {
                    isExploded = true;
                    break;
                }
            }

            if (stack.length === 0 && !isExploded) stack.push(ast);
        }

        return stack;
    }
}
