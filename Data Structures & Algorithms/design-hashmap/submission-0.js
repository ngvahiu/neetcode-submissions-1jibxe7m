class ListNode {
    /**
     * @param {number} key
     * @param {number} val
     * @param {ListNode} next
     */
    constructor(key = -1, val = -1, next = null) {
        this.key = key;
        this.val = val;
        this.next = next;
    }
}

class MyHashMap {
    constructor() {
        this.map = Array.from({ length: 1000 }, () => new ListNode());
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let cur = this.map[key % this.map.length];
        while (cur.next) {
            if (cur.next.key === key) {
                cur.next.val = value;
                return;
            }
            cur = cur.next;
        }
        cur.next = new ListNode(key, value);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let cur = this.map[key % this.map.length];
        while (cur) {
            if (cur.key === key) return cur.val;
            cur = cur.next;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let cur = this.map[key % this.map.length];
        while (cur.next) {
            if (cur.next.key === key) {
                cur.next = cur.next.next;
                return;
            }
            cur = cur.next;
        }

        cur = cur.next;
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
