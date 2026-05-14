class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        const ticketMap = new Map();
        for (let [dep, des] of tickets) {
            if (!ticketMap.has(dep)) {
                ticketMap.set(dep, []);
            }
            ticketMap.get(dep).push(des);
        }

        // sort list of flights for each key
        for (const [dep, desList] of ticketMap.entries()) {
            desList.sort();
        }

        const res = [];
        function dfs(node) {
            res.push(node);

            // all tickets used
            if (res.length === tickets.length + 1) {
                return true;
            }

            const destinations = ticketMap.get(node) || [];

            for (let i = 0; i < destinations.length; i++) {
                const nextNode = destinations[i];

                if (nextNode !== "") {
                    destinations[i] = "";

                    if (dfs(nextNode)) {
                        return true;
                    }

                    destinations[i] = nextNode;
                }
            }

            res.pop();
            return false;
        }

        dfs("JFK");
        return res;
    }
}
