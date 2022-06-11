// 背包问题
// 最多能装多少

const objArr = [
  {value: 4, size: 3},
  {value: 5, size: 4},
  {value: 10, size: 7},
  {value: 11, size: 8},
  {value: 13, size: 9}
];
const size = 16;

// f[i][w]：第i个物品size为w的总value
// f[i][w] = Max(f[i - 1][w], f[i - 1][w - w[i]] + v[i])

function knapsacks(capacity, objArr) {
  let f = [];
  for (let i = 0; i < objArr.length; i++) {
    f[i] = [];
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        f[i][w] = 0;
      } else if (w - objArr[i].size >= 0) {
        f[i][w] = Math.max(f[i - 1][w], f[i - 1][w - objArr[i].size] + objArr[i].value);
      } else {
        f[i][w] = f[i - 1][w];
      }
    }
  }
  return f[objArr.length - 1][capacity];
}

console.log(knapsacks(16, objArr));