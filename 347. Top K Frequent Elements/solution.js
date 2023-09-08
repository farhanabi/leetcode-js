/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
	const map = new Map();
	const result = [];
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		map.set(num, (map.get(num) || 0) + 1);
	}
	const arr = [...map];
	arr.sort((a, b) => b[1] - a[1]);
	for (let i = 0; i < k; i++) {
		result.push(arr[i][0]);
	}
	return result;
};