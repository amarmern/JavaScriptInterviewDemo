// FInd the largest string in Array ....

var arr = ["fdgdfgdfg", "gdfgf", "gdfgdfhawsdgd", "gdf", "gdfhdfhjurvweadsd"];

function findLongestWord(str) {
  //str = str.split(' ')
  let longestStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > longestStr.length) {
      longestStr = str[i];
    }
  }
  return longestStr;
}

console.log("1", findLongestWord(arr));

function findLongestWordEs6(str) {
  let longestStr = "";
  str.forEach((ele) => {
    if (ele.length > longestStr.length) {
      longestStr = ele;
    }
  });
  return longestStr;
}

console.log("2", findLongestWordEs6(arr));

const findLongetWordReduce = function (arr) {
  let longest = arr.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  });
  return longest;
};

console.log("3", findLongetWordReduce(arr));

const findLongestWordSort = function (arr) {
  let longest = arr.sort((a, b) => b.length - a.length);
  console.log("4", longest[0]);
};
findLongestWordSort(arr);
