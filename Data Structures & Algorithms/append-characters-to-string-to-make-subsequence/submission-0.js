class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let i = 0, j = 0;
        while (i < s.length && j < t.length) {
            if (s.charAt(i) == t.charAt(j)) {
                j++;
            }
            i++;
        }

        if(j === t.length) return 0;
        return t.length - j;
    }
}
