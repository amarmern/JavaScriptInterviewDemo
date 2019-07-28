let array = [3,4,6,2,3,645,2,3,6,83,23,13];

let sortedArray = array.sort((a,b)=> a -b );

function binarySearch(sortedArray, val) {
    let mid = 0;
    let low =0;
    let high = sortedArray.length -1;

    while(low < high){
        mid = Math.floor((low + high)/2)
        if(val == sortedArray[mid]) return sortedArray[mid];
        else if(val > sortedArray[mid]) low=  mid + 1;
        else high = mid - 1;
    }
    return -1
}

 console.log(binarySearch(sortedArray , 83));