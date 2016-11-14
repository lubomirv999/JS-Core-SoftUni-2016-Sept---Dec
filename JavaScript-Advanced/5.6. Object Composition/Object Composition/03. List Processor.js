function processCommands(commands) {
    let commandProcessors = (function() {
        let result = [];

        return {
            add: (newItem) => result.push(newItem),
            remove: (item) => result = result.filter(x => x != item),
            print: () => console.log(result)
        }
    })();

    let commandProcessor = (function(){commandProcessors})();
    for (let command of commands) {
        let [cmdName, arg] = command.split(' ');
        commandProcessors[cmdName](arg);
    }
}

