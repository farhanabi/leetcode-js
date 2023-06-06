# Problem 242: Valid Anagram

This folder contains a JavaScript solution to the LeetCode problem [Valid Anagram](https://leetcode.com/problems/valid-anagram/). The problem requires us to determine whether two given strings are anagrams of each other.

## Problem Description

Given two strings `s` and `t`, return `true` *if `t` is an anagram of `s`, and `false` otherwise*.

## Solution

The solution uses a Map data structure to store the frequency of each character in the first string. It iterates through the second string and checks if the frequency of each character in the second string is the same as the frequency of the same character in the first string. If it is, it returns true. If it isn't, it returns false.

## Time and Space Complexity

The time complexity of this solution is O(n+m) where n is the length of the first string and m is the length of the second string. This is because the solution iterates through both strings once.

The space complexity of this solution is O(n+m) where n is the length of the first string and m is the length of the second string. This is because the solution uses a Map data structure to store the frequency of each character in both strings, and the space used by the Map is proportional to the length of both strings.