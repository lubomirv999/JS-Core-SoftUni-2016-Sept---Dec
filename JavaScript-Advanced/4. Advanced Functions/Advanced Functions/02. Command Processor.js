function commandProccessor(commands) {
    let command = (function () {
        let result = '';
        
        return {
            append: (t) => result = result + t,
            removeStart: (count) => result = result.slice(count),
            removeEnd: (count) => result = result.slice(0, result.length - count),
            print: function () {console.log(result);}
        };
    })();

    for (let cmd of commands) {
        let [cmdName, arg] = cmd.split(' ');
        command[cmdName](arg);
    }
}

