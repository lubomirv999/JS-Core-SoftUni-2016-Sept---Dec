function systemComponents(input) {
    let storage = new Map();

    for (let row of input){
        let [system, component, subcomponent] = row.split(/\s*\|\s*/g);
        if (!storage.has(system)){
            storage.set(system, new Map());
            storage.get(system).set(component,[]);
            storage.get(system).get(component).push(subcomponent);
        } else if (!storage.get(system).has(component)){
            storage.get(system).set(component,[]);
            storage.get(system).get(component).push(subcomponent);
        } else {
            storage.get(system).get(component).push(subcomponent);
        }
    }

    let sortedMap = [...storage].sort((a,b) => {
        let result = b[1].size - a[1].size;
        if (result==0){
            result = a[0].localeCompare(b[0]);
        }
        return result;
    });
    
    for (let [key, value] of sortedMap){
        console.log(key);
        let sortedComponents = [...value].sort((a,b) => b[1].length - a[1].length);
        for (let [k,v] of sortedComponents){
            console.log(`|||${k}`);
            for (let subcomp of v){
                console.log(`||||||${subcomp}`)
            }
        }
    }
}