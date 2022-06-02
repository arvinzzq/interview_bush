/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

//   3
//  / \
// 9  20
//   /  \
//  15   7
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
 * @return {number[][]}
 */
const levelOrder = function (root) {
  const levelOrderRes = [];
  dfs(root, 0, (depth, node) => {
    if (!levelOrderRes[depth]) {
      levelOrderRes[depth] = [node.val];
    } else {
      levelOrderRes[depth] = levelOrderRes[depth].concat(node.val);
    }
  });
  return levelOrderRes;
};

const dfs = (node, depth, callback) => {
  if (!node) {
    return;
  }
  callback(depth, node);
  dfs(node.left, depth + 1, callback);
  dfs(node.right, depth + 1, callback);
}

const res = levelOrder(root);
console.log('res: ', res);