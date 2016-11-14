function extractText(input) {
    let str = String(input[0]);
    let print = [];

    while(true){
        let start = str.indexOf('(');
        let end = str.indexOf(')', start);
        var textToGet = str.substr(start + 1, end - start - 1);

        if(textToGet.length == 0){
            break
        }
        let removed = str.substr(0, end + 1);
        str = str.replace(removed, '');
        print.push(textToGet);
    }
    print = print.join(', ');
    console.log(print);
}

