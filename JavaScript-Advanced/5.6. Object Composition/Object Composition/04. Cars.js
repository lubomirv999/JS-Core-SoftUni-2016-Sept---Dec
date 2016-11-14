function cars(commands) {
    let cmdInterpreter = (function () {
        let cars = new Map;

        function create(newObjName, token, protoName) {
            if (token == null) {
                cars.set(newObjName, {});
                return;
            }
            cars.set(newObjName, Object.create(cars.get(protoName)));
        }

        function set(objName, propName, propVal) {
            cars.get(objName)[propName] = propVal;
        }

        function print(objName) {
            let obj = cars.get(objName);
            let objKeys = Object.keys(cars.get(objName))
                .map(k => `${k}:${cars.get(objName)[k]}`);

            let proto = obj;
            while (proto = Object.getPrototypeOf(proto)) {
                let o =Object.keys(proto).map(k => `${k}:${proto[k]}`);
                objKeys = objKeys.concat(o)
            }
            console.log(objKeys.join(', '));
        }
        return {create, set, print};
    })();

    for (let cmd of commands) {
        let tokens = cmd.split(/\s+/);
        let cmdName = tokens.shift();
        cmdInterpreter[cmdName](...tokens);
    }
}

