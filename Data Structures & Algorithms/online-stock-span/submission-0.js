class StockSpanner {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let count = 0;

        while (this.stack.length && price >= this.stack[this.stack.length - 1][0]) {
            const lastStock = this.stack.pop();
            count += lastStock[1];
        }

        this.stack.push([price, count + 1]);
        return count + 1;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
