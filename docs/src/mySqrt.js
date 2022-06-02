/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x;
  }
  for (let i = 0; i < x; i++) {
    if (i * i <= x && (i + 1) * (i + 1) > x) {
      return i;
    }
  }
};

const res1 = mySqrt(4);
console.log('res1: ', res1);

const res2 = mySqrt(8);
console.log('res2: ', res2);

const res3 = mySqrt(0);
console.log('res3: ', res3);

const res4 = mySqrt(1);
console.log('res4: ', res4);