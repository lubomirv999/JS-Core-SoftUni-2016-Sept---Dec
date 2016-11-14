function* fibonacci() {
    let prev = 1;
    let next = 1;

    yield 1;
    yield 1;

    while(true){
        let temp = next;
        next += prev;
        prev = temp;
        yield next;
    }
}