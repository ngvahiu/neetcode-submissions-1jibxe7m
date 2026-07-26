class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const stack = [];
        const str = path.split("/");

        for (let i = 0; i < str.length; i++) {
            if (str[i] === "" || str[i] === ".") continue;
            else if (str[i] === "..") {
                stack.pop();
            } else {
                stack.push(str[i]);
            }
        }

        return "/" + stack.join("/");
    }
}
