const chai = require('chai');
const { interface } = require('chai-spies');
const expect = chai.expect
const spies = require("chai-spies");
chai.use(spies);

const { reverseString } = require('../problems/reverse-string.js')




describe("reverseString(string)", () => {

  it('should reverse the string input', function () {
      //Arrange
    let string = 'fun';
    let expected = "nuf"

     //Act
    let result = reverseString(string);

     //Assert
    expect(result).to.eql(expected);

  })
  it("should throw an error if argument is not a string", () => {

    expect(() => reverseString(1)).to.throw(TypeError);
  })
















})
