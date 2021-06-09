let arr = ["abc", "pqr", "xyz"];
let arr2 = []
for(let i =0 ; i < arr.length; i++){
  console.log(arr[i])
  let str = arr[i].split('').reverse().join('')
 arr2.push(str)
}

console.log(arr2)

arr.map((arr3) => {
let rev= arr3.split('').reverse().join('')
return rev
})

o/p ["cba", "rqp", "xyx"];
