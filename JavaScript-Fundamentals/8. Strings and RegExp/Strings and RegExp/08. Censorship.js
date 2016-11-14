function censorship(input) {
    let message = input[0];

    for (let i = 1; i < input.length; i++) {
        let replace = input[i];
        message = message.split(replace).join('-'.repeat(replace.length));
    }
    console.log(message);
}

