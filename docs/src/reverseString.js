/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  if (!s) {
    return s;
  }
  const strArr = s.split('');
  let leftPointer = 0;
  let rightPointer = strArr.length - 1;
  while (leftPointer < rightPointer) {
    const leftTmp = strArr[leftPointer];
    strArr[leftPointer] = strArr[rightPointer];
    strArr[rightPointer] = leftTmp;
    leftPointer++;
    rightPointer--;
  }
  return strArr.join('');
};

console.log(reverseString('hello'));

console.log(reverseString(''));

console.log(reverseString('i'));

console.log(reverseString('owewewei'));