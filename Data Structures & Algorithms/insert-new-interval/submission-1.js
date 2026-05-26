class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const res = [];

        let i = 0;
        let inserted = false;
        while (i < intervals.length) {
            if (inserted) {
                res.push(intervals[i]);
                i++;
                continue;
            }

            if (intervals[i][1] < newInterval[0]) {
                res.push(intervals[i]);
                i++;
            } else if (intervals[i][0] > newInterval[1]) {
                res.push(newInterval);
                inserted = true;
            } else {
                newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
                newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
                i++;
            }
        }

        if (!inserted) {
            res.push(newInterval);
        }

        return res;
    }
}
