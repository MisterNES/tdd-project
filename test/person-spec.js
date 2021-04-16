const chai = require("chai");
const { interface } = require("chai-spies");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const { Person } = require('../problems/person.js');

describe("Person class", () => {
    let nate;
    let sarah;

    beforeEach("set up a Person instance", () => {
        nate = new Person("Nate", 39);
        sarah = new Person("Sarah", 35);

    });

    describe("Person constructor()", () => {
        it("should have name and age property", () => {
            expect(nate).to.have.property("name");
            expect(nate).to.have.property("age");
        })

        it("should set name and age property when new Person is created", () => {
            expect(nate.name).to.equal("Nate");
            expect(nate.age).to.equal(39);
        })
    })

    describe("sayHello()", () => {
        it("should return a greeting string using a Person.name", () => {
            //Arrange
            let string = `${nate.name} says hello!`;

            //Act
            let result = nate.sayHello();

            //Assert
            expect(result).to.equal(string);
        })
    })

    describe("visit(otherPerson)", () => {
        it("should return a string stating visit to another Person", () => {
            //Arrange
            let string = `${nate.name} visits ${sarah.name}`;

            //Act
            let result = nate.visit(sarah);
            //Assert
            expect(result).to.equal(string);
        });
    });

    describe("switchVisit()", () => {
        it("should return a string stating other Person's visit", () => {
            //Arrange
            

        })


    })

})
