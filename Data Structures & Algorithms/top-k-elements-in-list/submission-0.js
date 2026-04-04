class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        const freqs = Array.from({length: nums.length + 1}, () => []);

        for(const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }
        for(const [num, freq] of Object.entries(count)) {
            freqs[freq].push(parseInt(num));
        }

        const res = [];
        for(let i = freqs.length - 1; i > 0; i--) {
            for(const n of freqs[i]) {
                res.push(n);
            }
            if(res.length === k) return res;
        }

        return [];
    }
}
