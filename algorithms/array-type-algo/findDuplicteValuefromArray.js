var arr = ['a', 'b', 'c', 'a', 'd', 'e', 'b', 'c', 'f', 'g', 'f'];
var sortedarray = arr.sort();
var result = [];
var flag = false;
(function findDuplicate(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (sortedarray[i + 1] == sortedarray[i]) {
      result.push(sortedarray[i]);
    }
  }
  console.log(`${result} is duplicate`);
})(arr);

let arr1 = [9, 9, 111, 2, 3, 4, 4, 5, 7];
let sortedarray1 = arr1.slice().sort((a, b) => a - b);
console.log(sortedarray1);

var results = [];
for (let i = 0; i < sortedarray.length - 1; i++) {
  if (sortedarray[i + 1] == sortedarray[i]) {
    results.push(sortedarray[i]);
  }
}

console.log(results);

let arr3 = [9, 9, 9, 9, 111, 2, 3, 4, 4, 5, 7];
arr3.filter(function (item, index, array) {
  return array.indexOf(item) !== index;
});
console.log(arr3);

//best option..

let arr2 = [9, 9, 9, 9, 111, 2, 3, 4, 4, 5, 7];
function find_duplicates(arr2) {
  var len = arr2.length,
    out = [],
    counts = {};
  for (var i = 0; i < len; i++) {
    var item = arr2[i];
    counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
    if (counts[item] === 2) {
      out.push(item);
    }
  }
  return out;
}
var uniq = find_duplicates(arr2);
console.log(uniq);

function find_duplicates(arr2) {
  let out = [];
  let counts = {};
  for (var i = 0; i < arr2.length; i++) {
    if (counts[arr2[i]] >= 1) {
      counts[arr2[i]] = counts[arr2[i]] + 1;
    } else {
      counts[arr2[i]] = 1;
    }
    if (counts[arr2[i]] === 2) {
      out.push(arr2[i]);
    }
  }
  return out;
}
var uniq = find_duplicates(arr2);
console.log(uniq);

let count = {};
let out = [];
for (let arr of arr3) {
  if (count[arr] >= 1) {
    count[arr] = count[arr] + 1;
  } else {
    count[arr] = 1;
  }
  if (count[arr] === 2) {
    out.push(arr);
  }
  out;
}
