function bubbleSort(arr){
    var len= arr.length;
    for(var i =0; i< len; i++){
        var flag= 0;
        for(var j=0; j<len-1-i; j++){
            if(arr[j] > arr[j+1]){
                var temp= arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                flag =1;
            }
        }
        if(flag ==0) break;
    }
    return arr;
    
}
bubbleSort([16,14,5,6,8]);
//bubbleSort([7,5,2,4,3,9]);
//bubbleSort([9,7,5,4,3,1]);
//bubbleSort([1,2,3,4,5,6]);
