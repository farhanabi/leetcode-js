/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = new Array(nums.length).fill(1);
    let leftProduct = 1, rightProduct = 1;
    for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
        output[i] *= leftProduct;
        output[j] *= rightProduct;
        leftProduct *= nums[i];
        rightProduct *= nums[j];
    }
    return output;
};