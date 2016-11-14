function countOccurences([string,text]) {
    let count = 0;
    let n = -1;

    while (true) {
        n = text.indexOf(string, n + 1);
        if (n == -1)
            return count;
        count++;
    }
}
