let array = [1, 3, 7.8, 5, 9];

function binarySearch(array, val) {
  let start = 0,
    end = array.length - 1,
    mid = 0;
  while (start < end) {
    mid = Math.floor((start + end) / 2);
    if (array[mid] === val) return mid;
    if (val > array[mid]) start = mid + 1;
    else end = mid - 1;
  }
}

function binarySearch1(array, searchElement, left = 0, right = array.length - 1) {
  let mid = Math.floor((left + (right + 1)) / 2); // using floor as we may get floating numbers

  if (left <= right) {
    // If it is not the last element, process further, else return -1
    if (arr[mid] === searchElement) {
      // element found at mid
      return mid; // no need to process further
    } else if (searchElement < arr[mid]) {
      // element might be in first half
      right = mid - 1; // right is mid - 1 because we know that mid is not correct element
    } else {
      // element might be in second half
      left = mid + 1; // left is mid + 1 because we know that mid is not correct element
    }
    return this.binarySearch(arr, searchElement, left, right); // recursive
  }

  return -1; // element not found
}
