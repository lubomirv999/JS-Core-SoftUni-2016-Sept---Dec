function countsWordsWithMaps(input) {
    let text = input.join('\n').toLowerCase();
    let regex = /[^A-Za-z0-9_]+/;  
    let words = text.split(regex).filter(word => word != ''); 
    let wordsCount = new Map();

    for (let word of words) {
        if (wordsCount.has(word)) {
            wordsCount.set(word, wordsCount.get(word) + 1)
        } else {
            wordsCount.set(word, 1)
        }
    }
    let result = Array.from(wordsCount.keys()).sort();
    result.forEach(w=>console.log("\'" + w + "\'" + " -> " + wordsCount.get(w) + ' times'))
}

