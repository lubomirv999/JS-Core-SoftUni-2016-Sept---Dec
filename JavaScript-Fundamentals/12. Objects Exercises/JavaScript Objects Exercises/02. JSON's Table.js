function JSONTable(input) {
    let html = '<table>\n';
    for (let i = 0; i < input.length; i++) {
        let object = JSON.parse(input[i]);
        html += '    <tr>\n';
        html += `        <td>${object.name}</td>\n`;
        html += `        <td>${object.position}</td>\n`;
        html += `        <td>${object.salary}</td>\n`;
        html += '    <tr>\n'
    }
    html += '</table>'
    console.log(html)
}