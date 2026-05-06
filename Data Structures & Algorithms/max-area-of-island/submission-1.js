class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        let maxArea = 0;

        function bfs(curArea, r, c) {
            const q = new Queue();
            q.push([r, c]);
            grid[r][c] = 0;

            while (!q.isEmpty()) {
                const [row, col] = q.pop();
                curArea += 1;
                maxArea = Math.max(curArea, maxArea);

                for (let [dr, dc] of directions) {
                    const nr = row + dr;
                    const nc = col + dc;

                    if (
                        nr >= 0 &&
                        nr < ROWS &&
                        nc >= 0 &&
                        nc < COLS &&
                        grid[nr][nc] === 1
                    ) {
                        q.push([nr, nc]);
                        grid[nr][nc] = 0;
                    }
                }
            }
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    bfs(0, r, c);
                }
            }
        }

        return maxArea;
    }
}
