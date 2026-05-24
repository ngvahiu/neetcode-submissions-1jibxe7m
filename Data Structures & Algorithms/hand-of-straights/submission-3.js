class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;
        const freq = {};

        for (let h of hand) {
            freq[h] = (freq[h] || 0) + 1;
        }

        hand.sort((a, b) => a - b);
        let numsOfGroups = hand.length / groupSize;
        for (let h of hand) {
            if (freq[h] === 0) continue;

            for (let i = h; i <= h + groupSize - 1; i++) {
                if (!(i in freq) || freq[i] === 0) return false;
                freq[i]--;
            }

            numsOfGroups--;
            if (numsOfGroups === 0) return true;
        }

        return false;
    }
}
