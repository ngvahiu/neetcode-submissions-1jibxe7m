class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const m = matrix.length,
            n = matrix[0].length;
        let l = 0,
            t = 0,
            r = n - 1,
            b = m - 1;

        const res = [];
        while (l <= r && t <= b) {
            for (let i = l; i <= r; i++) {
                res.push(matrix[t][i]);
            }
            t++;

            for (let i = t; i <= b; i++) {
                res.push(matrix[i][r]);
            }
            r--;

            if (!(l <= r && t <= b)) break;

            for (let i = r; i >= l; i--) {
                res.push(matrix[b][i]);
            }
            b--;

            for (let i = b; i >= t; i--) {
                res.push(matrix[i][l]);
            }
            l++;
        }

        return res;
    }
}
