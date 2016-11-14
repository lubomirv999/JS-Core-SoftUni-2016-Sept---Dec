function expressionSplit(input) {
    let text = String(input[0]);
    let result = text.split(/[\s.();,]+/).filter(each => each != '');

    console.log(result.join("\n"));
}

