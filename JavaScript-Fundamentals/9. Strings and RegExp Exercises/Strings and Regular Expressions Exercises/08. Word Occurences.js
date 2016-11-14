function wordOccurence(input) {
    let text = input[0].toLowerCase();
    let word = input[1].toLowerCase();
    let regex = new RegExp('\\b' + word + '\\b', 'g')
    let match = text.match(regex);

    if (match) {
        console.log(match.length)
    } else {
        console.log(0)
    }
}
