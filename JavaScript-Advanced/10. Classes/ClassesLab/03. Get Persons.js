function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            if(this.firstName != '') this.firstName = firstName;
            if(this.lastName != '') this.lastName = lastName;
            if(this.age != '') this.age = age;
            if(this.email != '') this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    return [
        new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Nikolov', 25),
        new Person('Peter', 'Kolev', 24, 'ptr@gmail.com'),
    ];
}

