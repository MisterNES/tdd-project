const chai = require("chai");
const { interface } = require("chai-spies");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const { returnsThree, reciprocal } = require("../problems/number-fun.js");

describe("returnsThree()", () => {
  it("should return the number 3", () => {
    //Arrange
    let expected = 3;

    //Act
    let result = returnsThree();

    //Assert
    expect(result).to.equal(expected);
  });
});

describe("reciprocal(num)", () => {
  context("if given a valid number", () => {
    it("should return the reciprocal of num", () => {
      //Arrange
        let num = 3;
        let num2 = 1/3;
        let expected = 1 / 3;
        let expected2 = 3;

      //Act
        let result = reciprocal(num);
        let result2 = reciprocal(num2);
      //Assert

      expect(result).to.equal(expected);
      expect(result2).to.equal(expected2);

    });
  });

  context("if given an invalid number", () => {
    it("should throw a TypeError", () => {
      //Arrange
      let num = -1

      //Act
     // let result = reciprocal(num);

      //Assert
      expect(() => reciprocal(-1)).to.throw(TypeError);


    })
  })


});
