class RandomizedSet {
    constructor() {
        this.list = [];
        this.map = new Map();
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if (this.map.has(val)) {
            return false;
        }

        this.list.push(val);
        this.map.set(val, this.list.length - 1);
        return true;
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        if (!this.map.has(val)) {
            return false;
        }

        const idx = this.map.get(val);
        const last = this.list[this.list.length - 1];

        // replace the value at idx by the last value
        this.list[idx] = last;
        this.map.set(last, idx);

        // remove last val
        this.list.pop();
        this.map.delete(val);

        return true;
    }

    /**
     * @return {number}
     */
    getRandom() {
        const idx = Math.floor(Math.random() * this.list.length);
        return this.list[idx];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
