class TrieNode {
    constructor() {
        this.children = Array(26).fill(null);
        this.word = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    getIndex(c) {
        return c.charCodeAt(0) - "a".charCodeAt(0);
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this.root;
        for (const c of word) {
            const idx = this.getIndex(c);
            if (cur.children[idx] === null) {
                cur.children[idx] = new TrieNode();
            }
            cur = cur.children[idx];
        }
        cur.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(this.root, word, 0);
    }

    dfs(node, word, idx) {
        if (idx === word.length) {
            return node.word;
        }

        if (word[idx] !== ".") {
            let j = this.getIndex(word[idx]);
            if (!node.children[j]) {
                return false;
            } else {
                return this.dfs(node.children[j], word, idx + 1);
            }
        } else {
            for (let j = 0; j < 26; j++) {
                if (node.children[j] && this.dfs(node.children[j], word, idx + 1)) {
                    return true;
                }
            }
            return false;
        }
    }
}
