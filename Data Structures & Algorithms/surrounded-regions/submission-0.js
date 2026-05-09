class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let ROWS = board.length,
            COLS = board[0].length;
        let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        // to capture un-surrounded regions
        function capture() {
            const q = new Queue();

            for (let r = 0; r < ROWS; r++) {
                for (let c = 0; c < COLS; c++) {
                    if (
                        (r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1) &&
                        board[r][c] === "O"
                    ) {
                        q.push([r, c]);
                    }
                }
            }

            while (!q.isEmpty()) {
                const [r, c] = q.pop();
                board[r][c] = "T";

                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc] === "O") {
                        q.push([nr, nc]);
                    }
                }
            }
        }

        capture();
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === "O") {
                    board[r][c] = "X";
                } else if (board[r][c] === "T") {
                    board[r][c] = "O";
                }
            }
        }
    }
}
