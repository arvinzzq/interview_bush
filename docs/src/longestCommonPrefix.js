function longestCommonPrefix(strs) {
  if (strs.length < 1) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }
  let resStr = '';
  let pointer = 0;
  let flag = true;
  while (strs.map(str => str[pointer]).every(item => !!item) && flag) {
    for (let i = 0; i < strs.length - 1; i++) {
      if (strs[i][pointer] !== strs[i+1][pointer]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      resStr += strs[0][pointer];
    }
    pointer++;
  }
  return resStr;
}

console.log(longestCommonPrefix(["",""]));

console.log(longestCommonPrefix(["flower","flow","flight"]));

console.log(longestCommonPrefix(["dog","racecar","car"]));