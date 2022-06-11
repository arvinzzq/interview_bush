/**
 * @description https://leetcode.cn/problems/shortest-distance-to-a-character
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {
  let res = new Array(s.length);
  let arrS = s.split('');
  for (let i = 0; i < arrS.length; i++) {
    let leftPointer = i;
    let rightPointer = i;
    while (leftPointer >= 0 || rightPointer < arrS.length) {
      if (leftPointer >= 0 && arrS[leftPointer] === c) {
        res[i] = i - leftPointer;
        break;
      }
      if (rightPointer < arrS.length && arrS[rightPointer] === c) {
        res[i] = rightPointer - i;
        break;
      }
      leftPointer--;
      rightPointer++;
    }
  }
  return res;
}

console.log(shortestToChar('aaab', 'b'));