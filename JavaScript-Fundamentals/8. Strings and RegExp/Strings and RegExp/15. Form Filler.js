function formFiller (input) {
    let user = input.shift();
    let email = input.shift();
    let num = input.shift();

    let result = input;

    result.forEach(line => {
        let userName = new RegExp('\<\\![a-zA-Z]+\\!\>', 'g');
        let emailReg = new RegExp('\<\\@[a-zA-Z]+\\@\>', 'g');
        let numberReg = new RegExp('\<\\+[a-zA-Z]+\\+\>', 'g');

        line = line.replace(userName, user);
        line = line.replace(emailReg, email);
        line = line.replace(numberReg, num);

        console.log(line);
    });
}
