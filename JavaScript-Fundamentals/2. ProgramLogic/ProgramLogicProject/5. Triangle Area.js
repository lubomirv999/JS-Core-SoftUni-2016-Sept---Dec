function triangleArea([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number);
    let p = (a + b + c) / 2;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return area;
}