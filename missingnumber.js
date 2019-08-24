var numbers = [0, 1, 3, 4, 5, 7, 8]; // Missing 2,6
var missing = [];

// Find the missing array items
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i + 1] - numbers[i] > 1) {
    missing.push(numbers[i + 1] - numbers[1]);
  }
}

var intArray = [9, 1, 5, 8, 7, 4, 3, 0, 10, 13, 15, 19, 12, 16, 18]; // Missing 2,6,11,14,17
var arrayLength = Math.max.apply(Math, intArray);
var missing = [];

for (var i = 0; i < arrayLength; i++) {
  if (intArray.indexOf(i) < 0) {
    missing.push(i);
  }
}

console.log(missing);

var numbers = [9, 1, 5, 8, 7, 4, 3, 0, 10, 13, 15, 19, 12, 16, 18]; // Missing  Missing 2,6,11,14,17
var numbers = numbers.sort((a, b) => a - b);
var missing = [];

// Find the missing array items
// for ( var i = 0; i < numbers.length; i++ ) {

//     if ( (numbers[i+1] - numbers[i]) > 1 ) {
//         missing.push( numbers[i+1] - numbers[1] );
//     }
// }
