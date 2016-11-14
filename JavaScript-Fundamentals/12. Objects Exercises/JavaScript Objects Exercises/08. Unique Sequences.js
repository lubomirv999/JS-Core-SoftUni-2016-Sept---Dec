function uniqueSequences(input) {
    let sort = (arrA, arrB, map) => map.get(arrA) - map.get(arrB);
    let arrays = new Map;

    for (let line of input) {
        let array = JSON.parse(line).map(Number).sort((a, b) => b - a);
        let toStore = `[${array.join(', ')}]`;
        if (!arrays.has(toStore))
            arrays.set(toStore, array.length);
    }
    console.log([...arrays.keys()].sort((a, b) => sort(a, b, arrays)).join('\n'));
}