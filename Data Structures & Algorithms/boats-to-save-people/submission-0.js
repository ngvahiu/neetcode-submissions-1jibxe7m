class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);
        let l = 0,
            r = people.length - 1;
        let count = 0;

        while (l < r) {
            const total = people[l] + people[r];
            if (total > limit) {
                count++;
                r--;
            } else {
                count++;
                l++;
                r--;
            }
        }

        if (l === r) count++;

        return count;
    }
}
