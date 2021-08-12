var str = "abcabcac";
function OcuuranceChar(str) {
  var letters_count = {};
  for (let i = 0; i < str.length; i++) {
    if (letters_count[str[i]] === undefined) {
      letters_count[str[i]] = 1;
    } else {
      letters_count[str[i]]++;
    }
  }
  for (let i in letters_count) {
    console.log(i + " " + letters_count[i]);
  }
}
console.log(OcuuranceChar(str));




