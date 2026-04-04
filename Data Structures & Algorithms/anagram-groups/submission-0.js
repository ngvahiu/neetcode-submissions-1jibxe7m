class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        for(const str of strs) {
            const frequency = new Array(26).fill(0);
            for(const c of str) {
                frequency[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            const key = frequency.join(',');
            if(!map[key]) {
                map[key] = [];
            }
            map[key].push(str);
        }

        return Object.values(map);
    }
}
