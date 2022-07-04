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