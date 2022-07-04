// 二叉树的中序遍历
// 左、中、右
const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 8,
        left: null,
        right: null,
      }
    }
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null,
    }
  }
}

// 中序遍历
function inorderTraversal(node) {
  if (!node) {
    return;
  }
  inorderTraversal(node.left);
  console.log(node.val);
  inorderTraversal(node.right);
}

// 前序遍历
function preorderTraversal(node) {
  if (!node) {
    return;
  }
  console.log(node.val);
  preorderTraversal(node.left);
  preorderTraversal(node.right);
}

// 前序遍历
function postorderTraversal(node) {
  if (!node) {
    return;
  }
  postorderTraversal(node.left);
  postorderTraversal(node.right);
  console.log(node.val);
}

console.log(inorderTraversal(root));
console.log('------');
console.log(preorderTraversal(root));
console.log('------');
console.log(postorderTraversal(root));

非递归版本实现二叉树的深度遍历

function dfsNoneRecursive(root) {
  let node = null;
  const res = [];
  const stack = [root];
  while (stack.length) {
    node = stack.pop();
    res.push(node.val);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return res;
}

console.log(dfsNoneRecursive(root));

// [1,2,2,null,3,null,3]
const root2 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 3,
    }
  },
  right: {
    val: 2,
    left: null,
    right:  {
      val: 3,
    }
  }
};

function isSymmetric(root) {
  let node1 = null;
  let node2 = null;
  const stack1 = [root];
  const stack2 = [root];
  while (stack1.length && stack2.length) {
    node1 = stack1.pop();
    node2 = stack2.pop();
    if (!node1 && !node2) {
      continue;
    }
    if ((!node1 || !node2) || node1.val !== node2.val) {
        return false;
    }
    stack1.push(node1.right);
    stack1.push(node1.left);

    stack2.push(node2.left);
    stack2.push(node2.right);
  }
  return true;
}

console.log(isSymmetric(root2));