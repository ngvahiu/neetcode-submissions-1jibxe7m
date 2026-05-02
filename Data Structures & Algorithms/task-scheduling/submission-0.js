class Solution {
    leastInterval(tasks, n) {
        const freq = new Map();
        for (let t of tasks) {
            freq.set(t, (freq.get(t) || 0) + 1);
        }

        const maxHeap = new MaxPriorityQueue((x) => x);

        for (let f of freq.values()) {
            maxHeap.enqueue(f);
        }

        const cooldown = new Queue(); // [remainingFreq, availableTime]

        let time = 0;

        while (maxHeap.size() > 0 || cooldown.size() > 0) {
            time++;

            if (maxHeap.size() > 0) {
                let cur = maxHeap.dequeue();
                cur--;

                if (cur > 0) {
                    cooldown.push([cur, time + n]);
                }
            }

            // 🔥 FIX QUAN TRỌNG
            if (cooldown.size() > 0 && cooldown.front()[1] === time) {
                maxHeap.enqueue(cooldown.pop()[0]);
            }
        }

        return time;
    }
}