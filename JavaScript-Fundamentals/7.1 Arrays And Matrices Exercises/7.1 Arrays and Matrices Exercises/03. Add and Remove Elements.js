function addRemoveElements(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'add') {
            result.push(i + 1)
        }
        if (input[i] == 'remove') {
            result.pop()
        }
    }

    if (result.length == 0) {
        console.log('Empty');
    } else {
        for (let j = 0; j < result.length; j++)
        {
            console.log(result[j]);
        }
    }
}

addRemoveElements(['add', 'add', 'add', 'add']);