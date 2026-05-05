class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (!digits.length) return [];

        const map = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z']
        };
        const res = [];

        function backtrack(idx, combination) {
            if (idx >= digits.length) {
                res.push(combination);
                return;
            }

            const digit = digits[idx];
            const letters = map[digit];
            for (const letter of letters) {
                backtrack(idx + 1, combination + letter);
            }
        }

        backtrack(0, "");
        return res;
    }
}
