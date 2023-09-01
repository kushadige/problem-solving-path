/* - Introduction

  This pattern uses objects or sets to collect 
  values/frequencies of values

  This can often avoid the need for nested loops 
  or O(N^2) operations with arrays/strings

*/

/* - Example#1

  Write a function called same, which accepts two arrays.
  The function should return true if every value in the 
  array has it's corresponding value squared in the second 
  array. The frequency of values must be the same.

  same([1,2,3], [4,1,9])  // true
  same([1,2,3], [1,9])    // false
  same([1,2,1], [4,4,1])  // false (must be same frequency)

*/

// Naive approach ( time complexity - O(N^2) )
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (item of arr1) {
    const correctIdx = arr2.indexOf(item ** 2);
    if (correctIdx === -1) {
      return false;
    }
    arr2.splice(correctIdx, 1);
  }
  return true;
}
// console.log(same([1, 2, 3], [9, 1, 4]));

// Refactored ( time complexity - O(N) )
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
// console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

/* - Example#2
 */
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let letter of str1) {
    lookup[letter] ? lookup[letter]++ : (lookup[letter] = 1);
  }

  for (let letter of str2) {
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter]--;
    }
  }

  return true;
}
// console.log(validAnagram("", "")); // true
// console.log(validAnagram("aaz", "zza")); // false
// console.log(validAnagram("anagram", "nagaram")); // true
// console.log(validAnagram("rat", "car")); // false
// console.log(validAnagram("awesome", "awesom")); // false
// console.log(validAnagram("qwerty", "qeywrt")); // true
// console.log(validAnagram("texttwisttime", "timetwisttext")); // true
