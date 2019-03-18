let array=[5, 2, 6, 1, 3, 9];
function selectionSort(array) {
  var length = array.length, min;  
  for(var i = 0; i < length; i++) {
  //set minimum to this position.
  min=i;  
  //check the rest of array to see if any is smaller.
  for(j= i+1; j<length; j++){
  if(array[j] < array[min]){
  min= j;
  }
  }
  // if the min is not in the position, swap it.
if(i != min){
//swap th enumber
var temp= array[i];
array[i] = array[min];
array[min] = temp;
}
  }
  
  return array;
}
console.log(selectionSort(array));
