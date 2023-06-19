/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = new TreeNode(nums[i]);
    }

    function buildTree(nums, start, end) {
        if (start > end) {
            return null;
        }

        const mid = Math.floor((start + end) / 2);
        const root = nums[mid];
        root.left = buildTree(nums, start, mid - 1);
        root.right = buildTree(nums, mid + 1, end);

        return root;
    }

    return buildTree(nums, 0, nums.length - 1);
};