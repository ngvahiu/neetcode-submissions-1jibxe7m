class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        const n = matrix.length;
        let l = 0,
            r = n - 1;

        while (l < r) {
            for (let i = 0; i < r - l; i++) {
                const t = l,
                    b = r;

                // store topLeft first
                const topLeft = matrix[t][l + i];

                matrix[t][l + i] = matrix[b - i][l];

                matrix[b - i][l] = matrix[b][r - i];

                matrix[b][r - i] = matrix[t + i][r];

                matrix[t + i][r] = topLeft;
            }

            l++;
            r--;
        }
    }
}
