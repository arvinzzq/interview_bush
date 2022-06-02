// // 占用内存较多的实现
// const quickSort = (arr) => {
//   if (!arr.length) {
//     return [];
//   }
//   const pivot = arr.length - 1;
//   const smallArr = [];
//   const largeArr = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] <= arr[pivot]) {
//       smallArr.push(arr[i]);
//     } else {
//       largeArr.push(arr[i]);
//     }
//   }
//   return quickSort(smallArr).concat(arr[pivot]).concat(quickSort(largeArr));
// }

const partition = (arr, leftIndex, rightIndex) => {
  const pivotValue = arr[rightIndex];
  let pointerLeft = leftIndex;
  let pointerRight = rightIndex;
  while (pointerLeft < pointerRight) {
    while (pointerLeft < pointerRight && arr[pointerLeft] <= pivotValue) {
      pointerLeft++;
    }
    while (pointerRight > pointerLeft && arr[pointerRight] > pivotValue) {
      pointerRight--;
    }
    if (arr[pointerLeft] > arr[pointerRight]) {
      const tmp = arr[pointerLeft];
      arr[pointerLeft] = arr[pointerRight];
      arr[pointerRight] = tmp;
    }
  }
  return pointerLeft;
}

const quickSort = (arr, leftIndex, rightIndex) => {
  if (leftIndex >= rightIndex) {
    return arr;
  }
  const pivot = partition(arr, leftIndex, rightIndex);
  quickSort(arr, leftIndex, pivot - 1);
  quickSort(arr, pivot, rightIndex);
  return arr;
}

const sortArray = (arr) => quickSort(arr, 0, arr.length - 1);

const arr = [3, 44, 38, 5, 47, 5, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

const res = sortArray(arr);

console.log('quick sort result ===> ', res);

console.log('quick sort result ===> ', sortArray([0]));

console.log('quick sort result ===> ', sortArray([2, 3, 3, 5, 6, 7, 1, 2, 23]));

console.log('quick sort result ===> ', sortArray([3,2,3,1,2,4,5,5,6]));
