class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length === 0) return "";

        const countT = new Map();
        for (const c of t) {
            countT.set(c, (countT.get(c) || 0) + 1);
        }

        let have = 0;
        let need = countT.size;
        const window = new Map();
        let l = 0;
        let resLen = Infinity;
        let res = [-1, -1];
        for (let r = 0; r < s.length; r++) {
            const c = s[r];
            window.set(c, (window.get(c) || 0) + 1);

            if (countT.has(c) && window.get(c) === countT.get(c)) {
                have++;
            }

            while (have === need) {
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = [l, r];
                }

                // shrink window
                window.set(s[l], window.get(s[l]) - 1);
                if (countT.has(s[l]) && window.get(s[l]) < countT.get(s[l])) {
                    have--;
                }

                l++;
            }
        }

        const [rL, rR] = res;
        return resLen === Infinity ? "" : s.slice(rL, rR + 1);
    }
}
