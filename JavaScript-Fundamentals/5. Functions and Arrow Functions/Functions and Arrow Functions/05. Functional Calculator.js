function calc([a, b, sign]) {
    a = Number(a);
    b = Number(b);
    let result;

    if (sign == "+")
        result = a + b;
    else if (sign == "-")
        result = a - b;
    else if (sign == "/")
        result = a / b;
    else
        result = a * b;

    console.log(result);
}

//function calculate([a, b, op]) {
//    [a, b] = [a, b].map(Number);
//    let calc = function(a, b, op) { return op(a, b) };
//    let add = function(a, b) { return a + b };
//    let subtract = function(a, b) { return a - b };
//    let multiply = function(a, b) { return a * b };
//    let divide = function(a, b) { return a / b };
//    
//    switch (op) {
//        case '+': return calc(a, b, add);
//        case '-': return calc(a, b, subtract);
//        case '*': return calc(a, b, multiply);
//        case '/': return calc(a, b, divide);
//    }
//}
