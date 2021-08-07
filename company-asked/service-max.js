1. Write the output for the following
	- "2"+2 
	- "2"-2 
	- "2"%2 
	- "2"*2
  - "2"**2
  
  function add(a){
  return functon b(){
  return a + b
  }
  
  let sum  = add(2)(3)
  
Implement O Function

var x = O(10);
console.log(x());  // should print 10
x(5);
console.log(x()); // should print 5

function O(num){
return function(x){
	return num
}
}


let arr = [1,2,3,4,5];

arr.map(el=> return ele)

 Aray.prototype.myMap =(arr,callback) =>{
let newAr = []
	for(let i =0 ; i < this.length ; i++){
  	newArr.push(callback(this[i]))
  }
}

var newArray =  myMap(arr);
console.log(newArray);

new Date().time().second();

let Value = setTImeOut(()=>{ Math.random(Math.round(1))},1000)
console.log(Value)


function randomGenerator() {
var myrandomnumber = Math.random(Math.round(1);
console.log(myrandomnumber);
setTImeOut(()=>{ randomGenerator,myrandomnumber*1000}
}

[1,2,3,4,[5,6,[7,8]]] => [1,2,3,4,5,6,7,8]

let arr = [1, 2, 3, 4, [5, 6, [7, 8]]];
let res = [];
function flatFunc(arr) {
  for (let item of arr) {
    if (Array.isArray(item)) {
      flatFunc(item);
    } else {
      res.push(item);
    }
  }
  return res;
}
console.log(flatFunc(arr));
