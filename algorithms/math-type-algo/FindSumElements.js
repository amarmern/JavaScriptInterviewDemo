let arr = [1, 2, 3, 7, 5];
let sum = 12;

function sumOfArray(arr, sum) {
  let curr_sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    curr_sum = arr[i];
    for (let j = i + 1; j <= arr.length; j++) {
      if (curr_sum === sum) {
        console.log(i, j - 1);
        return;
      } else {
        curr_sum += arr[j];
      }
    }
  }
}

sumOfArray(arr, sum);

console.log(sumArrElement(arr, arr.length, 15));
