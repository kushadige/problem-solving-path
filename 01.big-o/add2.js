/**
 * @description O(1) ~ always 3 operations
 */
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${t2 - t1} ms.`);
