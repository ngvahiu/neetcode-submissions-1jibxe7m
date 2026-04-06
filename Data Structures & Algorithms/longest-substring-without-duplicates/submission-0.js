class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) return 0;
        const m = new Map();
        let l = 0, r = 0;

        m.set(s[l], 0);
        let longest = 1;
        while(r < s.length) {
            longest = Math.max(r - l + 1, longest);
            
            let nextCharIdx = r + 1;
            if(nextCharIdx === s.length) return longest;
            if(m.has(s[nextCharIdx])) {
                let idx = m.get(s[nextCharIdx]);
                while(l <= idx) {
                    m.delete(s[l]);
                    l++;
                }
            } else {
                r++;
                m.set(s[r], r);
            }
        }

        return longest;
    }
}
