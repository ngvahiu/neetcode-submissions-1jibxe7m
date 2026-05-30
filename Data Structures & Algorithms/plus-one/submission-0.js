class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let temp = 1;

        for (let i = digits.length - 1; i >= 0; i--) {
            const newDigit = digits[i] + temp;

            digits[i] = newDigit % 10;
            if (newDigit > 9) {
                temp = 1;
            } else {
                temp = 0;
            }
        }

        if(temp > 0) {
            digits.unshift(temp);
        }

        return digits;
    }
}
