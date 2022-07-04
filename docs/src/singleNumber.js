/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n), in-place
var singleNumber = function(nums) {
  let cachedMap = {};
  let sumTemp = 0;
  for (let i = 0; i < nums.length; i++) {
      if (!(nums[i] in cachedMap)) {
          cachedMap[nums[i]] = 1;
      } else {
          cachedMap[nums[i]]++;
      }
      if (cachedMap[nums[i]] % 2) {
          sumTemp += nums[i];
      } else {
          sumTemp -= nums[i];
      }
  }
  return sumTemp;
};

console.log(singleNumber([2,2,1]));

console.log(singleNumber([4,1,2,1,2]));