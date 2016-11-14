function startsWith(input) {
    let full = input[0].toLowerCase();
    let substring = input[1];

    let result = full.indexOf(substring);
    if(result == 0)
        console.log('true');
    else
        console.log('false');
}

