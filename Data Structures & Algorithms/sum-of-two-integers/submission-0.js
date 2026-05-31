class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        while(b !== 0) {
            let temp = a ^ b;
            b = (a & b) << 1;
            a = temp;
        }

        return a;
    }
}
