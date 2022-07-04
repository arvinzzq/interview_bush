/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
  let pointer = head;
  while (pointer?.next) {
      if (pointer.next.val === pointer.val) {
          pointer.next = pointer.next.next;
      } else {
          pointer = pointer.next;
      }
  }
  return head;
};