(function () {
    String.prototype.isEmpty = function () {
        return this == '';
    };

    String.prototype.ensureStart = function (str) {
        if(this.startsWith(str))return this.toString();
        return str + this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if(this.endsWith(str))return this.toString();
        return this.toString() + str;
    };

    String.prototype.truncate = function (n) {
        if(this.length <= n) return this.toString();

        if(n < 4){
            return '.'.repeat(n);
        }

        if(!this.includes(' ')){
            return this.slice(0, n - 3) + '...';
        }

        let tokens = this.split(' ');
        let result = tokens[0];

        for (let i = 1; i < tokens.length; i++) {
            if(result.length + tokens[i].length + 4 > n){
                return result + '...';
            }
            result += ` ${tokens[i]}`;
        }
    };

    String.format = function (str, ...params) {
        return str.replace(/\{([\d]+)\}/g, function (m, g) {
            if(params[Number(g)] != undefined){
                return params[Number(g)];
            }
            return m;
        });
    };
})();