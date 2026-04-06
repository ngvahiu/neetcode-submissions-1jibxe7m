class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s2.length < s1.length) return false;
        let arr1 = new Array(29).fill(0);
        let arr2 = new Array(29).fill(0);

        for (let i = 0; i < s1.length; i++) {
            arr1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        let l = 0, r = s1.length - 1;
        for (let i = l; i <= r; i++) {
            arr2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        while (r < s2.length) {
            if (this.isTwoArraysEqual(arr1, arr2)) return true;

            // dịch cửa sổ sang phải
            arr2[s2.charCodeAt(l) - 'a'.charCodeAt(0)]--;
            l++;
            r++;
            if (r < s2.length) {
                arr2[s2.charCodeAt(r) - 'a'.charCodeAt(0)]++;
            }
        }

        return false;
    }

    isTwoArraysEqual(arr1, arr2) {
        for (let i = 0; i < 29; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }
}
