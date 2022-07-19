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
 var lowestCommonAncestor = function(root, p, q) {
  const pathP = findTreePath(root, p.val);
  const pathQ = findTreePath(root, q.val);
  const maxLen = Math.max(pathP.length, pathQ.length);
  for (let i = 0; i < maxLen; i++) {
      if (pathQ[i]?.val !== pathP[i]?.val) {
          return pathP[i - 1]
      }
  }
  return null;
};

function findTreePath(node, targetVal, pathRes = []) {
  if (!node) {
      return pathRes;
  }
  pathRes.push(node);
  if (pathRes[pathRes.length - 1]?.val === targetVal) {
      return pathRes;
  }
  findTreePath(node.left, targetVal, pathRes);
  findTreePath(node.right, targetVal, pathRes);
  if (pathRes[pathRes.length - 1]?.val !== targetVal) {
      pathRes.pop();
  } else {
      return pathRes
  }
}