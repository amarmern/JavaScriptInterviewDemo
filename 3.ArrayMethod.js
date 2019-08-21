//Array.concat
var array1 = ["a", "b", "c"];
var array2 = [3, 2, 1];
console.log(array1.concat(array2)); /// --> ["a", "b", "c", 3, 2, 1]
console.log(array1.push(array2)); // --> 4
console.log(array1); //--> ["a", "b", "c", Array(3)]
//copyWithin

//Array entries;
var a = ["a", "b", "c"];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
//every

//fill
//filter

//Search an item in Array
var numbers = [1, 3, 6, 8, 11];

var lucky = numbers.filter(function(number) {
  return number > 7;
});

// [ 8, 11 ]

//A common use case of.filter() is with an array of objects through their properties:

var heroes = [
  { name: "Batman", franchise: "DC" },
  { name: "Ironman", franchise: "Marvel" },
  { name: "Thor", franchise: "Marvel" },
  { name: "Superman", franchise: "DC" }
];

var marvelHeroes = heroes.filter(function(hero) {
  return hero.franchise == "Marvel";
});
// [ {name: “Ironman”, franchise: “Marvel”}, {name: “Thor”, franchise: “Marvel”} ]

//find (finding the first element)
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 }
];

const result = inventory.find(fruit => fruit.name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }

//findIndex Array

var fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex(fruit => fruit === "blueberries");
console.log(index); //3
console.log(fruits[index]); //blueberries

//foreach
//includes
//indexOf
// let we have array a = [1,2,3,1,4,1,2];
// then b=[1,2,3,4]
let a = [1, 2, 3, 1, 4, 1, 2];
let b = [];
for (let i = 0; i < a.length; i++) {
  if (b.indexOf(a[i]) === -1) {
    // if exist 0 otherwise it will be -1
    b.push(a[i]);
  }
}

console.log(b);

//Join in Array
var elements = ["Fire", "Air", "Water"];
console.log(elements.join());
// expected output: "Fire,Air,Water"
console.log(elements.join(""));
// expected output: "FireAirWater"
console.log(elements.join("-"));
// expected output: "Fire-Air-Water"

//Keys()
var array1 = ["a", "b", "c"];
var iterator = array1.keys();

for (let key of iterator) {
  console.log(key); // expected output: 0 1 2
}

//lastIndexOf
//map
var array1 = [1, 4, 9, 16];
//pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1); //[2, 8, 18, 32]

///pop
//push
//reduce
[0, 1, 2, 3, 4].reduce(
  (accumulator, currentValue, currentIndex, array) =>
    accumulator + currentValue,
  0
);
//10
[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
}, 10);
//20
//usecase
var names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

var countedNames = names.reduce(function(acc, curr) {
  if (typeof acc[curr] == "undefined") {
    acc[curr] = 1;
  } else {
    acc[curr] += 1;
  }
  return acc;
}, {});

console.log(countedNames);
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
var a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function(acc, curr) {
  if (typeof acc[curr] == "undefined") {
    acc[curr] = 1;
  } else {
    acc[curr] += 1;
  }

  return acc;
}, {});
console.log(a);
//{2: 5, 4: 1, 5: 3, 9: 1}
//reduceRIght
//reverse
const a = { 0: 1, 1: 2, 2: 3, length: 3 };
console.log(a); // {0: 1, 1: 2, 2: 3, length: 3}
Array.prototype.reverse.call(a); //same syntax for using apply()
console.log(a); // {0: 3, 1: 2, 2: 1, length: 3}

//sort
var months = ["March", "Jan", "Feb", "Dec"];
months.sort(); //["Dec", "Feb", "Jan", "March"]

var numbers = [4, 2, 5, 2, 3];
const sortnumber = numbers.sort((a, b) => a - b);
console.log(sortnumber);

var car = [
  { name: "Volvo", year: 2016 },
  { name: "Saab", year: 2001 },
  { name: "BMW", year: 2010 }
];

var sortCar = car.sort((a, b) => a.year - b.year);
console.log(sortCar);

var sortCarName = car.sort((a, b) => {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(sortCarName);

var items = ["réservé", "premier", "cliché", "communiqué", "café", "adieu"];
var localsort = items.sort(function(a, b) {
  return a.localeCompare(b);
});
console.log(localsort);
//slice
var array1 = [1, 4, 9, 16];
console.log(array1.slice(1, 3)); // [4,9]
console.log(array1.slice(3, 3)); //[]
console.log(array1.slice(3, 0)); //[]
console.log(array1.slice(-3, -1)); //[4,9]
console.log(array1.slice(-1, -1)); //[]

//Remove 0 (zero) elements from index 2, and insert "drum"
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2, 0, "drum");

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed

//Remove 1 element from index 3
var myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]

//Remove 1 element from index 2, and insert "trumpet"Section
var myFish = ["angel", "clown", "drum", "sturgeon"];
var removed = myFish.splice(2, 1, "trumpet");

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]

//Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"Section
var myFish = ["angel", "clown", "trumpet", "sturgeon"];
var removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]

//Remove 2 elements from index 2Section
var myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
var removed = myFish.splice(2, 2);

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]

//Remove 1 element from index -2Section
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(-2, 1);

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]

//Remove all elements after index 2 (incl.)Section
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2);

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]

console.log(Object.prototype.toString.call(myFish));

var obj = { id: 1, name: "Amrendra" };
console.log(Object.prototype.toString.call(obj));

console.log(Array.isArray(obj));
console.log(Array.isArray(myFish));
