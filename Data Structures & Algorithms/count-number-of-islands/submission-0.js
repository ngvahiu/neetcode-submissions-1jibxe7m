class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        let islands = 0;

        function bfs(r, c) {
            const q = new Queue();
            q.push([r, c]);
            grid[r][c] = "0";

            while (!q.isEmpty()) {
                const [row, col] = q.pop();

                for (let [dr, dc] of directions) {
                    const newR = row + dr;
                    const newC = col + dc;

                    if (
                        newR >= 0 &&
                        newR < ROWS &&
                        newC >= 0 &&
                        newC < COLS &&
                        grid[newR][newC] === "1"
                    ) {
                        q.push([newR, newC]);
                        grid[newR][newC] = "0";
                    }
                }
            }
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === "1") {
                    bfs(r, c);
                    islands++;
                }
            }
        }

        return islands;
    }
}
