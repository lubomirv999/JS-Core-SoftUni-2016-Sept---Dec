function usernames(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let email = input[i].split('@');
        let dots = email[1].split('.');
        let str = '';

        for (let j = 0; j < dots.length; j++) {
            let fChar = dots[j];
            str += fChar[0];
        }
        result.push(email[0] + '.' + str);
    }
    console.log(result.join(', '));
}