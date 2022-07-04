function removeDuplicates(nums) {
  const len = nums.length;
  if (len < 2) {
    return len;
  }
  let index = 0;
  for (let i = 1; i < len; i++) {
    if (nums[index] !== nums[i]) {
      nums[++index] = nums[i];
      if (index !== i) {
        nums[i] = '_';
      }
    } else {
      nums[i] = '_';
    }
  }
  console.log('nums: ', nums);
  return index + 1;
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

console.log(removeDuplicates([1,1,2]));

console.log(removeDuplicates([1,2]));