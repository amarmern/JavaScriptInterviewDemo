var arr = ['a', 'b', 'c', 'a', 'd', 'e', 'b', 'c', 'f', 'g', 'f'];
function removeDuplicate(arr){
    for(var i =0; i< arr.length; i++){
        var tempArray = [];
        var exist = false;
        for(var j =0; tempArray.length; j++){
           if(arr[i]===tempArray[i]){
            exist =true;
            break;
           }
        }

        if(!exist){
            tempArray[tempArray.length]= arr[i];
        }
    }
    return tempArray
}

var arrayUniq = removeDuplicate(arr);
console.log(arrayUniq);
