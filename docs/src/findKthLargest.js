var findKthLargest = function(nums, k) {
  const sortedArr = quickSort(0, nums.length - 1, nums);
  return sortedArr[nums.length - k];
};

// 快排
function quickSort(leftIndex, rightIndex, arr) {
  if (leftIndex >= rightIndex) {
      return arr;
  }
  const pivot = partition(leftIndex, rightIndex, arr);
  quickSort(leftIndex, pivot - 1, arr);
  quickSort(pivot, rightIndex, arr);
  return arr;
}

function partition(leftIndex, rightIndex, arr) {
  const pivotVal = arr[rightIndex];
  let pointerLeft = leftIndex;
  let pointerRight = rightIndex;
  while(pointerLeft < pointerRight) {
      while (arr[pointerLeft] <= pivotVal && pointerLeft < pointerRight) {
          pointerLeft++;
      }
      while (arr[pointerRight] > pivotVal && pointerLeft < pointerRight) {
          pointerRight--;
      }
      if (arr[pointerLeft] > arr[pointerRight]) {
          const leftVal = arr[pointerLeft];
          arr[pointerLeft] = arr[pointerRight];
          arr[pointerRight] = leftVal;
      }
  }
  return pointerRight;
}

console.log(findKthLargest([3,2,1,5,6,4], 2));

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));