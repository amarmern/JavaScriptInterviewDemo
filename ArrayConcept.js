let array= [9,4,5,1,6,3];
console.log(array);
let secondLargestNumber = array.sort((a,b)=> a-b)[array.length-2];
console.log(secondLargestNumber);