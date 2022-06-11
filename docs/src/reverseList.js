// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  append(val) {
    this.next = new ListNode(val);
  }
}

const createListNode = (arr = []) => {
  let listNode = new ListNode(arr.shift());
  pointer = listNode;
  while (arr.length) {
    pointer.append(arr.shift());
    pointer = pointer.next;
  }
  return listNode;
};

const list1 = createListNode([1, 2, 4, 5, 3]);


var reverseList = function (head) {
  let pointer = head;
  let preNode = null;
  while (pointer) {
    const nextNode = pointer.next;
    pointer.next = preNode;
    preNode = pointer;
    pointer = nextNode;
  }
  return preNode;
};

function reverseList(head) {
  let pointer = head;
  let preNode = null;
  while (pointer) {
    const nextNode = pointer.next;
    pointer.next = preNode;
    preNode = pointer;
    pointer = nextNode;
  }
  return preNode;
}

const res = reverseList(list1);

console.log('res: ', res);