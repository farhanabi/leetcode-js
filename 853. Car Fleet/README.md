# Problem 853: Car Fleet

This folder contains a JavaScript solution to the LeetCode problem [Car Fleet](https://leetcode.com/problems/car-fleet/).

## Problem Description

N cars are going to the same destination along a one lane road. The destination is target miles away.

Each car `i` has a constant speed `speed[i]` (in miles per hour), and initial position `position[i]` miles towards the target along the road.

A car can never pass another car ahead of it, but it can catch up to it, and drive bumper to bumper at the same speed.

The distance between these two cars is ignored - they are assumed to have the same position.

A _car fleet_ is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

How many car fleets will arrive at the destination?

**Note:**

-   `0 <= N <= 10 ^ 4`
-   `0 < target <= 10 ^ 6`
-   `0 < speed[i] <= 10 ^ 6`
-   `0 <= position[i] < target`
-   All initial positions are different.

## Solution

The solution first creates an array of the indices. It then sorts the indices by the position of the car at that index, descending. It then iterates through the indices and calculates the time it will take for the car at that index to reach the target. If the time is greater than the time it will take for the car at the previous index to reach the target, it increments the number of fleets. Otherwise, it sets the time it will take for the car at the previous index to reach the target to the time it will take for the car at the current index to reach the target.

## Time and Space Complexity

The time complexity of this solution is O(n log n) where n is the number of cars. This is because the solution sorts the indices by the position of the car at that index descending.

The space complexity of this solution is O(n) where n is the number of cars. This is because the solution creates an array of the indices.
