/* - Introduction

  This pattern involves dividing a data set
  into smaller chunks and then repeating a
  process with a subset of data.

  This pattern can tremendously decrease
  time complexity

*/

/* - Example

  Given a sorted array of integers, write a function
  called search that accepts a value and returns the
  index where the value passed to the function is
  located. If the value is not found, return -1

  search([1,2,3,4,5,6], 4)   // 3
  search([1,2,3,4,5,6], 6)   // 5
  search([1,2,3,4,5,6], 11)  // -1

*/

// Naive approach ( time complexity - O(N) ) - Linear Search
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// Refactored ( time complexity - O(log(N)) ) - Binary Search
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (val > arr[mid]) {
      min = mid + 1;
    } else if (val < arr[mid]) {
      max = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}
