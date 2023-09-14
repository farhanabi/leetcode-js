# Problem 11: Container With Most Water

This file contains a JavaScript solution to the LeetCode problem [11: Container With Most Water](https://leetcode.com/problems/container-with-most-water/).

## Problem Description

Given `n` non-negative integers `a1, a2, ..., an` , where each represents a point at coordinate `(i, ai)`. `n` vertical lines are drawn such that the two endpoints of the line `i` is at `(i, ai)` and `(i, 0)`. Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

**Notice** that you may not slant the container.

### Constraints

-   `n == height.length`
-   `2 <= n <= 10^5`
-   `0 <= height[i] <= 10^4`

### Examples

#### Example 1

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```

#### Example 2

```
Input: height = [1,1]
Output: 1
```

#### Example 3

```
Input: height = [4,3,2,1,4]
Output: 16
```

## Solution

The solution uses two pointers to find the two lines that form the container with the most water. The solution starts with a pointer at the beginning of the array and a pointer at the end of the array. The solution calculates the area of the container formed by the two lines. The solution moves the pointer at the beginning of the array to the right if the height of the line at the beginning of the array is less than the height of the line at the end of the array. The solution moves the pointer at the end of the array to the left if the height of the line at the end of the array is less than the height of the line at the beginning of the array. The solution returns the maximum area of the container if the pointers meet.

### Time and Space Complexity

The time complexity of this solution is O(n), since the solution iterates through each number in the array exactly once.

The space complexity of the function is also O(1), since it uses fixed-size arrays to store the indices of the two lines that form the container with the most water.
