## Problem Solving Approach

<font size="2">

How do you improve?

- **Devise** a plan for solving problems
- **Master** common problem solving patterns

</font>

---

###### 1. Understand the Problem

<font size="2">

- Can I restate the problem in my own words?
- What are the inputs that go into the problem?
- What are the outputs that should come from the solution to the problem?
- Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
- How should I label the important pieces of data that are a part of the problem?

</font>

---

###### 2. Explore Concrete Examples

<font size="2">

- Start with Simple Examples
- Progress to More Complex Examples
- Explore Examples with Empty Inputs
- Explore Examples with Invalid Inputs

#### _Write a function which takes in a string and returns count of each character in the string._

```js
// # Simple Examples #
charCount("aaaa");
/* {
  a: 4
} */

charCount("hello"); //
/* {
  h: 1,
  e: 1,
  l: 2,
  o: 1
} */

// # Complex Examples #
/*
  "my phone number is 182763"
  "Hello hi" // uppercase "h", lowercase "h"
*/
charCount("Your PIN number is 1234!");
/* {
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  b: 1,
  e: 1,
  i: 2,
  m: 1,
  n: 2,
  o: 1,
  p: 1,
  r: 2,
  s: 1,
  u: 2,
  y: 1,
} */

// # Empty Inputs #
charCount(""); // return "{}" or null or false or error?

// # Invalid Inputs #
charCount(123123);
```

</font>

---

###### 3. Break It Down

<font size="2">

Explicitly write out the steps you need to take.

```js
// Skeleton of the function

function charCount(str) {
  // do something
  // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters
}

function charCount(str) {
  // make object to return at end
  // loop over string, for each character...
  //if the char is a number/letter AND is a key in object, add one to count
  //if the char is a number/letter AND not in object, add it to object and set value to 1
  //if character is something else (space, period, etc.) don't do anything
  // return object at end
}
```

</font>

---

###### 4. Solve/Simplify

<font size="2">

- Find the core difficulty in what you're trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

</font>

---

###### 5. Look Back and Refactor

<font size="2">

```js
function charCount(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (/a-z0-9/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

// --------

function charCount(str) {
  const obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

// more efficient compared to regex
function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}
```

</font>
