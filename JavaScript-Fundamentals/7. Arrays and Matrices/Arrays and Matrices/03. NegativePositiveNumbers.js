function negativePositiveNumbers(input) {
    input = input.map(Number);
    let negativeNumbers = [];
    let positiveNumbers = [];
    let zeroNumbers = [];

    for (let i = 0; i < input.length; i++) {
        if(input[i] < 0){
            negativeNumbers.unshift(input[i]);
        } else if(input[i] > 0){
            positiveNumbers.push(input[i]);
        } else if(input[i] == 0)
            zeroNumbers.push(input[i]);
    }

    negativeNumbers.sort();
    positiveNumbers.sort();

    console.log(negativeNumbers.join('\n'));
    console.log(positiveNumbers.join('\n'));
    console.log(zeroNumbers.join('\n'));
}

//function negativePositiveNumbers(input) {
//    let inputs = input.map(Number);
//    let negative = [];
//    let positive = [];
//
//    for (i = 0; i < input.length; i++) {
//
//        if (inputs[i] < 0) {
//            negative.unshift(Number(input[i]));
//        }
//        else if (inputs[i] >= 0) {
//            positive.push(Number(input[i]));
//        }
//    }
//    console.log(negative.join('\n'));
//    console.log(positive.join('\n'));
//}