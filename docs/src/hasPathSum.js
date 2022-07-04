var hasPathSum = function(root, targetSum) {
  return dfs(root, 0, targetSum);
};

function dfs(node, tempSum = 0, targetSum) {
  if (!node) {
    return false;
  }
  tempSum += node.val;
    if (!node.left && !node.right && tempSum === targetSum) {
    return true;
  }
  if (dfs(node.left, tempSum, targetSum) || dfs(node.right, tempSum, targetSum)) {
    return true;
  }
  tempSum -= node.val;
  return false;
}