class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const set = new Set();

        while (!set.has(n)) {
            set.add(n);

            let total = 0;
            while (n > 0) {
                const r = n % 10;
                total += r * r;

                n = Math.floor(n / 10);
            }

            n = total;
            if (n === 1) return true;
        }

        return false;
    }
}
