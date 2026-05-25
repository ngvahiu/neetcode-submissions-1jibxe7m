class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const [xT, yT, zT] = target;
        const good = new Set();

        for (const t of triplets) {
            if (t[0] > xT || t[1] > yT || t[2] > zT) {
                continue;
            }
            for (let i = 0; i < t.length; i++) {
                if (t[i] === target[i]) {
                    good.add(i);
                }
            }
        }
        return good.size === 3;
    }
}
