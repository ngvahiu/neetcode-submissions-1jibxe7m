class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const maxPile = Math.max(...piles);
        let l = 0, r = maxPile;
        let k = 0;

        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);

            let totalTimes = 0;
            for (let pile of piles) {
                totalTimes += Math.ceil(pile / m);
            }

            if (totalTimes <= h) {
                k = m;
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return k;
    }
}
