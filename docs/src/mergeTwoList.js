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

const list1 = createListNode([1, 2, 4]);
const list2 = createListNode([1, 3, 4]);


var mergeTwoLists = function (l1, l2) {
  let res = new ListNode(0);
  let pointerRes = res;
  let pointer1 = l1;
  let pointer2 = l2;
  while (pointer1 && pointer2) {
    if (pointer1.val < pointer2.val) {
      pointerRes.next = pointer1;
      pointer1 = pointer1.next;
    } else {
      pointerRes.next = pointer2;
      pointer2 = pointer2.next;
    }
    pointerRes = pointerRes.next;
  }
  pointerRes.next = pointer1 ? pointer1 : pointer2;
  return res.next;
};

const resList = mergeTwoLists(list1, list2);
console.log('resList: ', resList);
