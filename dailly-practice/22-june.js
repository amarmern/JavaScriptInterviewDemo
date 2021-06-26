const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.includes('fox'));

function sumArray(arr, s) {
  var sum = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == s) {
        sum.push(arr[i], arr[j]);
      }
    }
  }
  return sum;
}
console.log(sumArray([2, 3, 1, 1, -1, 3, 4], 7));

// //using filter..
// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(array.filter(isPrime));

// // using findIndex

// console.log(array.findIndex(isPrime));

// //  remove duplicate using reduce

// let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

// let removedDuplicate = myArray.reduce((acc, curr) => {
//   if (acc.indexOf(curr) === -1) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);

// console.log(myArray);
// console.log(removedDuplicate);

// /// promise using Reduce

// // promise function 1

// function p1(a) {
//   return new Promise((resolve, reject) => {
//     resolve(a * 5);
//   });
// }

// // promise function 2

// function p2(a) {
//   return new Promise((resolve, reject) => {
//     resolve(a * 2);
//   });
// }

// // function 3  - will be wrapped in a resolved promise by .then()
// function f3(a) {
//   return a * 3;
// }

// // promise function 4
// function p4(a) {
//   return new Promise((resolve, reject) => {
//     resolve(a * 4);
//   });
// }

// const promArr = [p1, p2, f3, p4];

// runPromiseInSequence(promArr, 10).then(console.log);

// function runPromiseInSequence(arr, input) {
//   return arr.reduce(
//     (promiseChain, currentFunction) => promiseChain.then(currentFunction),
//     Promise.resolve(input)
//   );
// }
