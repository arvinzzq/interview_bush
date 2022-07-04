/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2) {
    return false;
  }
  let strTemp = s;
  const regex = /(\(\))|(\{\})|(\[\])/g;
  let matchRes = strTemp.match(regex);
  while (matchRes) {
    strTemp = strTemp.replace(regex, '');
    matchRes = strTemp.match(regex);
  }
  return !strTemp;
};

console.log(isValid("()"));

console.log(isValid("()[]{}"));

console.log(isValid("(]"));

console.log(isValid("([)]"));

console.log(isValid("{[]}"));