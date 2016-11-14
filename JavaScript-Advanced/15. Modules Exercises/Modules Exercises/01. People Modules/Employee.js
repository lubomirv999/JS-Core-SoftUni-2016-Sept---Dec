class Employee {
    constructor(name, age) {
        if (new.target === Employee) {
            throw new Error("Cannot instantiate directly");
        }
        this.name = name;
        this.age = Number(age);
        this.salary = 0;
        this.tasks = [];
    }

    work() {
        let currentTask = this.tasks.shift();
        console.log(this.name + currentTask);
        this.tasks.push(currentTask);
    }

    collectSalary() {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }

    getSalary(){
        return this.salary;
    }
}

module.exports =  Employee;