class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];
        const path = [];

        function backtrack(i) {
            if (i >= s.length) {
                res.push([...path]);
            }

            for (let j = i; j < s.length; j++) {
                if (isPalin(s, i, j)) {
                    path.push(s.substring(i, j + 1));
                    backtrack(j + 1);
                    path.pop();
                }
            }
        }

        backtrack(0);
        return res;
    }
}

function isPalin(s, i, j) {
    while (i <= j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }

    return true;
}
