function flatArray(arr, level = 1) {
  if (level < 0) {
    return[];
  }
  return arr.reduce((preVal, currentVal) => {
    if (currentVal instanceof Array) {
      return preVal.concat(flatArray(currentVal, level - 1));
    } else {
      return preVal.concat(currentVal);
    }
  }, []);
}

const arr = [2, [3, 5, 6, [10, 11]], 4];

console.log(flatArray(arr, 2));

console.log(flatArray([2], 2));

Array.prototype.flat2 = function (level) {
  return flatArray(this.slice(), level);
};

console.log('arr: ', arr);

console.log(arr.flat2());

console.log(arr.flat2(2));