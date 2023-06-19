/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    const result = [];
    
    while (left <= right) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];
        
        if (leftSquare > rightSquare) {
            result.unshift(leftSquare);
            left++;
        } else {
            result.unshift(rightSquare);
            right--;
        }
    }
    
    return result;
};