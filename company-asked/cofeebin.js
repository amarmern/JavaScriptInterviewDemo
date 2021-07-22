let arr = [1, 2, 3, 4, 5, 5, 6, 7];
let sum = 8;

function twosum(arr, sum) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let firstEle = arr[i];
    let secondElm = sum - firstEle;

    if (obj[secondElm]) {
      obj[secondElm] = 0;
      console.log(firstEle, secondElm);
    } else {
      obj[firstEle] = 1;
    }

    //obj[]

    // for (let j = i + 1; j < arr.length; j++) {
    //   if (arr[i] + arr[j] === sum) {
    //     console.log(arr[i], arr[j]);
    //   }
    // }
  }
}

console.log(twosum(arr, sum));
