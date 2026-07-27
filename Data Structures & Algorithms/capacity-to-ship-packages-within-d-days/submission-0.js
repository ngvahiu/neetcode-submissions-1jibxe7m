class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let l = 0,
            r = 0;
        for (const w of weights) {
            l = Math.max(l, w);
            r += w;
        }

        let res = Infinity;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            let numDays = 0;
            let curTotal = 0;
            for (const w of weights) {
                curTotal += w;
                if (curTotal > m) {
                    curTotal = w;
                    numDays++;
                }
            }
            numDays += 1;

            if (numDays <= days) {
                res = Math.min(res, m);
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return res;
    }
}
