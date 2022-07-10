/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  let pointerSlow = n;
  let pointerFast = nextNum(n);
  // 有环则推出并且不是1
  // 无环则最终为1
  while (pointerFast !== pointerSlow) {
      pointerSlow = nextNum(pointerSlow);
      pointerFast = nextNum(nextNum(pointerFast));
  }
  return pointerSlow === 1;
};

function nextNum(n) {
  let res = 0;
  while (n) {
      const tempVal = n % 10;
      res += tempVal * tempVal;
      n = parseInt(n / 10);
  }
  return res;
}