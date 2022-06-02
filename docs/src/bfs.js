
// 测试的树
//                      A
//          B                 E        L       M
//    C      D            F      G
//            
const root = {
  name: 'A',
  children: [{
    name: 'B',
    children: [{
      name: 'C'
    }, {
      name: 'D'
    }]
  }, {
    name: 'E',
    children: [{
      name: 'F'
    }, {
      name: 'G'
    }]
  }, {
    name: 'L'
  }, {
    name: 'M'
  }]
}

function bfs(node) {
  let stack = [node];
  const traverseRes = [];
  while(stack.length) {
    const currentNode = stack.shift();
    traverseRes.push(currentNode.name);
    stack = stack.concat(currentNode.children || []);
  }
  console.log('res: ', traverseRes.join(','));
  return traverseRes;
}

bfs(root)