# Problem 190. Reverse Bits

This folder contains a JavaScript solution to the LeetCode problem [Reverse Bits](https://leetcode.com/problems/reverse-bits/).

## Problem Description

Reverse bits of a given 32 bits unsigned integer.

## Solution

The solution uses a bit manipulation algorithm to reverse the bits of a given 32 bits unsigned integer. It first initializes a variable `result` to 0. It then iterates 32 times. In each iteration, it shifts `result` to the left by 1 bit. It then checks if the last bit of the given integer is 1. If it is, it sets the last bit of `result` to 1. It then shifts the given integer to the right by 1 bit. It then returns `result`.

### Time and Space Complexity

The time complexity of this solution is O(1) because the solution iterates 32 times. This is because the solution uses a bit manipulation algorithm to reverse the bits of a given 32 bits unsigned integer. The bit manipulation algorithm has a time complexity of O(1) because it iterates 32 times.

The space complexity of this solution is O(1) because the solution uses a constant amount of space. This is because the solution uses a bit manipulation algorithm to reverse the bits of a given 32 bits unsigned integer. The bit manipulation algorithm has a space complexity of O(1) because it uses a constant amount of space.
