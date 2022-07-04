function mergeTwoSortedArray(list1, list2) {
  const res = [];
  let pointer1 = 0;
  let pointer2 = 0;
  while (list1[pointer1] && list2[pointer2]) {
    if (list1[pointer1] <= list2[pointer2]) {
      res.push(list1[pointer1++]);
    } else {
      res.push(list2[pointer2++]);
    }
  }
  return list1[pointer1] ? res.concat(list1.slice(pointer1)) : res.concat(list1.slice(pointer2))
}

console.log(mergeTwoSortedArray([1,2,4], [1,3,4]));

console.log(mergeTwoSortedArray([], []));