function escaping(input) {
    let str = '<ul>\n';

    for (let i = 0; i < input.length; i++) {
        let change = input[i];

        change = change.split('&').join('&amp;');
        change = change.split('<').join('&lt;');
        change = change.split('>').join('&gt;');
        change = change.split('"').join('&quot;');
        str += '  \<li>' + change + '</li>\n';
    }
    str += '</ul>';
    console.log(str);
}

