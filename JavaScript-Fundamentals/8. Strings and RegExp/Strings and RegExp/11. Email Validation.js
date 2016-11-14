function emailValidation(input) {
    let result = String(input);
    let pattern = /^[a-zA-Z0-9]+\@[a-z]+\.[a-z]+$/g;

    result = pattern.test(input);

    if(result){
        console.log('Valid');
    } else {
        console.log('Invalid');
    }
}
