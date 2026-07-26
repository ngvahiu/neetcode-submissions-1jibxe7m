class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let l = 0,
            r = arr.length;

        while (l < r) {
            let m = Math.floor((l + r) / 2);
            if (x - arr[m] > arr[m + k] - x) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        return arr.slice(l, l + k);
    }
}
