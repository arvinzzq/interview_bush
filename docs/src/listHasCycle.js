class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  append (val) {
    return this.next = new ListNode(val);
  }
}

const listNode1 = new ListNode(3);

const node1 = listNode1.append(2);
const node2 = node1.append(0);
const node3 = node2.append(-4);
node3.next = node1;

const listNode2 = new ListNode(3);

const node21 = listNode2.append(2);
const node22 = node21.append(0);
const node23 = node22.append(5);
const node24 = node23.append(-4);
node24.next = node21;

const hasCycle = head => {
  let pointerFast = head?.next;
  let pointerSlow = head;
  while (pointerFast && pointerSlow) {
    if (pointerFast === pointerSlow) {
      return true;
    }
    pointerFast = pointerFast.next?.next;
    pointerSlow = pointerSlow.next;
  }
  return false;
};
const res1 = hasCycle(listNode1);
const res2 = hasCycle(listNode2);
console.log('res1: ', res1);
console.log('res2: ', res2);

const hasCycleByMap = head => {
  let pointer = head;
  const pointerMap = new Map();
  while (pointer) {
    if (pointerMap.has(pointer)) {
      return true;
    }
    pointerMap.set(pointer, pointer);
    pointer = pointer.next;
  }
  return false;
}
