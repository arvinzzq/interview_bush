/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
  const len1 = a.length;
  const len2 = b.length;
  len = Math.max(len1, len2);
  const aStr = a.padStart(len, '0');
  const bStr = b.padStart(len, '0');
  let carry = 0;
  const res = [];
  for (let i = len - 1; i >= 0; i--) {
      const addVal = parseInt(aStr[i]) + parseInt(bStr[i]) + carry;
      carry = Math.floor(addVal / 2);
      res.unshift(addVal % 2);
  }
  if (carry) {
      res.unshift(carry);
  }
  return res.join('');
};