let cb = (num) => {
  return num * 2
}

const myMap = (array, cb) => {

  let mapped = [];

  array.forEach(el => {
   let result = cb(el)
    mapped.push(result);

  });

  return mapped;
}

console.log(cb(2));
//console.log(myMap([1,2,3],cb))
module.exports = { myMap };
