function quadEquation([a, b, c]) {
    a = Number(a);
    b = Number(b);
    c = Number(c);

    let x1, x2, x;
    let d = (b * b) - (4 * a * c);

    if(d > 0){
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        if(x1 > x2) {
            console.log(x2);
            console.log(x1);
        } else {
            console.log(x1);
            console.log(x2);
        }
    } else if (d == 0){
        x = -b / (2 * a);
        console.log(x);
    } else {
        console.log("No");
    }
}


