/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let starts = intervals.map(interval => interval.start).sort((a, b) => a - b),
            ends = intervals.map(interval => interval.end).sort((a, b) => a - b);
            
        let s = 0,
            e = 0;
        let rooms = 0;
        let maxRooms = 0;

        while (s < starts.length && e < ends.length) {
            if (starts[s] < ends[e]) {
                rooms++;
                s++;
            } else {
                rooms--;
                e++;
            }

            maxRooms = Math.max(maxRooms, rooms);
        }

        return maxRooms;
    }
}
