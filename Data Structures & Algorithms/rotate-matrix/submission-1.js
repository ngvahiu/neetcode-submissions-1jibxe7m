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
                
                // move bottom left into top left
                matrix[t][l + i] = matrix[b - i][l];

                // move bottom right into bottom left
                matrix[b - i][l] = matrix[b][r - i];

                // move top right into bottom right
                matrix[b][r - i] = matrix[t + i][r];

                // move top left into top right
                matrix[t + i][r] = topLeft;
            }

            l++;
            r--;
        }
    }
}
