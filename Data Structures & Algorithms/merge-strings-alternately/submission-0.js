class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        const n = word1.length,
            m = word2.length;
        const res = [];
        let i = 0,
            j = 0;
        while (i < n || j < m) {
            if (i < n) res.push(word1[i++]);
            if (j < m) res.push(word2[j++]);
        }
        return res.join("");
    }
}
