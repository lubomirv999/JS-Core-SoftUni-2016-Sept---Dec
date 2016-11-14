function compoundInterest([p, i, n, t]) {
    [p, i, n, t] = [p, i, n, t].map(Number);
    i /= 100;
    let frequency = 12 / n;
    let total = p * Math.pow((1 + i / frequency), frequency * t);

    console.log(total.toFixed(2));
}