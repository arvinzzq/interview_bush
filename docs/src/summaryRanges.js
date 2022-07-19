var summaryRanges = function (nums) {
  const res = [];
  if (nums.length < 2) {
    return nums.map(item => item + '');
  }
  let pointerLow = 0;
  let pointerHigh = 0;
  while (pointerHigh < (nums.length - 1)) {
    if (nums[pointerHigh + 1] === (nums[pointerHigh] + 1)) {
      pointerHigh++;
    } else {
      res.push([nums[pointerLow], nums[pointerHigh]]);
      pointerHigh++;
      pointerLow = pointerHigh;
    }
    if (pointerHigh === nums.length - 1) {
      res.push([nums[pointerLow], nums[pointerHigh]]);
    }
  }

  return res.map(item => item[0] === item[1] ? item[0] + '' : `${item[0]}->${item[1]}`);
};