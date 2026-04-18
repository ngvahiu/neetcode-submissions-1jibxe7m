class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.keyStore.get(key) || [];
        let l = 0, r = values.length - 1;
        let res = '';

        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);

            if (values[m][1] <= timestamp) {
                res = values[m][0];
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return res;
    }
}
