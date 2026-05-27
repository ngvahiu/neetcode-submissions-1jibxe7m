class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

        const res = [];
        let curInterval = intervals[0];

        for (let i = 0; i < intervals.length; i++) {
            if (curInterval[1] < intervals[i][0]) {
                res.push(curInterval);
                curInterval = intervals[i];
            } else {
                curInterval[1] = Math.max(curInterval[1], intervals[i][1]);
            }
        }

        res.push(curInterval);
        return res;
    }
}
