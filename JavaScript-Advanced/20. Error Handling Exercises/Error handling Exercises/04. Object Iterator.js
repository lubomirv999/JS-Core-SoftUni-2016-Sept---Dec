function objectIterator(obj) {
    let result = [];
    
    for (let name in obj) {
        result.push(name + '');
    }

    result = result.sort();
    let index = result.length-1;

    return {
        [Symbol.iterator]: function() { return this; },
        ['next']: function() {
            if (index >= 0)
                return {
                    value: result[index--],
                    done: false
                };
            else
                return {
                    done: true
                };
        }
    }
}