function aggreggates(arr) {
    let sum = reduce(arr, (a, b) => Number(a) + Number(b));
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    let product = reduce(arr, (a, b) => Number(a) * Number(b));
    let join = reduce(arr, (a, b) => '' + a + b);

    function reduce(arr, func) {
        let result = arr[0];
        for (let nextElement of arr.slice(1))
            result = func(result, nextElement);
        return result;
    }
}
