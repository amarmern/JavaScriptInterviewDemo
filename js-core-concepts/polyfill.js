console.log(3 > 2 && 2 > 1)
console.log(3>2>1)
//Returns false because 3 > 2 is true, then true is converted to 1
//in inequality operators, therefore true > 1 becomes 1 > 1, which
 //is false. Adding parentheses makes things clear: (3 > 2) > 1.

console.log(Math.trunc(1.23))

/// Polyfill in javscript

let fruits = ["Mango", "Apple", "Banana", "Grapes"];

fruits.forEach(function(ele) {
  console.log(ele)
})
console.log(typeof(Array))
Array.prototype.customForEach = function(callback){
 for(var i=0; i< this.length; i++){
    callback(this[i])
 }
}

fruits.customForEach(function(element){
  console.log(element)
})

const mapFruit = fruits.map(function (ele) {
  return ele;
});
console.log(mapFruit);

Array.prototype.customMap = function (callback) {
  let arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }
  return arr;
};

let fruitsRes = fruits.customMap(function (ele) {
  return ele;
});

console.log(fruitsRes);

//Filter

let fruits1 = [
  { name: "Mango", price: 200 },
  { name: "Apple", price: 300 },
  { name: "Banana", price: 100 },
  { name: "Grapes", price: 150 }
];

let fruitsFilter = fruits1.filter(function (ele) {
  return ele.price > 100;
});

console.log(fruitsFilter);

Array.prototype.customFilter = function (callback, context) {
  let arr = [];

  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

fruits1.customFilter(function (ele) {
  if (ele.price > 100) {
    console.log(ele);
  }
});
