/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 二叉树的深度
// 3
// / \
// 9  20
//  /  \
// 15   7
//        \
//         10
//        /
//      11

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
root.right.right.right = new TreeNode(10);
root.right.right.right.left = new TreeNode(11);

/**
 * @param {TreeNode} root
 * @return {number}
 */
const treeMaxDepth = function(root) {
  let maxDepth = 0;
  dfs(root, 0, (depth, node) => {
    if (!node.left && !node.right && depth > maxDepth) {
      maxDepth = depth;
    }
  });
  return maxDepth + 1;
};

const dfs = (node, depth, callback) => {
  if (!node) {
    return;
  }
  callback(depth, node);
  dfs(node.left, depth + 1, callback);
  dfs(node.right, depth + 1, callback);
}

const res = treeMaxDepth(root);
console.log('res: ', res);