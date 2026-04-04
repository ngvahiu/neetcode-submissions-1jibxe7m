class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let rightMax = -1;

        for(let i = arr.length - 1; i >= 0; i--) {
            let num = arr[i];
            arr[i] = rightMax;
            rightMax = Math.max(num, rightMax)
        }

        return arr;
    }
}
