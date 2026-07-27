class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let l = 0,
            r = x;
        let res = 0;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (m * m === x) {
                return m;
            } else if (m * m < x) {
                l = m + 1;
                res = m
            } else {
                r = m - 1;
            }
        }

        return res;
    }
}
