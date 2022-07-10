/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
  while (head?.val === val) {
      head = head.next;
  }
  let pointer = head;
  while (pointer) {
      while (pointer?.next?.val === val) {
          pointer.next = pointer.next.next;
      }
      pointer = pointer.next;
  }
  return head;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const createListNode = (arr) => {
  let listNode = null;
  let len = arr.length;
  let tmpNode = null;
  let preNode = null;
  for (let i = 0; i < len; i++) {
    tmpNode = new ListNode(arr[i]);
    if (preNode) {
      preNode.next = tmpNode;
    }
    if (!i) {
      listNode = tmpNode;
    }
    preNode = tmpNode;
  }
  return listNode;
};
const res = removeElements(createListNode([1,2,2,1]), 2);
console.log('res: ', res);

// console.log(removeElements(createListNode([]), 1));

// console.log(removeElements(createListNode([7, 7, 7, 7]), 7));