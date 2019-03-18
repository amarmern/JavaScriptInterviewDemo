
var arr =['a', 'b', 'c', 'a', 'd', 'e', 'b', 'c', 'f', 'g', 'f'];
var sortedarray = arr.sort();
var result =[];
var flag= false;
(function findDuplicate(arr){
for(var i=0; i< arr.length; i++){
  if(sortedarray[i+1]==sortedarray[i]){
    result.push(sortedarray[i]);
  }
}
alert(`${result} is duplicate`);
})(arr);


let arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
let sortedarray = arr.slice().sort((a,b)=> a-b);
console.log(sortedarray);

var results = [];
for (let i = 0; i < sortedarray.length - 1; i++) {
    if (sortedarray[i + 1] == sortedarray[i]) {
        results.push(sortedarray[i]);
    }
}

console.log(results);


let arr = [9, 9,9,9, 111, 2, 3, 4, 4, 5, 7];
arr.filter(function(value,index,self){ return (self.indexOf(value) !== index )})

//best option..

let arr = [9, 9,9,9, 111, 2, 3, 4, 4, 5, 7];
function find_duplicates(arr) {
  var len=arr.length, out=[], counts={};
  for (var i=0;i<len;i++) {
    var item = arr[i];
    counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;          
    if (counts[item] === 2) {
      out.push(item);
    }
  }
  return out;
}
var uniq=find_duplicates(arr);
console.log(uniq);
