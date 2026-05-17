class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0;

        for (let i = 0; i < s.length; i++) {
            // odd length
            let l = i,
                r = i;
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                res++;
                l--;
                r++;
            }

            // even length
            ((l = i), (r = i + 1));
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                res++;
                l--;
                r++;
            }
        }

        return res;
    }
}
