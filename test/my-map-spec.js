const chai = require('chai');
const { interface } = require('chai-spies');
const expect = chai.expect
const spies = require("chai-spies");
chai.use(spies);

let { myMap } = require('../problems/my-map.js')

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

    it("should not call Array.map", () => {
        //Arrange
        let myMapSpy = chai.spy.on(Array.prototype, "map");
        let array = [1, 2, 3];
        let cb = (num) => {
            return num * 2
        }
        //Act
        myMap(array, cb);

        //Assert
        expect(myMapSpy).to.have.not.been.called();


    });

    it("should call cb on each element", () => {
        //Arrange
        let array = [1, 2, 3];
        let cb = (num) => {
            return num * 2
        }

        let cbSpy = chai.spy.on(array, "cb")

        //Act
        // console.log(cb);
        // console.log(cbSpy)

        myMap(array, cbSpy);
        //Assert
        
        expect(cbSpy).to.have.been.called.exactly(3);


    })
})
