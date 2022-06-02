const reverseArray = (arr) => {
  if (!arr) {
    return arr;
  }
  let len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    const tmp = arr[i];
    arr[i] = arr[len - i - 1];
    arr[len - i - 1] = tmp;
  }
  return arr;
}

const res1 = reverseArray([2, 3, 4, 5, 6, 7, 8]);
console.log('res1: ', res1);

const res2 = reverseArray([5, 2, 3, 4, 5, 6]);
console.log('res2: ', res2);