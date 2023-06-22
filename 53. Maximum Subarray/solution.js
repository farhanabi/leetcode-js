/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 1: Dynamic Programming
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
};

// Solution 2: Divide and Conquer
var maxSubArray = function(nums) {
    function maxCrossingSum(start, mid, end) {
        let leftSum = Number.MIN_SAFE_INTEGER;
        let rightSum = Number.MIN_SAFE_INTEGER;
        let sum = 0;
        
        for (let i = mid; i >= start; i--) {
            sum += nums[i];
            if (sum > leftSum) {
                leftSum = sum;
            }
        }
        
        sum = 0;
        for (let i = mid + 1; i <= end; i++) {
            sum += nums[i];
            if (sum > rightSum) {
                rightSum = sum;
            }
        }
        
        return leftSum + rightSum;
    }
    
    function maxSubArraySum(start, end) {
        if (start === end) {
            return nums[start];
        }
        
        const mid = Math.floor((start + end) / 2);
        
        return Math.max(
            maxSubArraySum(start, mid),
            maxSubArraySum(mid + 1, end),
            maxCrossingSum(start, mid, end)
        );
    }
    
    return maxSubArraySum(0, nums.length - 1);
}