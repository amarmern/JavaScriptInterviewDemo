var uniqueArray = function(arrArg) {
  return arrArg.filter(function(elem, pos, arr) {
    return arr.indexOf(elem) == pos;
  });
};

var uniqEs6 = arrArg => {
  return arrArg.filter((elem, pos, arr) => {
    return arr.indexOf(elem) == pos;
  });
};

var test = ["mike", "james", "james", "alex"];
var testBis = ["alex", "yuri", "jabari"];
console.log(uniqueArray(test.concat(testBis)));

// let we have array a = [1,2,3,1,4,1,2];
// then b=[1,2,3,4]
let a = [1, 2, 3, 1, 4, 1, 2];
let b = [];
for (let i = 0; i < a.length; i++) {
  if (b.indexOf(a[i]) === -1) {
    b.push(a[i]);
  }
}

console.log(b);

console.log([...new Set(a)]);
