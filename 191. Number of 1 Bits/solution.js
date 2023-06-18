/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// Solution 1
var hammingWeight = function(n) {
    let result = 0;
    while (n !== 0) {
        result += n & 1;
        n >>>= 1;
    }
    return result;  
};

// Solution 2
var hammingWeight = function(n) {
  let count = 0;
  while (n !== 0) {
    n &= n - 1;
    count++;
  }
  return count;
};