class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `${this.name} says hello!`;
    }

    visit(otherPerson) {
        return `${this.name} visits ${otherPerson.name}`
    }
}

module.exports = { Person };
