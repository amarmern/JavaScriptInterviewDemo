
function insertionSort(arr){
    var len = arr.length;
    for(let i =0; i< len; i++){
        // copy of the current element.
        let temp = arr[i]; 
        /*check trough the sorted part and compare with temp value, if large shift the number*/
        for(j=i-1; j >=0 && (arr[j] > temp); j--){
            //shift the number
            arr[j + 1] = arr[j];
        }
        //insert the temp copied number in the currect position in sorted part
        arr[j + 1] = temp;
    }
}
var arr = [5,3,1,2,4];
insertionSort(arr);
console.log(arr)