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



var twoSum = function(nums, target) {
    //hash table
    var hash = {};

    for(let i=0; i<=nums.length; i++){
      //current number
        var currentNumber = nums[i];
        //difference in the target and current number
        var requiredNumber = target - currentNumber;
        // find the difference number from hashTable
        const index2 = hash[requiredNumber];

        // if number found, return index 
        // it will return undefined if not found
        if(index2 != undefined) {
            return [index2, i]
        } else {
           // if not number found, we add the number into the hashTable
            hash[currentNumber] = i;

        }
    }
};
