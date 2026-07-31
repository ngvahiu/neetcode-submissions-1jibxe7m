class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const total = nums1.length + nums2.length;
        const half = Math.floor((total + 1) / 2);
        let A = nums1, B = nums2;

        if (B.length < A.length) {
            [A, B] = [B, A];
        }

        let l = 0, r = A.length - 1;
        while (true) {
            const i = Math.floor((l + r) / 2);
            const j = half - (i + 1) - 1;

            let Aleft = i >= 0 ? A[i] : -Infinity;
            let Aright = i + 1 < A.length ? A[i + 1] : Infinity;
            let Bleft = j >= 0 ? B[j] : -Infinity;
            let Bright = j + 1 < B.length ? B[j + 1] : Infinity;

            if (Aleft > Bright) {
                r = i - 1;
                continue;
            } else if (Bleft > Aright) {
                l = i + 1;
                continue;
            }

            if (total % 2) {
                return Math.max(Aleft, Bleft); 
            } else {
                return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
            }
        }
    }
}
