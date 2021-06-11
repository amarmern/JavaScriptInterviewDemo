let array=[5, 2, 6, 1, 3, 9];
function insertionSort(array) {
  var length = array.length;  
  for(var i = 1; i < length; i++) {
    var temp = array[i]; var j =i;
    while((array[j-1]> temp )&& (j >0) )   
    {
        array[j] = array[j-1];
        j--;
    }
   
  return array;
}
}
console.log(insertionSort(array));
