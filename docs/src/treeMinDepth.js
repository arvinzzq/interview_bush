/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 const minDepth = function(root) {
  let minDepth = -1;
  dfs(root, 0, (depth, node) => {
    if (!node.left && !node.right) {
        if (minDepth === -1) {
            minDepth = depth;
        } else if (depth < minDepth) {
            minDepth = depth;
        }
    }
  });
  return minDepth + 1;
};

const dfs = (node, depth, callback) => {
  if (!node) {
    return;
  }
  callback(depth, node);
  dfs(node.left, depth + 1, callback);
  dfs(node.right, depth + 1, callback);
}