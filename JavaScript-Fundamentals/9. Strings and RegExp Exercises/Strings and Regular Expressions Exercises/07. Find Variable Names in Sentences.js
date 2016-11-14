function findVariableNamesInSentences(input) {
    let result = [];
    let pattern = '\\b_([a-zA-Z0-9]+)\\b';
    let regEx = new RegExp(pattern, 'g');
    let match = regEx.exec(input);
    while(match){
        result.push(match[1]);
        match = regEx.exec(input);
    }
    console.log(result.join(','));
}