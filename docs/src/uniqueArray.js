// function uniqueArray(arr) {
//   const map = new Map();
//   return arr.filter(item => (!map.has(item) && map.set(item, item)));
// }

function uniqueArray(arr) {
  return [...new Set(arr)];
}

const obj = { name: 'lalala' };
const arr = [1, 2, 2, 4, 4, 4, '1', 5, obj, 0, 11, 8, obj];
console.log(uniqueArray(arr));