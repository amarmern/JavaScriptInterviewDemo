
//...swap two number...
a = 1;
b = 2;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b);
[a, b] = [b, a];

console.log(a, b);

function factorialRecurcivefunction(num) {
  if (num == 0 || num == 1) return 1;
  else {
    return num * factorialRecurcivefunction(num - 1);
  }
}

console.log(factorialRecurcivefunction(5));

function factorail(num) {
  let result = num;
  while (num > 1) {
    num--;
    result = result * num;
  }
  console.log(result);
}

factorail(5);

(function fibbnociSeries(num) {
  let fib = [0, 1];
  if (num < 2) return 1;
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib);
})(6);

console.log(sumArray([2, 3, 1, 1, -1, 3, 4], 7));

function sumArray(arr, sum) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let firstEl = arr[i];
    let secondEle = sum - firstEl;
    if (obj[secondEle]) {
      console.log(firstEl, secondEle);
    } else {
      obj[firstEl] = 1;
    }
  }
}

//....missing number from array...
var array = [9, 1, 5, 8, 7, 4, 3, 0, 10, 13, 15, 19, 12, 16, 18]; // Missing 2,6,11,14,17

var length = Math.max.apply(this, array);

let missing = [];

for (let i = 0; i < length; i++) {
  if (array.indexOf(i) < 0) {
    missing.push(i);
  }
}

console.log(missing);

//... find the mininum number from arra..

let salary = [4000, 10000, 60000, 3000, 2000];

// console.log(Math.max.apply(this, salary));
// console.log(Math.min.apply(this, salary));

let minSal = salary[0];

for (let i = 0; i <= salary.length; i++) {
  if (salary[i] < minSal) {
    minSal = salary[i];
  }
}
console.log(minSal);


// ..... remove the duplicate from array...
let a = [1, 2, 3, 1, 4, 1, 2];
let b = [];
for (let i = 0; i < a.length; i++) {
  if (b.indexOf(a[i]) === -1) {
    b.push(a[i]);
  }
}

console.log(b);

const items = [1, 2, 3, 1, 2, 3, 7, 8, 7];

const removeDuplicate = items.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);

let removedDuplicate = items.reduce((acc, curr) => {
  if (acc.indexOf(curr) === -1) {
    acc.push(curr);
  }
  return acc;
}, []);


console.log(removeDuplicate);

console.log([...new Set(a)]);

................................... group of item based on category..

const items = [
  { name: 'Apple', category: 'Fruit' },
  { name: 'Onion', category: 'Vegetable' },
  { name: 'Orange', category: 'Fruit' },
  { name: 'Lettuce', category: 'Vegetable' },
];

let obj = {};
for (let i = 0; i < items.length; i++) {
  let category = items[i].category;
  console.log(category);
  if (!obj[category]) {
    obj[category] = [];
  }
  obj[category].push(items[i].name);
}

console.log(obj);

let obj = {};
for (let i of items) {
  let category = i.category;
  console.log(category);
  if (!obj[category]) {
    obj[category] = [];
  }
  obj[category].push(i.name);
}

console.log(obj);

const groupedItem = items.reduce((acc, item) => {
  const category = item.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(item.name);
  return acc;
}, {});

console.log(groupedItem);

// ... palindrom check.....
let str = 'aba';
let store = '';
for (let i = str.length; i >= 0; i--) {
  store += str.charAt(i);
  console.log(store);

  store == str ? console.log('Palindrom') : console.log('not a plindropm');
}

function VowelsCount(str) {
  const matches = str.match(/[aeiou]/gi);
  if (matches) {
    console.log(matches.length);
  } else {
    matches = 0;
  }
  matches;
}

VowelsCount('apple');

function VowelsCount(str) {
  let vowels = ['a', 'e', ' i', ' o', 'u'];
  let count = 0;
  for (char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  console.log(count);
}

//.... rermove duplicate of title from array...
books = [
  { title: 'C++', author: 'Bjarne' },
  { title: 'Java', author: 'James' },
  { title: 'Python', author: 'Guido' },
  { title: 'Java', author: 'James' },
];

const uniq = books.filter((obj, index) => {
  return index === books.findIndex((o) => o.title === obj.title);
});

console.log(uniq);

//second method
let newArray = [];
let uniqObj = {};

for (let i in books) {
  // Extract the title
  objTitle = books[i]['title'];
  //console.log(objTitle);

  // Use the title as the index
  uniqObj[objTitle] = books[i];
  console.log(uniqObj);
}

//Loop to push unique object into array
for (i in uniqObj) {
  newArray.push(uniqObj[i]);
}

console.log(newArray);

// repeat charachter..
const countRepeatChar = (str) => {
  let obj = {};
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]]) {
        obj[str[i]] += obj[str[i]];
      } else {
        obj[str[i]] = 1;
      }
    }
    console.log(obj);
};
countRepeatChar('aabcddeee');

//.... no of repeat item...
var a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (acc, curr) {
  if (acc[curr]) {
    acc[curr] += 1;
  } else {
    acc[curr] = 1;
  }

  return acc;
}, {});
console.log(a);

//...Anagram..........

let arr = ['kmno', 'okmn', 'omkn', 'dell', 'ledl', 'ok', 'ko'];

function anagaram(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].split('').sort().join('');
    if (!obj[word]) {
      obj[word] = [];
    }
    obj[word].push(arr[i]);
  }
  return obj;
}

console.log(anagaram(arr));


//.... pollyfill foreach....
const fruits = ['mango', 'apple', 'banana'];

Array.prototype.cutomForEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

fruits.cutomForEach(function (element) {
  console.log(element);
});

//.... pollyfill map....
Array.prototype.customMap = function (callback) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }
  return arr;
};

fruits.customMap(function (el) {
  console.log(el);
});

//...count the repeted strings..
let str = 'abc def abc def xyz abc';
let obj = {};
for (let s of str.split(' ')) {
  if (obj[s]) {
    obj[s]++;
  } else {
    obj[s] = 1;
  }
}
console.log(obj);

//........chunk size....
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkSize = 3;
const chunks = [];

for (let i = 0; i < arr.length; i += chunkSize) {
  const chunk = arr.slice(i, i + chunkSize);
  chunks.push(chunk);
}

console.log(chunks); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]])

.............................
console.log(sum(2, 3));
console.log(sum(2)(3));

function sum(a) {
  if (arguments.length > 1) {
    return arguments[0] + arguments[1];
  } else {
    return function (b) {
      return a + b;
    };
  }
}

/*
...................primitive and nonn primitive data type...........

// let a = 1;
// let b = a;
// b = 2;
// console.log('a=', a);
// console.log('b=', b);

const A = { prop: 1 };

// let B = Object.assign({}, A);
// B.prop = 2;

//let B = { ...A };

let B = JSON.parse(JSON.stringify(A));
B.prop = 2;
console.log('A', A);
console.log('B', B);

....IBM...............

let arr = [1, 2, 1, 2, 3, 4];

let obj = {};

for (let i = 0; i < arr.length; i++) {
  if (!obj[arr[i]]) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]] += 1;
  }
}
console.log(obj);

let item = arr.reduce((acc, item) => {
  if (!acc[item]) {
    acc[item] = 1;
  } else {
    acc[item] += 1;
  }
  return acc;
}, {});

console.log(item)


//Generate the random number
var myrandomnumber = Math.random(Math.round(1));
console.log(myrandomnumber);

.......service -max ..............

let arr = [1, 2, 3, 4, [5, 6, [7, 8]]];
let res = [];
function flatArr(arr) {
  for (let item of arr) {
    if (Array.isArray(item)) {
      flatArr(item);
    } else {
      res.push(item);
    }
  }
  return res;
}

console.log(flatArr(arr));

.............Cognigent........................
let x = 10;
let y = 20;

x = x + y;
y = x - y;
x = x - y;

console.log(x, y);

let a = [1, 2, 4, 4, 3];

let b = [];

for (let i = 0; i < a.length; i++) {
  if (b.indexOf(a[i]) == -1) {
    b.push(a[i]);
  }
}

console.log(b);

let str = 'aba';

let res = '';
const PalindrumCheck = (str) => {
  for (let i = str.length; i >= 0; i--) {
    res += str.charAt(i);
  }
  res === str ? console.log('Palindrum') : console.log('not a palindrom');
};

PalindrumCheck(str);

..............Altimetrik..........
let arr = [0, 1, 0, 1, 1, 1];

function segeration01(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    while (arr[left] === 0) {
      left++;
    }
    while (arr[right] === 1) {
      right--;
    }

    if (left < right) {
      arr[left] = 0;
      arr[right] = 1;
      left++;
      right--;
    }
  }
  return arr;
}

console.log(segeration01(arr));


*/

