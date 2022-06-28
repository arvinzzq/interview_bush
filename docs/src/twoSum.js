// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
// 示例
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]


// hash
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      return [map[nums[i]], i];
    } else {
      map[target - nums[i]] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15, 3], 9));

// 双指针，nums为有序数组
function twoSumByPointer(nums, target) {
  let pointerLeft = 0;
  let pointerRight = nums.length - 1;
  while (pointerLeft < pointerRight) {
    if (nums[pointerLeft] + nums[pointerRight] === target) {
      return [pointerLeft, pointerRight];
    } else if (nums[pointerLeft] + nums[pointerRight] < target) {
      pointerLeft++;
    } else if (nums[pointerLeft] + nums[pointerRight] > target) {
      pointerRight--;
    }
  }
  return [];
}

console.log('twoSumByPointer: ', twoSumByPointer([2, 3, 7, 11, 15], 9));