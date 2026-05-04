class Solution {
    exist(board, word) {
        const ROWS = board.length;
        const COLS = board[0].length;

        function backtrack(r, c, i) {
            if (i === word.length) return true;

            if (
                r < 0 || r >= ROWS ||
                c < 0 || c >= COLS ||
                board[r][c] !== word[i]
            ) {
                return false;
            }

            const temp = board[r][c];
            board[r][c] = '#'; // mark visited

            const found =
                backtrack(r + 1, c, i + 1) ||
                backtrack(r - 1, c, i + 1) ||
                backtrack(r, c + 1, i + 1) ||
                backtrack(r, c - 1, i + 1);

            board[r][c] = temp; // restore

            return found;
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (backtrack(r, c, 0)) return true;
            }
        }

        return false;
    }
}
