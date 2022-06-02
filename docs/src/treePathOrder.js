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

const treePathOrder = (node, stack) => {
  if (!node) {
    return;
  }
  stack.push(node.val);
  if (!node.left && !node.right) {
    console.log(stack.join());
  }
  treePathOrder(node.left, stack);
  treePathOrder(node.right, stack);
  stack.pop();
}

treePathOrder(root, []);