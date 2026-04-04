class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;

        const map = new Map();
        for(let i = 0; i < s.length; i++) {
            map.set(s.charAt(i), (map.get(s.charAt(i)) || 0) + 1);
        }

        for(let i = 0; i < t.length; i++) {
            if(!map.get(t.charAt(i))) return false;
            else map.set(t.charAt(i), map.get(t.charAt(i)) - 1);
        }

        return true;
    }
}
