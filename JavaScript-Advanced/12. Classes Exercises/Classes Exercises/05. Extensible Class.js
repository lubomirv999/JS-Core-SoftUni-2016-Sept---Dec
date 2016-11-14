let Extensible = (function () {
    let uniqueID = 0;

    return class Extensible {
        constructor() {
            this.id = uniqueID++;
        }

        extend(otherObj) {
            for (let p in otherObj) {
                if (otherObj.hasOwnProperty(p)) {
                    if (typeof otherObj[p] == 'function') 
                        Extensible.prototype[p] = otherObj[p];
                    else 
                        this[p] = otherObj[p];
                }
            }
        }
    }
})();