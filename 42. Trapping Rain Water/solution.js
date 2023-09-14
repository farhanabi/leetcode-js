/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0,
        right = height.length - 1,
        lMax = 0,
        rMax = 0,
        res = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            lMax = Math.max(lMax, height[left]);
            res += lMax - height[left];
            left++;
        } else {
            rMax = Math.max(rMax, height[right]);
            res += rMax - height[right];
            right--;
        }
    }
    return res;
};
