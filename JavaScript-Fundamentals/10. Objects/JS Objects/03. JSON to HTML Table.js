function JSONtoHTMLTable([input]) {
    let arr = JSON.parse(input);
    let html = "<table>\n   <tr>";

    for (let key of Object.keys(arr[0]))
        html += `<th>${key}</th>`

    html += "</tr>\n";

    for (let obj of arr) {
        html += '   <tr>';
        for (let value of Object.keys(obj)) {
            html += '<td>' + htmlEscape(obj[value])+'</td>'
        }
        html+='</tr>\n';
    }
    return html + "</table>";


    function htmlEscape(key) {
        let replaced = key.toString();
        replaced = replaced.split('&').join('&amp;');
        replaced = replaced.split('<').join('&lt;');
        replaced = replaced.split('>').join('&gt;');
        replaced = replaced.split('"').join('&quot;');
        replaced = replaced.split('\'').join('&#39;');

        return replaced;
    }
}

