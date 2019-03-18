let array = [3,4,6,2,3,645,2,3,6,83,23,13]
let sortedarray = array.sort((a,b)=> a-b);

function binarySearch(sortedarray, val){
    let low =0;
    let high = sortedarray.length -1;
    let mid = 0;
    while(low < high){
        mid= Math.floor((low + high)/2);
        if(val == sortedarray[mid])
        {
            return sortedarray[mid];
        }
        else if( val > sortedarray[mid]){
            low = mid +1;
            }
         else{
             high = mid -1;
         }   
    }
    return -1;
}

let wasFound = binarySearch(sortedarray,83);
