function countWordsInText(input) {
    let text = input.join(' ');
    let regex=/[^A-Za-z0-9_]+/;
    let words = text.split(regex).filter(word => word != '');
    let wordsCount = {};

    for (let word of words)
        wordsCount[word] ? wordsCount[word]++ :
            wordsCount[word] = 1;

    return JSON.stringify(wordsCount);
}

