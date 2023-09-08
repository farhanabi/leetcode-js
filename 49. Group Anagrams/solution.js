/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	const map = new Map();
	for (let i = 0; i < strs.length; i++) {
		const str = strs[i];
		const key = str.split('').sort().join('');
		const arr = map.get(key) || [];
		arr.push(str);
		map.set(key, arr);
	}
	return [...map.values()];
};