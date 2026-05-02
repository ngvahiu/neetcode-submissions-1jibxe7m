class MedianFinder {
    constructor() {
        this.smallHeap = new PriorityQueue((a, b) => b - a);
        this.largeHeap = new PriorityQueue((a, b) => a - b);
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.largeHeap.isEmpty() || num > this.largeHeap.front()) {
            this.largeHeap.enqueue(num);
        } else {
            this.smallHeap.enqueue(num);
        }

        if (this.largeHeap.size() > this.smallHeap.size() + 1) {
            const front = this.largeHeap.dequeue();
            this.smallHeap.enqueue(front);
        } else if (this.smallHeap.size() > this.largeHeap.size()) {
            const front = this.smallHeap.dequeue();
            this.largeHeap.enqueue(front);
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.largeHeap.size() > this.smallHeap.size()) {
            return this.largeHeap.front();
        } else {
            return (this.largeHeap.front() + this.smallHeap.front()) / 2.0;
        }
    }
}
