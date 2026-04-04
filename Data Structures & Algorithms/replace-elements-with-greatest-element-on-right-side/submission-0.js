class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        if(arr.length === 1) return [-1];
        let rightMax = arr[arr.length - 1];
        arr[arr.length - 1] = -1;

        for(let i = arr.length - 2; i >= 0; i--) {
            let num = arr[i];
            arr[i] = rightMax;
            rightMax = Math.max(num, rightMax)
        }

        return arr;

    }
}
