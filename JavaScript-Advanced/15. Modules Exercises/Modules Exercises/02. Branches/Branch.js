let Employee = require('./Employee');

class Branch{
    constructor(id, branchName, companyName){
        this.id = id;
        this.branchName = branchName;
        this.companyName = companyName;

        this._employees = [];
    }

    get employees(){
        return this._employees;
    }

    hire(employee){
        this._employees.push(employee);
    }

    toString() {
        let result = `@ ${this.companyName}, ${this.branchName}, ${this.id}\n`;
        result += 'Employed:\n';
        if (this._employees.length == 0) {
            result += 'None…';
        } else {
            for (let employee of this.employees) {
                result += `** ${employee}\n`;
            }
        }
        return result.trim();
    }
}

module.exports = Branch;