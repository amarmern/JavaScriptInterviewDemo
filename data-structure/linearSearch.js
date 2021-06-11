let array = [3, 4, 6, 2, 3, 645, 2, 3, 6, 83, 23, 13]
function linearSearch(array, toFind) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === toFind) return i;
    }
    return -1;
}

console.log(linearSearch(array, 83));