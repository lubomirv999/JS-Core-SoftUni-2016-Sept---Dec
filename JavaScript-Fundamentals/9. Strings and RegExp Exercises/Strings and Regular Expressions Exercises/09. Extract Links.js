function extractLinks(input) {
    let regex = /www\.[a-zA-Z0-9-]+?\.[a-z]+([.]{1}[a-z]+)*/g;
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let match = input[i].match(regex);

        if (match) {
            if (result.indexOf(match[0]) === -1) {
                result.push(match[0])
            }
        }
    }
    console.log(result.join('\n'))
}