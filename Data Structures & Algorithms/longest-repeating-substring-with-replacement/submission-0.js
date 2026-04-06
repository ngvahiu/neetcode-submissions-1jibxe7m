class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map();
        let l = 0;
        let maxF = 0;

        let longest = 0;
        for(let r = 0; r < s.length; r++) {
            count.set(s[r], (count.get(s[r]) || 0) + 1);
            maxF = Math.max(maxF, count.get(s[r]));

            while(r - l + 1 - maxF > k) {
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
