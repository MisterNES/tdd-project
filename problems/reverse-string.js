
function reverseString(string) {

  if (typeof string !== "string") {
    throw new TypeError("Please use a string");
  }
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--){
    newString += string[i];
  }
  return newString;
}


module.exports = {
  reverseString
}
