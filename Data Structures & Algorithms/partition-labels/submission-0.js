class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const lastIdxMap = {};
        for (let i = 0; i < S.length; i++) {
            lastIdxMap[S[i]] = i;
        }

        const res = [];
        for (let i = 0; i < S.length; i++) {
            let end = lastIdxMap[S[i]];
            const s = new Set([S[i]]);
            let count = 0;

            for (let j = i; j <= end; j++) {
                if (!s.has(S[j])) {
                    s.add(S[j]);
                    end = Math.max(end, lastIdxMap[S[j]]);
                }

                count++;
            }

            res.push(count);
            i = end;
        }

        return res;
    }
}
