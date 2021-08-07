let arr = ["abc", "pqr", "xyz"];
let arr2 = []
for(let i =0 ; i < arr.length; i++){
  console.log(arr[i])
  let str = arr[i].split('').reverse().join('')
 arr2.push(str)
}

console.log(arr2)

o/p ["cba", "rqp", "xyx"];
