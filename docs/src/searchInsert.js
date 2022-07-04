function searchInsert(nums, target) {
  const len = nums.length;
  if (!len) {
    return 0;
  }

  if (nums[len - 1] === target) {
    return len - 1;
  }

  if (nums[len - 1] < target) {
    return len;
  }
  let leftPointer = 0;
  let rightPointer = len - 1;
  let mid = 0;
  while (leftPointer < rightPointer) {
    mid = Math.floor((rightPointer - leftPointer) / 2) + leftPointer;
    if (nums[mid] < target) {
      leftPointer = mid + 1;
    } else if (nums[mid] > target) {
      rightPointer = mid;
    } else {
      return mid;
    }
  }
  return nums[leftPointer] > target ? leftPointer : leftPointer + 1;
}

console.log(searchInsert([1,3,5,6], 5));

console.log(searchInsert([1,3,5,6], 2));

console.log(searchInsert([1,3,5,6], 4));

console.log(searchInsert([1,3,5,6], 7));