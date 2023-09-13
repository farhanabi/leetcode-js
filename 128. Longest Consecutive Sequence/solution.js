/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let max = 0;
    for (const num of set) {
        if (!set.has(num - 1)) {
            let curr = num,
                count = 1;
            while (set.has(curr + 1)) {
                curr++;
                count++;
            }
            max = Math.max(max, count);
        }
    }
    return max;
};
