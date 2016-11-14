function matchTheDates(input) {
    let pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let dates = [], date;

    for (let sentence of input) {
        let date = pattern.exec(sentence);

        while (date) {
            dates.push(date[0]+` (Day: ${date[1]}, Month: ${date[2]}, Year: ${date[3]})`);
            date = pattern.exec(sentence)
        }
    }
    console.log(dates.join(`\n`));
}
