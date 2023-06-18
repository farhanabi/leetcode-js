# Problem 338. Counting Bits

This file contains a JavaScript solution to the LeetCode problem [Counting Bits](https://leetcode.com/problems/counting-bits/). The problem requires us to return an array of integers where each integer is the number of 1 bits in the binary representation of the index.

## Solution

The solution uses a dynamic programming approach to solve the problem. It iterates through the numbers from 0 to num and calculates the number of 1 bits in each number. It does this by using the following formula:

```
bits[i] = bits[i >> 1] + (i & 1)
```

This formula calculates the number of 1 bits in the number by adding the number of 1 bits in the number divided by 2 (i.e. the number of 1 bits in the number without the last bit) to the last bit of the number (i.e. the number of 1 bits in the number with the last bit).

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of the input array. This is because the solution iterates through the input array once.

The space complexity of this solution is O(n), where n is the length of the input array. This is because the solution uses an array to store the number of 1 bits in each number from 0 to num.
