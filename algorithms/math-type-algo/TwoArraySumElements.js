let arr1 = [1, 2, 4, 5, 7];
let arr2 = [5, 6, 3, 4, 8];

function sumArrays(arr1, arr2, sum) {
  for (let i = 0; i <= arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] + arr2[j] === sum) {
        console.log(arr1[i], arr2[j]);
      }
    }
  }
}

sumArrays(arr1, arr2, 9);
