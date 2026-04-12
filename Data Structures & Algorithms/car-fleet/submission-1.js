class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = [];
        for (let i = 0; i < position.length; i++) {
            cars.push([position[i], speed[i]]);
        }
        cars.sort((a, b) => b[0] - a[0]);

        const stack = [];
        for (let i = 0; i < cars.length; i++) {
            const timeReachTarget = (target - cars[i][0]) / cars[i][1];
            if (stack.length === 0) {
                stack.push(timeReachTarget);
            } else {
                const timeReachTargetAhead = stack[stack.length - 1];
                if(timeReachTarget > timeReachTargetAhead) {
                    stack.push(timeReachTarget);
                }
            }
        }

        return stack.length;
    }
}
