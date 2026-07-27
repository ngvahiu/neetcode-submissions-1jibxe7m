/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let l = 1,
            r = n;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            const comparison = guess(m);

            if (comparison === 0) {
                return m;
            } else if (comparison === 1) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return l;
    }
}
