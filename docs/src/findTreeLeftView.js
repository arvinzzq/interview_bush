//       1
//   2       6
// 3  4    5   7
//     9         8
//  10

const nodeTree = {
  val: 1,
  children: [{
    val: 2,
    children: [{
      val: 3
    }, {
      val: 4,
      children: [{
        val: 9,
        children: [{
          val: 10,
        }],
      }]
    }],
  }, {
    val: 6,
    children: [{
      val: 5,
    }, {
      val: 7,
      children: [{
        val: 8,
      }],
    }],
  }],
};

const dfsTraverseTree = (elementNode, level = 0, callback = () => null) => {
  // 从左到有广度优先便利
  callback(elementNode, level);
  for (let i = 0; i < (elementNode.children || []).length; i++) {
    dfsTraverseTree(elementNode.children[i], level + 1, callback);
  }
}

const findTreeLeftView = (elementNode) => {
  const treeList = [];
  dfsTraverseTree(elementNode, 0, (node, level) => {
    treeList[level] = treeList[level] ? treeList[level].concat(node) : [node];
  });
  return treeList.map(levelList => levelList[0]);
}

const res = findTreeLeftView(nodeTree);

console.log(res.map(i => i.val));
