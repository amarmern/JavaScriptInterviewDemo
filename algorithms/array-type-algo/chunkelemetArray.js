const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function chunkArray(array, size) {
  if (array.length <= size) {
    return [array];
  } else {
    return [array.slice(0, size), ...chunkArray(array.slice(size), size)];
  }
}

// function chunkArray(array, size) {
//   let result = [];
//   for (let i = 0; i < array.length; i = i + size) {
//     result.push(array.slice(i, i + size));
//   }
//   return result;
// }

// function chunkArray(array, size) {
//   let result = [];
//   let coppyArray = [...array];
//   while (coppyArray.length > 0) {
//     result.push(coppyArray.splice(0, size));
//   }

//   return result;
// }

// function chunkArray(arr, size) {
//   let result = [];
//   for (let value of arr) {
//     let last = result[result.length - 1];
//     if (!last || last.length === size) {
//       result.push([value]);
//     } else {
//       last.push(value);
//     }
//   }
//   return result;
// }

console.log(chunkArray(arr, 5));

// function chunk(array, size) {
//     const chunked = [];
//     for (let element of array) {
//         const last = chunked[chunked.length - 1];
//         if (!last || last.length === size) {
//             chunked.push([element]);
//         }
//         else {
//             last.push(element)
//         }
//     }
//     return chunked;
// }

// console.log(chunk(arr, 3));

// function chunk(array, size) {
//     const chunked = [];
//     let index = 0;

//     while (index < array.length) {
//         chunked.push(array.slice(index, index + size));
//         index = index + size;
//     }
//     return chunked;
// }
