console.log(sumArray([2, 3, 1, 1, -1, 3, 4], 7));
function sumArray(arr, s) {
    var sum = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == s) {
                sum.push(arr[i], arr[j]);
            }
        }
    }
    return sum;
}