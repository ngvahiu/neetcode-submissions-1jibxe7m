class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        if (num1 === "0" || num2 === "0") return "0";

        const res = new Array(num1.length + num2.length).fill(0);
        num1 = num1.split("").reverse().join("");
        num2 = num2.split("").reverse().join("");

        for (let i = 0; i < num1.length; i++) {
            for (let j = 0; j < num2.length; j++) {
                const prod = parseInt(num1[i]) * parseInt(num2[j]);

                res[i + j] += prod;
                res[i + j + 1] += Math.floor(res[i + j] / 10);
                res[i + j] %= 10;
            }
        }

        let result = "";
        let i = res.length - 1;

        // remove 0's leading
        while (i >= 0 && res[i] === 0) {
            i--;
        }

        while (i >= 0) {
            result += res[i--];
        }
        return result;
    }
}
