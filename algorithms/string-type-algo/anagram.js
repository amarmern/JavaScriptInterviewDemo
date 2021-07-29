let arr = ["kmno", "okmn", "omkn", "dell", "ledl", "ok", "ko"];

function anagaram(arr) {
  var result = {};
  for (let i = 0; i < arr.length; i++) {
    var word = arr[i].split("").sort().join("");
    if (!result[word]) {
      result[word] = [];
    }
    result[word].push(arr[i]);
  }
  return result;
}

console.log(anagaram(arr));

function anagrams(stringA, stringB) {
  cleanString(stringA, stringB);
}

function cleanString(str, str) {
  str.replace(/[^\w]/g).toLowerCase().split('').join();
}

anagrams('monk', 'konm');
