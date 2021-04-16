class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `${this.name} says hello!`;
    }
}

module.exports = { Person };
