/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 1
var missingNumber = function(nums) {
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    
    const n = nums.length;
    return (n * (n + 1)) / 2 - sum;
};

// Solution 2
var missingNumber = function(nums) {
    let missing = nums.length;
    for (let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i];
    }
    
    return missing;
}
