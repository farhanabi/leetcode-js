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
    function buildTree(start, end) {
        if (start > end) {
            return null;
        }

        const mid = Math.floor((start + end) / 2);
        const root = new TreeNode(nums[mid]);
        root.left = buildTree(start, mid - 1);
        root.right = buildTree(mid + 1, end);

        return root;
    }

    return buildTree(0, nums.length - 1);
};