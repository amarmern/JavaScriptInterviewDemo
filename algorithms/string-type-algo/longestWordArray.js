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
  let longest = arr.reduce(function (acc, curr) {
    return acc.length > curr.length ? acc : curr;
  });
  return longest;
};

console.log("3", findLongetWordReduce(arr));

const findLongestWordSort = function (arr) {
  let longest = arr.sort((a, b) => b.length - a.length);
  console.log("4", longest[0]);
};
findLongestWordSort(arr);

let string = "Pride and Prejudice";

function longestWord(string) {
  let longest = 0,
    word;
  let str = string.split(" ");
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i].length > longest) {
      longest = str[i].length;
      word = str[i];
    }
  }
  return word;
}

console.log(longestWord(string));
