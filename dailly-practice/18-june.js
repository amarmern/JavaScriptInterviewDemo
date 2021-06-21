let array = [1, 3, 4, 5, 13, 20, 25, 40, 42, 53];

//Binary Search
let arr = array.sort((a,b) =>  a -b)
function binarySearch(arr , target){
    let low = 0 , high = arr.length , mid =0;

    while(low < high){
        mid = (Math.floor(low + high) / 2);
        console.log(mid)
        if(target === arr[mid]){
            console.log(arr[mid]);
            
        }
        else if(target > arr[mid]){

        }
    }

}


//// Linear Search

// function linearSearch(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) console.log(array[i]);
//     else -1;
//   }
// }

// linearSearch(array, 40);


