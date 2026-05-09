class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const q = new Queue();
        let minutes = 0;
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let fresh = 0;
        const visited = new Set();

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    fresh++;
                } else if (grid[r][c] === 2) {
                    q.push([r, c]);
                    visited.add(`${r}-${c}`);
                }
            }
        }

        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        while (!q.isEmpty() && fresh > 0) {
            minutes++;
            const size = q.size();
            for (let i = 0; i < size; i++) {
                const [r, c] = q.pop();

                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        nr >= 0 &&
                        nr < ROWS &&
                        nc >= 0 &&
                        nc < COLS &&
                        !visited.has(`${nr}-${nc}`) &&
                        grid[nr][nc] === 1
                    ) {
                        visited.add(`${nr}-${nc}`);
                        q.push([nr, nc]);
                        fresh--;
                    }
                }
            }
        }

        return fresh === 0 ? minutes : -1;
    }
}
