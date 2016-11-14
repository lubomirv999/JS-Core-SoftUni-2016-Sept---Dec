function sortedList() {
    return (function () {
        let result = [];

        function getSize() { // get the size 
            return result.length;
        }

        function add(input) { // add func
            result.push(input);
            reSort(); // resorting after push
        }

        function remove(index) { // remove fund
            if (isValidIndex(index)) {
                result.splice(index, 1);
                reSort();
            } else
                throw new Error; // throw error if not valid index

        }

        function reSort() { // resort func
            result = result.sort((a, b) => a - b); // sorting in descending way
        }

        function isValidIndex(index) { // is valid index func
            return index >= 0 && index < result.length; // check if the index is between 0 and result length

        }

        function get(index) { // get func
            if (isValidIndex(index)) {
                return result[index];
            } else
                throw new Error;

        }

        let x = {add, remove, get};
        x.__defineGetter__("size", getSize);
        return x;
    })();
}