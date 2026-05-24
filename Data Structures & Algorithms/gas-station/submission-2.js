class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        const totalGas = gas.reduce((acc, cur) => acc + cur, 0);
        const totalCost = cost.reduce((acc, cur) => acc + cur, 0);

        if (totalCost > totalGas) return -1;

        let res = 0, total = 0;
        for (let i = 0; i < gas.length; i++) {
            total += (gas[i] - cost[i]);
            if (total < 0) {
                total = 0;
                res = i + 1 >= gas.length ? 0 : i + 1;
            }
        }

        return res;
    }
}
