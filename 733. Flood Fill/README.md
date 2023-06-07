# Problem 733: Flood Fill

This folder contains a JavaScript solution to the LeetCode problem [Flood Fill](https://leetcode.com/problems/flood-fill/). The problem requires us to implement a flood fill algorithm to fill a given pixel and all of its neighbors with a given new color.

## Problem Description

An `image` is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate `(sr, sc)` representing the starting pixel (row and column) of the flood fill, and a pixel value `newColor`, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the `newColor`.

At the end, return the modified image.

## Solution

The solution uses a flood fill algorithm to fill a given pixel and all of its neighbors with a given new color. It first checks if the given pixel is already the given new color. If it is, it returns the given image. Otherwise, it sets the old color to the value of the given pixel. It then calls a helper function to perform the flood fill algorithm. The helper function checks if the given pixel is out of bounds or if the value of the given pixel is not equal to the old color. If either of these conditions is true, it returns. Otherwise, it sets the value of the given pixel to the new color. It then calls itself recursively on the pixels above, below, to the left, and to the right of the given pixel.

## Time and Space Complexity

The time complexity of this solution is O(n) where n is the number of pixels in the given image. This is because the solution uses a flood fill algorithm to fill a given pixel and all of its neighbors with a given new color. The flood fill algorithm has a time complexity of O(n) because it visits each pixel in the given image at most once.

The space complexity of this solution is O(n) because the solution uses a flood fill algorithm to fill a given pixel and all of its neighbors with a given new color. The flood fill algorithm has a space complexity of O(n) because it uses a call stack that is at most n frames deep.