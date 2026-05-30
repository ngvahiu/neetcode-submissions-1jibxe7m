class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const set = new Set();

        while (n > 0) {
            let total = 0;
            while (n > 0) {
                const r = n % 10;
                total += r * r;

                n = Math.floor(n / 10);
            }

            if (total === 1) return true;
            else if (set.has(total)) return false;
            else set.add(total);

            n = total;
        }

        return false;
    }
}
