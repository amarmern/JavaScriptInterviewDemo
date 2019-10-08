// let letters = ["r", "e", "d", "u", "x"];

// var word = letters.reduce((acc, item) => {
//   return acc + item;
// });

// console.log(word);

//var array = ["1", "2", "3", "4", "5"];
var array = [1, 2, 3, 4, 5];

var numbers = array.reduce((acc, item) => {
  return acc + item;
});
console.log(numbers);


var a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

var a = a.reduce((acc, curr) => {
  if (typeof acc[curr] == 'undefined') {
    acc[curr] = 1;
  }
  else {
    acc[curr] += 1;
  }
  return acc;
}, {})

console.log(a);


