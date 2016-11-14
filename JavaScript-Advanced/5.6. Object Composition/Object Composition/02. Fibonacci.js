function fibonacci(n) {
    let fib = (() => {
        let f0 = 0, f1 = 1;
        return () => {
            let oldf0 = f0, oldf1 = f1;
            f0 = oldf1;
            f1 = oldf0 + oldf1;
            return oldf1;
        }
    })();

    let fibonacciNumbers = [];

    for (let i = 1; i <= n; i++){
        fibonacciNumbers.push(fib());
    }
    console.log(fibonacciNumbers);
    return fibonacciNumbers;
}