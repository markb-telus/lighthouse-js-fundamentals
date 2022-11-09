const repeatNumbers = function(data) {
  let output = '';
  for (let item in data) {
    output += repeat(data[item][0].toString(), data[item][1] -1);
    if ((item += 1) < data.length) output += ', ';
  }

  return output;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

// Recursion to repeat a string
function repeat(string, repeatCount) { 
  if (repeatCount === 0) return string;
  return string + repeat(string, repeatCount - 1);
}

// console.log(repeat("abc", 3));

// Recursion to perform exponent multiplication
function mathPower(base, power) { 
  let result;
  if (power === 0) return 1; // Power of 0 always = 1
  // Perform calculation
  result = base * mathPower(base, Math.abs(power) - 1);
  // If `power` is negative, the result is divided by 1
  if (power < 0) {
    result = 1 / result;
  }
  return result;
}

// console.log(mathPower(2, 1));
// console.log(mathPower(2, 3));
// console.log(mathPower(2, -2));

/**
 * Function that returns the index of the last time an item occurs in an array
 * @param {Array<*>} arrayToSearch The array to check
 * @param {*} itemToFind The item to find in the array
 * @returns {number} Index of the last time the item occurs in the array
 */
 function lastIndexOf(arr, value) {
  let index = -1;

  for(let i=0; i < arr.length; i++) {
    if(arr[i] === value) {
      index = i;
    }
  }
  return index;
}

// Test cases
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
// console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
// console.log(lastIndexOf([], 3), "=?", -1);