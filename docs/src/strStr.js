function strStr(haystack, needle) {
  if (!needle.length) {
    return -1;
  }
  const len = haystack.length - needle.length + 1;
  for (let i = 0; i < len; i++) {
    let flag = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return i;
    }
  }
  return -1;
}

console.log(strStr('hello', 'll'));

console.log(strStr('aaaaa', 'bba'));