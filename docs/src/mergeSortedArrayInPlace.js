/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function (nums1, m, nums2, n) {
  let res = [];
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 < m && pointer2 < n) {
      if (nums1[pointer1] < nums2[pointer2]) {
          res.push(nums1[pointer1++]);
      } else {
          res.push(nums2[pointer2++]);
      }
  }
  res = res.concat(pointer1 === m ? nums2.slice(pointer2, n) : nums1.slice(pointer1, m));
  for (let i = 0; i < res.length; i++) {
      nums1[i] = res[i];
  }
};

console.log(merge(
  [1, 2, 3, 0, 0, 0],
  3,
  [2, 5, 6],
  3
));