/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    const map = new Map();
    
    function traverse(node) {
        if (node === null) return null;
        if (map.has(node.val)) return map.get(node.val);
        const newNode = new Node(node.val);
        map.set(node.val, newNode);
        for(const neighbor of node.neighbors) {
            newNode.neighbors.push(traverse(neighbor));
        }
        return newNode;
    }
    
    return traverse(node);
};