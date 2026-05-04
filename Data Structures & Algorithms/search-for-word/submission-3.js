class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS = board.length;
        const COLS = board[0].length;
        const visisted = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

        function backtrack(r, c, curWord) {
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS || visisted[r][c]) {
                return false;
            }

            curWord += board[r][c];
            visisted[r][c] = true;
            if (curWord === word) {
                return true;
            } else if (!word.startsWith(curWord)) {
                visisted[r][c] = false;
                return false;
            }

            const moves = [
                [0, -1],
                [-1, 0],
                [1, 0],
                [0, 1],
            ];

            for (let [dr, dc] of moves) {
                if (backtrack(r + dr, c + dc, curWord)) {
                    return true;
                }
            }

            visisted[r][c] = false;

            return false;
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (backtrack(r, c, "")) {
                    return true;
                }
            }
        }

        return false;
    }
}
