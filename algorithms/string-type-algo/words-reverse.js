let string = "Javascript is best";

//let str1 = string.split(" ").reverse().join(' ')
let str1 = string.split(" ")
let res = ""
for(let i = str1.length-1; i >=0; i--){
res += str1[i] + " "
}
console.log(res);
//best is Javascript  
