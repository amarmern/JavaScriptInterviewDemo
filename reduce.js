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


var arr = [[1,2], [3,4], [4,5]]

let flat = arr.reduce((acc,curr) =>[...acc , ...curr])

console.log(flat) // [1,2,3,4]const arr = [10, [20, [30]]];
console.log(arr.flat(1))

const arr1 = [[1,2], [3,4], [4,5]]
console.log(arr1.flat())




