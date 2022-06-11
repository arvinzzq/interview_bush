const findNearestParentDomNode = (domNode1, domNode2) => {
  const domNodeParentList1 = [];
  const domNodeparentList2 = [];
  let pointer1 = domNode1.parentElement;
  let pointer2 = domNode2.parentElement;
  while (pointer1) {
    domNodeParentList1.unshift(pointer1)
    pointer1 = pointer1.parentElement;
  }
  while (pointer2) {
    domNodeparentList2.unshift(pointer2)
    pointer2 = pointer2.parentElement;
  }
  let commonParent = null;
  for (let i = 0; i < domNodeParentList1.length; i++) {
    if (domNodeParentList1[i] !== domNodeparentList2[i]) {
      break;
    }
    commonParent = domNodeParentList1[i];
  }
  return commonParent;
}