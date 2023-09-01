/* - Introduction

  This pattern involves creating a 
  window which can either be an array or
  number from one position to another

  Depending on a certain condition, the
  window either increases or closes (and a
  new window is created)

  Very useful for keeping track of subset of
  data in an array/string etc.

*/

/* - Example#1

  Write a function called maxSubarraySum which accepts
  an array of integers and a number called n. The function
  should calculate the maximum sum of n consecutive 
  elements in the array.

  maxSubarraySum([1,2,5,2,8,1,5], 2)  // 10
  maxSubarraySum([1,2,5,2,8,1,5], 4)  // 17
  maxSubarraySum([4,2,1,6], 1)        // 6
  maxSubarraySum([4,2,1,6,2], 4)      // 13
  maxSubarraySum([], 4)               // null
  maxSubarraySum([-2,-2,-3,-4,5], 4)  // -4

*/

// Naive approach ( time complexity - O(N^2) )
function maxSubarraySum(arr, n) {
  if (n > arr.length) {
    return null;
  }

  let maxSum = -Infinity;

  for (let i = 0; i <= arr.length - n; i++) {
    let sum = 0;
    for (let j = i; j < i + n; j++) {
      sum += arr[j];
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum;
}

// Refactored ( time complexity - O(N) )
function maxSubarraySum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;

  if (n > arr.length) {
    return null;
  }
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - n];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

//maxSubarraySum([2,6,9,2,1,8,5,6,3], 4)
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
// console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
// console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
// console.log(maxSubarraySum([], 4)); // null
// console.log(maxSubarraySum([-2, -2, -3, -4, 5], 4)); // null

/* - Example#2

  "hellothere"
  Find the longest sequence of unique characters

*/
