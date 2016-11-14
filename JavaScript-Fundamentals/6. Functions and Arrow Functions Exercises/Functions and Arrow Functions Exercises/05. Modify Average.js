function modifyAverage(input) {

    let string = String(input[0]);

    var sumOfDigits = input.map(function (num) {
        return num.toString().split('').reduce(function (prev, current) {
            return parseInt(prev, 10) + parseInt(current, 10);
        }, 0);
    });

    if ((sumOfDigits / input[0].length) > 5) {
        console.log(input[0]);
    } else {
        for (i = 0; i < 20; i++) {
            string += 9;

            var curentNumberSum = string.split('').reduce(function (prev, current) {
                return parseInt(prev, 10) + parseInt(current, 10);
            }, 0);

            if (curentNumberSum / string.length > 5) {
                console.log(string);
                break
            }
        }
    }
}
