function endsWith(input) {
    let full = input[0].split('').reverse().join('');
    let substring = input[1].split('').reverse().join('');

    let result = full.indexOf(substring);
    if(result == 0)
        console.log('true');
    else
        console.log('false');
}

