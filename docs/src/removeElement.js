function removeElement(nums, val) {
  const len = nums.length;
  let index = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      if (index !== i) {
        nums[i] = '_';
      }
      index++;
    } else {
      nums[i] = '_';
    }
  }
  return index;
}

console.log(removeElement([3, 2, 2, 3], 3));

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));