const chai = require('chai');
const { interface } = require('chai-spies');
const expect = chai.expect
const spies = require("chai-spies");
chai.use(spies);

describe("myMap(arr, cb)", () => {
    it("should return a modified array", () => {
        //Arrange
        let array = [1, 2, 3];
        let cb = (el) => el * 2;
        let expected = [2, 4, 6];

        //Act
        let result = myMap(array, cb);

        //Assert
        expect(result).to.eql(expected);
    })

    it("should not mutate the passed in array arg", () => {
        //Arrange
        let array = [1, 2, 3];
        let cb = (el) => el * 2;
        let expected = [1, 2, 3];

        //Act
        let result = myMap(array, cb);

        //Assert
        expect(array).to.eql(expected);
    })
})
