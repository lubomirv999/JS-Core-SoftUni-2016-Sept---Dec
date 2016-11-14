function argumentInfo() {
    let args = {};

    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        args[type] != undefined ? args[type]++ : args[type] = 1;
        
        console.log(`${type}: ${arguments[i]}`);
    }

    let result = [...Object.keys(args)]
        .sort((a, b) => args[b] - args[a])
        .forEach(item => console.log(`${item} = ${args[item]}`));
}