/**
 * @description O(n)
 */
function countUpAndDown(n) {
  console.log("Going up..");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top, going down..");
  for (let i = n - 1; i >= 0; i--) {
    console.log(i);
  }
  console.log("Back down..");
}
/**
 * @description O(n**2)
 */
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
/**
 * @description O(n)
 */
function logAtLeast5(n) {
  for (let i = 1; i < Math.max(5, n); i++) {
    console.log(i);
  }
}
/**
 * @description O(1)
 */
function logAtMost5(n) {
  for (let i = 1; i < Math.min(5, n); i++) {
    console.log(i);
  }
}
