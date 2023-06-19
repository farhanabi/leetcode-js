# Problem 9. Palindrome Number

This folder contains a JavaScript solution to the LeetCode problem [Palindrome Number](https://leetcode.com/problems/palindrome-number/). The problem requires us to determine if a number is a palindrome. A number is a palindrome if it reads the same backward as forward.

## Problem Description

Given an integer `x`, return `true` if `x` is a palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, `121` is palindrome while `123` is not.

## Solution

The solution first checks if x is negative or if x is not equal to 0 and its last digit is 0.  If either of these conditions is true, the function returns false, since a negative number and a number that ends with 0 cannot be a palindrome.

The solution then reverses the last half of the digits of x. It does this by repeatedly popping the last digit of x and pushing it to the end of the reversed number. It stops when x is less than or equal to the reversed number.

The solution then checks if x is equal to the reversed number or if x is equal to the reversed number divided by 10. If either of these conditions is true, the function returns true, since x is a palindrome. Otherwise, the function returns false, since x is not a palindrome.

### Time and Space Complexity

The time complexity of this solution is O(log(x)), where x is the given number. This is because the solution repeatedly divides x by 10 until x is less than or equal to the reversed number.

The space complexity of this solution is O(1) because the solution only uses constant space.
