function* randomGenerator(seed) {
    let module = 4871 * 7919;
    let num = seed;
    
    while (true) {
        num = (num * num) % module;
        yield num % 100;
    }
}