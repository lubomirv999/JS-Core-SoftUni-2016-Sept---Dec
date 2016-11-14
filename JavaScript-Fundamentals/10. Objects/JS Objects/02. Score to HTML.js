function scoreToHTML(arr) {
    let inputObj = JSON.parse(arr[0]);

    console.log('<table>');
    console.log('  <tr><th>name</th><th>score</th></tr>');
    for (let index in inputObj) {
        let name = htmlEscape(inputObj[index].name);
        let line = `  <tr><td>${name}</td><td>${inputObj[index].score}</td></tr>`;
        console.log(line)
    }
    console.log('</table>');

    function htmlEscape (text) {
        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}