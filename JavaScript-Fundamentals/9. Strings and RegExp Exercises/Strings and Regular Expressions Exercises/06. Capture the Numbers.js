function captureTheNumbers(input) {
    let inputText = '';
    let nums = [];
    let regex = /\d+/g;

    for (let i = 0; i < input.length; i++) {
        let sentence = input[i];
        inputText += sentence;
    }

    let match = regex.exec(inputText);
    while (match) {
        nums.push(match[0]);
        match = regex.exec(inputText);
    }

    console.log(nums.join(' '));
}
