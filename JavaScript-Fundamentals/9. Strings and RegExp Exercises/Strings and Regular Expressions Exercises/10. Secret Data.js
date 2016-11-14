function secretData(input) {
    let usernamePattern = /(\*[A-Z][a-zA-Z]*?)( |\t|$)/g;
    let phonePattern = /(\+[0-9-]{10})( |\t|$)/g;
    let idPattern = /(![0-9a-zA-Z]+)( |\t|$)/g;
    let secretBasesPattern = /(_[0-9a-zA-Z]+)( |\t|$)/g;

    for (let i = 0; i < input.length; i++) {
        let usernameMatch = usernamePattern.exec(input[i]);
        while (usernameMatch) {
            input[i] = input[i].replace(usernameMatch[1], '|'.repeat(usernameMatch[1].length));
            usernameMatch = usernamePattern.exec(input[i]);
        }

        let phoneMatch = phonePattern.exec(input[i]);
        while (phoneMatch) {
            input[i] = input[i].replace(phoneMatch[1], '|'.repeat(phoneMatch[1].length));
            phoneMatch = phonePattern.exec(input[i]);
        }

        let idMatch = idPattern.exec(input[i]);
        while (idMatch) {
            input[i] = input[i].replace(idMatch[1], '|'.repeat(idMatch[1].length));
            idMatch = idPattern.exec(input[i])
        }

        let secretBasesMatch = secretBasesPattern.exec(input[i]);
        while (secretBasesMatch) {
            input[i] = input[i].replace(secretBasesMatch[1], '|'.repeat(secretBasesMatch[1].length));
            secretBasesMatch = secretBasesPattern.exec(input[i])
        }
    }

    for (let i = 0; i < input.length; i++) {
        console.log(input[i])
    }
}

function secretData(input) {
    let f = input.forEach(l => console.log(l.replace
    (/(\*[A-Z][a-zA-Z]*)(?= |\t|$)|(\+[0-9-]{10})(?= |\t|$)|(![0-9a-zA-Z]+)(?= |\t|$)|(_[0-9a-zA-Z]+)(?= |\t|$)/g,
        (m) => '|'.repeat(m.length))));
}
