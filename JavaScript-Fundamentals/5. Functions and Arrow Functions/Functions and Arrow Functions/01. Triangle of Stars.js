function triangleOfStars(n) {
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));
    }
    for (let i = n-1; i >= 1; i--) {
        console.log('*'.repeat(i));
    }
}

//function printTriangle(n) {
//    function printStars(count) {
//        console.log("*".repeat(count));
//    }
//    for (let i=1; i<=n; i++) printStars(i);
//    for (let i=n-1; i>0; i--) printStars(i);
//}
