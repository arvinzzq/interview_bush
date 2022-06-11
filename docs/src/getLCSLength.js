// 最长公共子字符串
// dp[i][j] = dp[i - 1][j - 1] + 1
function getLCSLength(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  const flagMap = [];
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (!flagMap[i]) {
        flagMap[i] = [];
      }
      flagMap[i][j] = '';
    }
  }
  let maxLength = 0;
  let indexRow = null;
  let indexCol = null;
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (i === 0 || j === 0 && str1[i] === str2[j]) {
        flagMap[i][j] = str1[i];
        indexRow = i;
        indexCol = j;
        if (maxLength < 1) {
          maxLength = 1;
        }
      } else if (str1[i] === str2[j]) {
        flagMap[i][j] = flagMap[i - 1][j - 1] + str1[i];
        if (flagMap[i][j].length > maxLength) {
          maxLength = flagMap[i][j].length;
          indexRow = i;
          indexCol = j;
        }
      }
    }
  }
  return flagMap[indexRow][indexCol];
}

console.log(getLCSLength('acbcbcef', 'abcbced'));