class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        if (s.length > t.length) return false;
        let pS = 0;
        let pT = 0;

        while (pS < s.length) {
            const c = s.charAt(pS);
            if (pT === t.length) {
                return false;
            }

            while (pT < t.length) {
                if (t.charAt(pT) === c) {
                    break;
                } else if (pT === t.length - 1) {
                    return false;
                }
                pT++;
            }
            pS++;
            pT++;
        }

        return true;
    }
}
