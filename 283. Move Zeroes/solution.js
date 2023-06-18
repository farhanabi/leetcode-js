/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let lastNonZeroFoundAt = 0, i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            const temp = nums[lastNonZeroFoundAt];
            nums[lastNonZeroFoundAt++] = nums[i];
            nums[i] = temp;
        }
    }
};