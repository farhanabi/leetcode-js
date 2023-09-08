# Problem 49. Group Anagrams

This folder contains a JavaScript solution to the LeetCode problem [Group Anagrams](https://leetcode.com/problems/group-anagrams/). The problem requires us to group anagrams in an input array of strings.

## Problem Description

Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Solution

The solution uses a hash map to group anagrams in an input array of strings. The solution iterates through each string in the input array and sorts the string. The solution then adds the sorted string to the hash map as a key and adds the original string to the hash map as a value. The solution then returns the values of the hash map.

### Time and Space Complexity

The time complexity of this solution is O(n log n), where n is the length of the input array `strs`, since it iterates over each element in the array `strs` exactly once and sorts the string.

The space complexity of this solution is O(n), because the solution uses a hash map of length `strs.length` to store the sorted string as a key and the original string as a value.
