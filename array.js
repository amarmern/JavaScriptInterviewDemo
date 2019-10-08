//var arr = new Array(1, 2, 3, 4);
var arr = [1, 2, 3, 4, 5];
console.log("array intialization", arr);

console.log("array length", arr.length);

arr.push(6);
console.log("push method", arr);

arr.pop();
console.log("pop method", arr);

arr.unshift(0);
console.log("unshift method", arr);

arr.shift();
console.log("shift method", arr);

//Shorting and Reverse in Array charchter

var fruits = ["Banana", "Orange", "Apple", "Mango"];

var lastindex = fruits[fruits.length - 1];
console.log("last Array element:-->", lastindex);

console.log("before sort", fruits);

console.log("After Sort", fruits.sort());

console.log("Reverse array", fruits.reverse());

var points = [40, 100, 1, 5, 25, 10];

points.sort(function(a, b) {
  return a - b;
});
console.log(points);
var numbers = [9, 100, 346];
console.log("Max using Math", Math.max.apply(null, numbers));
console.log("Min.. using Math", Math.min.apply(null, numbers));

function myArrayMax(arr) {
  var len = arr.length;
  var max = 0;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

myArrayMax(numbers);

function myArrayMax(arr) {
  var len = arr.length;
  var min = 0;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

myArrayMax(numbers);

var cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 }
];

var sortedCar = cars.sort(function(a, b) {
  return a.year - b.year;
});

console.log(sortedCar);

cars.sort(function(a, b) {
  var x = a.type.toLowerCase();
  var y = b.type.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});
