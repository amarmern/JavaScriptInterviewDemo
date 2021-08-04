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
  if (intArray.indexOf(++i) < 0) {
    missing.push(i);
  }
}

console.log(missing);
const findMissing = num => {
  const max = Math.max(...num); // Will find highest number
  const min = Math.min(...num); // Will find lowest number
  const missing = []

  for(let i=min; i<= max; i++) {
    if(!num.includes(i)) { // Checking whether i(current value) present in num(argument)
      missing.push(i); // Adding numbers which are not in num(argument) array
    }
  }
  return missing;
}


var arr = [1,  3, 5, 6,  8];
console.log(findMissing(arr));

const myFunc = (arr) => {
  const sum = ((arr.length + 1) * (arr.length + 2)) / 2;
  const arrSum = (arr) => arr.reduce((a, b) => a + b, 0);
  return sum - arrSum(arr);
};
const myArray = [1, 2, 10, 5, 6, 4, 7, 9, 3, 11];
console.log(myFunc(myArray));
