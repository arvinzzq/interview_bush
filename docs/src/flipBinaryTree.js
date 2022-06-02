//       1
//   2       6
// 3  4    5   7
//     9         8
//  10

const treeNode = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
    },
    right: {
      val: 4,
      right: {
        val: 9,
        left: {
          val: 10,
        }
      }
    }
  },
  right: {
    val: 6,
    left: {
      val: 5,
    },
    right: {
      val: 7,
      right: {
        val: 8,
      }
    }
  }
}

const flipBinaryTree = (node) => {
  if (!node) {
    return;
  }
  const leftNode = node.left;
  node.left = node.right;
  node.right = leftNode;
  flipBinaryTree(node.left);
  flipBinaryTree(node.right);
  return node;
}

flipBinaryTree(treeNode);

console.log(treeNode);