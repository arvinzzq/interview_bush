//    1
//  2   4
//3  6    7 

// 1, 2, 3
// 1, 2, 6
// 1, 4, 7

const node = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3
    },
    right: {
      value: 6,
    },
  },
  right: {
    value: 4,
    right: {
      value: 7,
    }
  }
}

function traverser(node, arr) {
  if (!node) {
    return;
  }
  arr.push(node.value);
  // 子节点打印并且pop到上一个节点继续便利
  if (!node.right && !node.left) {
    console.log(arr.join());
    arr.pop();
    return;
  }
  traverser(node.left, arr);
  traverser(node.right, arr);
  arr.pop();
}

traverser(node, []);