var reverseBits = function(n) {
  const bitArr = [];
  while (n) {
      bitArr.unshift(n % 2);
      n = parseInt(n / 2);
  }
  while (bitArr.length < 32) {
      bitArr.unshift(0);
  }
  let res = 0;
  let mutiple = 1;
  for (let i = 0; i < bitArr.length; i++) {
      res += bitArr[i] * mutiple;
      mutiple *= 2;
  }
  return res;
};