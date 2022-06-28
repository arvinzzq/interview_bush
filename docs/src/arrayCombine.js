// 区间合并
// 输入：[[3, 6], [1, 4], [8, 10], [9, 12]]
// 输出：[[1, 6], [8, 12]]

function arrayCombine(arr) {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  const sortedArr = arr.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    }
    return 0;
  });
  let res = [];
  let temp = sortedArr[0];
  for (let i = 1; i < len; i++) {
    if (temp[1] >= sortedArr[i][0] && temp[1] <= sortedArr[i][1]) {
      temp[1] = sortedArr[i][1];
      if (i === len - 1) {
        res.push(temp);
      }
    } else if (temp[1] < sortedArr[i][0]) {
      res.push(temp);
      temp = sortedArr[i];
    }
  }
  return res;
}

console.log('arrayCombine: ', arrayCombine([[3, 6], [1, 4], [8, 10], [9, 12], [13, 19], [15, 20], [20, 22]]));

O(nlog)