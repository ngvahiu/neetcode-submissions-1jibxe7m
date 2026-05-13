class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if (beginWord === endWord || !wordList.includes(endWord)) {
            return 0;
        }

        const neighborMap = new Map();
        wordList.push(beginWord);
        for (let word of wordList) {
            for (let i = 0; i < word.length; i++) {
                const pattern = word.substring(0, i) + "*" + word.substring(i + 1);
                if (!neighborMap.has(pattern)) {
                    neighborMap.set(pattern, new Set());
                }
                neighborMap.get(pattern).add(word);
            }
        }

        const visited = new Set([beginWord]);
        const q = new Queue([beginWord]);
        let res = 1;
        while (!q.isEmpty()) {
            let size = q.size();
            for (let i = 0; i < size; i++) {
                const word = q.pop();
                if (word === endWord) {
                    return res;
                }

                visited.add(word);
                for (let j = 0; j < word.length; j++) {
                    const pattern = word.substring(0, j) + "*" + word.substring(j + 1);
                    for (const w of neighborMap.get(pattern)) {
                        if (!visited.has(w)) {
                            visited.add(w);
                            q.push(w);
                        }
                    }
                }
            }

            res++;
        }

        return 0;
    }
}
