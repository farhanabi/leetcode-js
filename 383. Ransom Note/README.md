# Problem 383: Ransom Note

This folder contains a JavaScript solution to the LeetCode problem [Ransom Note](https://leetcode.com/problems/ransom-note/).

## Problem Description

Given two stings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed from `magazine` and `false` otherwise.

Each letter in `magazine` can only be used once in `ransomNote`.

## Solution

The solution uses a hash table to keep track of the number of times each letter appears in `magazine`. It then iterates through `ransomNote` and checks if the current letter is in the hash table. If it is, then the number of times the letter appears in the hash table is decremented. If it isn't, then the function returns `false`. If the function iterates through `ransomNote` without returning `false`, then the function returns `true`.

### Time and Space Complexity

The time complexity of this solution is O(n + m), where n is the length of `ransomNote` and m is the length of `magazine`. This is because the solution iterates through `ransomNote` and `magazine` once.

The space complexity of this solution is O(m), where m is the length of `magazine`. This is because the solution uses a hash table to keep track of the number of times each letter appears in `magazine`. The hash table can contain up to m letters, where m is the length of `magazine`.
