# Problem 973. K Closest Points to Origin

This folder contains a JavaScript solution to the LeetCode problem [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/). The problem requires us to find the k closest points to the origin.

## Problem Description

We have a list of `points` on the plane. Find the `K` closest points to the origin `(0, 0)`.

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in.)

## Solution

The solution first initializes an empty array `distances` that will store the distances of each point to the origin. It then iterates over each point in the input array using a `for...of` loop. For each point, the function calculates its distance to the origin using the Pythagorean theorem and adds the point and its distance to the `distances` array.

The function then sorts the `distances` array in ascending order. It then iterates over the `distances` array using a for loop and adds the first `K` points to the `result` array. The function then returns the `result` array.

### Time and Space Complexity

The time complexity of this solution is O(n log n), where n is the number of points in the input array. This is because the solution iterates through the input array once and sorts the `distances` array using the built-in `Array.prototype.sort()` method, which has a time complexity of O(n log n).

The space complexity of this solution is O(n), because the solution creates a new array to store the distances of each point to the origin. The length of the new array is equal to the length of the input array.
