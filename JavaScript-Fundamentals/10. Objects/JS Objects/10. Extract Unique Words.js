function extractWords(inputSentences) {
    let wordPattern = /\b[a-zA-Z]+\b/g;
    let words = new Set();
    for (let sentence of inputSentences) {
        let matches = sentence.match(wordPattern);
        matches.forEach(x=>words.add(x.toLowerCase()));
    }
    console.log([...words.values()].join(", "));
}
