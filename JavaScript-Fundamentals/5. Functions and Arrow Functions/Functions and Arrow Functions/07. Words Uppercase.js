function wordsUppercase([str]) {
    var strUpper = str.toUpperCase();
    var words = extractWords();
    words = words.filter(w => w != '');
    return words.join(', ');
    function extractWords() { return strUpper.split(/\W+/); }
}

