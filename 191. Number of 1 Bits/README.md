Problem 191. Number of 1 Bits

This file contains a JavaScript solution to the LeetCode problem [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/). The problem requires us to return the number of 1 bits in the binary representation of a given integer.

## Solution 1

The solution uses a bit manipulation approach to solve the problem. It iterates through the bits of the given integer and increments a counter each time it encounters a 1 bit. It does this by using the following formula:

```
while (n !== 0) {
    result += n & 1;
    n >>>= 1;
}
```

This formula calculates the number of 1 bits in the number by adding the last bit of the number to the result and then shifting the number to the right by 1 bit.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the number of bits in the given integer. This is because the solution iterates through each bit of the given integer once.

The space complexity of this solution is O(1). This is because the solution uses a constant amount of space to store the result and the counter.

## Solution 2

The solution uses a bit manipulation approach to solve the problem. It iterates through the bits of the given integer and increments a counter each time it encounters a 1 bit. It does this by using the following formula:

```
while (n !== 0) {
    n &= n - 1;
    count++;
}
```

This formula calculates the number of 1 bits in the number by subtracting 1 from the number and then doing the bit AND operation between the result and the number. This removes the last 1 bit from the number. It then increments the counter.

### Time and Space Complexity

The time complexity of this solution is O(k), where k is the number of 1 bits in the binary representation of n, since the function clears one 1 bit in each iteration of the loop.

The space complexity of this solution is O(1). This is because the solution uses a constant amount of space to store the counter.
