/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// Solution 1: Recursive
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) return root;
    if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q)
    if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q)
    return root
};

// Solution 2: Iterative
var lowestCommonAncestor = function(root, p, q) {
    while((root.val - p.val) * (root.val - q.val) > 0) {
        root = root.val > p.val ? root.left : root.right
    }
    return root
};