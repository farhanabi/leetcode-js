# Problem 409: Longest Palindrome

This folder contains a JavaScript solution to the LeetCode problem [Longest Palindrome](https://leetcode.com/problems/longest-palindrome/).

# Problem Description

Given a string `s` which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, `"Aa"` is not considered a palindrome here.

## Solution

The solution uses an array to keep track of the number of times each letter appears in `s`. It then iterates through the array and adds the number of times each letter appears in `s` to the length of the longest palindrome. If the number of times a letter appears in `s` is odd, then the number of times the letter appears in `s` is decremented by 1 before it is added to the length of the longest palindrome. If the number of times a letter appears in `s` is even, then the number of times the letter appears in `s` is added to the length of the longest palindrome. If the number of times a letter appears in `s` is odd, then the letter is added to the array of letters that appear an odd number of times in `s`. If the number of times a letter appears in `s` is even, then the letter is not added to the array of letters that appear an odd number of times in `s`. If the function iterates through the array without returning `false`, then the function returns `true`.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of `s`. This is because the solution iterates through `s` once.

The space complexity of this solution is O(1), because the solution uses an array to keep track of the number of times each letter appears in `s`. The array can contain up to 52 letters, because there are 26 lowercase letters and 26 uppercase letters.