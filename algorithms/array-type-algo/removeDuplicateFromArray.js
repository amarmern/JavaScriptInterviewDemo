var removeDuplicates = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      // index for value (nums[i]) exists
      nums.splice(map[nums[i]], 1);
      i--; // decrease counter because of splice
      map[nums[i]] = i; // new index for value
    } else {
      map[nums[i]] = i; // record new index
    }
  }

  return nums;
};
let nums = [1,2,2,2,5,8,9];
console.log(removeDuplicates(nums));


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

const items = [1, 2, 3, 1, 2, 3, 7, 8, 7];
//.....................
const removeDuplicate = items.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);

console.log(removeDuplicate);
