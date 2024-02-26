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

const countRepeatChar = (str) => {
  let obj = {};
  if (str) {
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]]) {
        obj[str[i]] += obj[str[i]];
      } else {
        obj[str[i]] = 1;
      }
    }
    console.log(obj);
  }
};
countRepeatChar('aabcddeee');

var a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (acc, curr) {
  if (acc[curr]) {
    acc[curr] += 1;
  } else {
    acc[curr] = 1;
  }

  return acc;
}, {});
console.log(a);


let arr = ['kmno', 'okmn', 'omkn', 'dell', 'ledl', 'ok', 'ko'];
for (let i = 0; i < arr.length; i++) {
  var word = arr[i].split('').sort().join('');
  console.log(word);
}
function anagaram(arr) {
  var result = {};
  for (let i = 0; i < arr.length; i++) {
    var word = arr[i].split('').sort().join('');
    if (!result[word]) {
      result[word] = [];
    }
    result[word].push(arr[i]);
  }
  return result;
}

console.log(anagaram(arr));

let str = 'aba';
var store = '';
for (let i = str.length; i >= 0; i--) {
  store += str.charAt(i);
  console.log(store);

  store == str ? console.log('Palindrom') : console.log('not a plindropm');
}

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
second method

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

Loop to push unique object into array
for (i in uniqObj) {
  newArray.push(uniqObj[i]);
}

console.log(newArray);

