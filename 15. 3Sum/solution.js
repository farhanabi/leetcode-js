/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const ans = [];
    nums.sort((a, b) => a - b);
    
    for(let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        for(let j = i+1, k = nums.length-1; j < k;) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                ans.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while(j < k && nums[j] === nums[j-1]) j++;
                while(j < k && nums[k] === nums[k+1]) k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    
    return ans;
};