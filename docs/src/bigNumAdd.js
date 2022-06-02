// 大数运算
function bigNumAdd(a, b) {
  let str1 = new String(a);
  let str2 = new String(b);
  const maxLength = Math.max(str1.length, str2.length);
  str1 = str1.padStart(maxLength, '0');
  str2 = str2.padStart(maxLength, '0');
  let carry = 0;
  let res = '';
  for (let i = maxLength - 1; i >= 0; i--) {
    const addVal = carry + parseInt(str1[i]) + parseInt(str2[i]);
    carry = Math.floor(addVal / 10);
    res = (addVal % 10) + res;
  }
  return carry ? carry + res : res;
}

const a = '9007199254740991';
const b = '1234567899999999999';
const res = bigNumAdd(a, b);
console.log('res: ', res);