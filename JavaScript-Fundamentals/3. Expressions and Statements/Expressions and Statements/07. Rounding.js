function round([a, b]) {
    a = Number(a);
    b = Number(b);

    let denominator = Math.pow(10, b);
    let second = Math.round(a * denominator) / denominator;
    console.log(second);
}
