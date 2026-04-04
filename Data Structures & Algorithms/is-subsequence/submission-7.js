class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let i = 0, j = 0;
        while (i < s.length && j < t.length) {
            if (s.charAt(i) == t.charAt(j)) {
                i++;
            }
            j++;
        }
        return i == s.length;
    }
}
