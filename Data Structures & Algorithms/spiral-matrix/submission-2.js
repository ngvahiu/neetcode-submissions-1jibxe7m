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
            if (l <= r) {
                for (let i = l; i <= r; i++) {
                    res.push(matrix[t][i]);
                }
                t++;
            }

            if (t <= b) {
                for (let i = t; i <= b; i++) {
                    res.push(matrix[i][r]);
                }
                r--;
            } else {
                break;
            }

            if (l <= r) {
                for (let i = r; i >= l; i--) {
                    res.push(matrix[b][i]);
                }
                b--;
            } else {
                break;
            }

            if (t <= b) {
                for (let i = b; i >= t; i--) {
                    res.push(matrix[i][l]);
                }
                l++;
            } else {
                break;
            }
        }

        return res;
    }
}
