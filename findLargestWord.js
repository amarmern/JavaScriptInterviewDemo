
let str = "The quick brown fox jumped over the lazy dog";
var largeStoreStr=str.split(' ').sort((a,b)=> b.length - a.length);
console.log(largeStoreStr[0]);



