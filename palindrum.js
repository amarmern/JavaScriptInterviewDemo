var words = "racecar";
var temp = [];
var rword = "";

for (var i = 0; i < words.length; i++) {
  temp.push(words[i]);
}

for (var i = 0; i < words.length; i++) {
  rword += temp.pop();
}
if (words == rword) {
  console.log("palindrum");
} else {
  console.log("not a palindrum");
}
//var originVal = "aba";
// var reverseVal = originVal
//   .split("")
//   .reverse()
//   .join("");

// console.log(reverseVal);

// if (originVal === reverseVal) {
//   console.log("Palindrum ");
// } else {
//   console.log("Not Palindrum");
// }
// var store = "";
// for (var i = originVal.length; i >= 0; i--) {
//   store += originVal.charAt(i);
//   console.log(store);
// }
// if (originVal === store) {
//   console.log("palindrum");
// } else {
//   console.log("Not a Palindrum");
// }
