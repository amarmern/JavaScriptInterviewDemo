let array = [3, 4, 6, 2, 3, 645, 2, 3, 6, 83, 23, 13]
//first need to sort the array..
let sortedarray = array.sort((a, b) => a - b);

function binarySearch(sortedarray, value) {
    let low = 0;
    let high = sortedarray.length - 1;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (value == sortedarray[mid]) {
            return sortedarray[mid];
        }
        else if (value > sortedarray[mid]) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch(sortedarray, 83));
