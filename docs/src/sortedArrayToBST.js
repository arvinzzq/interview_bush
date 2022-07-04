class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function sortedArrayToBST(nums) {
  return constructBST(nums, 0, nums.length - 1);
}

function constructBST(arr, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return null;
  }
  const mid = Math.floor((rightIndex - leftIndex) / 2) + leftIndex;
  const root = new TreeNode(arr[mid]);
  root.left = constructBST(arr, leftIndex, mid - 1);
  root.right = constructBST(arr, mid + 1, rightIndex);
  return root;
}

console.log(sortedArrayToBST([-10,-3,0,5,9]));